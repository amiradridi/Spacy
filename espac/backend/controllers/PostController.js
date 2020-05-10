const Post = require('../models/post');
const fs = require('fs');


exports.register = async (req, res) => {
    try{
        let imagePaths = [];
        const url = req.protocol + "://" + req.get("host");
        for(var i=0;i<req.files.length;i++){
            imagePaths.push(url+"/images/"+req.files[i].filename);
        }
        const post = new Post({...req.body,creator:req.user._id,images:imagePaths});
        let poste = await post.save();
        res.status(200).json(poste);
    }catch(err){
        res.status(400).json(err.message);
    }
}

exports.update = async (req,res) => {
    try{
        let list = req.body.delete;
        
        let imagePaths = [];
        
        const post = await Post.findOne({_id:req.params.id});
        
        if(!post) return res.status(400).json({message:"the post does not exist"});
        if(!post.creator.equals(req.user._id)) return res.status(400).json({ message:"You are not authorized to modify this post."});
        if(list){
            for(var i=0;i<list.length;i++){

                let dummy = list[i].split("/");
                filepath = dummy[3]+'/'+dummy[4];
                const index = post.images.indexOf(list[i]);
                console.log(i);
                if (index > -1){
                    console.log(filepath);
                    fs.unlinkSync(filepath);
                    post.images.splice(index,1);
                }   
            }
        }
        const url = req.protocol + "://" + req.get("host");
        
        for(var j=0;j<req.files.length;j++){
            imagePaths.push(url+"/images/"+req.files[j].filename);
        }
       
        post.images.push(...imagePaths) ; 
        
        await post.save();
        
        delete req.body.delete;
        
        const post_ = await Post.findByIdAndUpdate({_id:req.params.id},{ $set:req.body}, { new: true});
        
        res.status(200).json(post_);
    } catch(err){
        res.status(400).json(err.message);
    }
}

exports.getById = async (req, res) => {
    
    try{

        const post = await Post.findOne({_id: req.params.id });
        if(!post) return res.status(400).json({"message":"This post does not exist"});
        res.status(200).json(post);

    }catch(err){
        res.status(400).json({message : err.message })
    }
}

exports.getPosts = async (req , res) => {
    try{
        const posts = await Post.find({});
        if(posts==[]) return res.status(400).json({ message : "there is no posts available !"});
        res.status(200).json(posts);
    } catch(err) {
        res.status(400).json({message : err.message });
    }
}