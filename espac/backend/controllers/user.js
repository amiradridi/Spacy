const User = require('../models/user');
const Token = require('../models/token');
const {sendEmail} = require('../utils/index');

exports.register = async (req , res , next) => {
   
   try{
        const {email} = req.body;
        const user = await User.findOne({email});
        if (user) return res.status(401).json({message: 'The email address you have entered is already associated with another account.'});
        const newUser = new User(req.body);
        const user_ = await newUser.save();
        await  verificationEmail(user_ ,req , res);
   }catch(err){
       res.status(400).json(err);
   }
}

exports.verify = async (req , res) => {

    if(!req.params.token) return res.status(400).json({message: "We were unable to find a user for this token."});

    try{

        const token = await Token.findOne({ token: req.params.token });
        if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token my have expired.' });
        const user = await User.findOne({ _id: token.userId });
        if(!user)  return res.status(400).json({ message: 'We were unable to find a user for this token.' });
        if(user.isVerified) return res.status(400).json({ message: 'This user has already been verified.' });
        user.isVerified = true;
        console.log("**")
        await user.save()
        console.log("***")
        res.status(200).send({message:"The account has been verified. Please log in."});

    }catch(err){
        res.json(err);
    }
}

exports.login = async function(req,res){
    try{
        const { email , password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({msg: 'The email address ' + email + ' is not associated with any account. Double-check your email address and try again.'});
        if (!user.comparePassword(password)) return res.status(401).json({message: 'Invalid email or password'});
        if (!user.isVerified) return res.status(401).json({ type: 'not-verified', message: 'Your account has not been verified.' });
        res.status(200).json({ token: user.generateJwt()});
    }catch(err){
        res.status(500).json({error : err.message });
    }
}


async function verificationEmail(user , req ,res){

    try{
        const token = user.generateVerificationToken();
        await token.save();
        let subject = "Account Verification";
        let to = user.email;
        let from = process.env.FROM_EMAIL;
        console.log(from);
        let link="http://"+req.headers.host+"/users/verify/"+token.token;
        let html = `<p>Hi ${user.username}<p><br><p>Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                    <br><p>If you did not request this, please ignore this email.</p>`;
        
        await sendEmail({to, from, subject, html});

        res.status(200).json({message: 'A verification email has been sent to ' + user.email + '.'});
    }catch(err){
        res.json(err);
    }
}