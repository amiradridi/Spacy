const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Token = require('../models/token');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:'Your email is required !',
        trim:true,
    },

    telephone: {
        type : Number,
        unique: true,
        required:'Your num tel is required !',

    },

    password: {
        type:String,
        required: 'Your password is required !',
        max:100,
    },
    firstname:{
        type:String,
        required:'Your firstname is required !',
        max:100,
    },
    lastname: {
        type: String,
        required:'Your lastname is required !',
        max:100,
    },

    isVerified: {
        type:Boolean,
        default:false,
    },

    resetPasswordToken:{
        type:String,
        required:false,
    },

    resetPasswordExpires: {
        type : Date,
        required : false,
    }
},{
    timestamps: true,
});

UserSchema.pre('save', async function(next){

    try {
        if (!this.isModified("password")) {
            return next();
        }

        let salt = await  bcrypt.genSalt(10);
        let hash = await bcrypt.hash(this.password, salt);
        this.password=hash;
        next();

    }catch(err){
        next(err);
    }

});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJwt = function(){

    let payload = {
        id : this._id,
        email: this.email,
        telephone: this.telephone,
        firstname: this.firstname,
        lastname : this.lastname
    }
    return jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn:3600
    });
};

UserSchema.methods.generatePasswordReset = function(){
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now()+ 3600000;
};

UserSchema.methods.generateVerificationToken = function(){
    let payload = {
        userId : this._id,
        token : crypto.randomBytes(20).toString('hex'),
    };
    return new Token(payload);
}

module.exports = mongoose.model('User',UserSchema);

