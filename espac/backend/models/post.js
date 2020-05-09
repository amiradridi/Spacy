const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true

    },
    type : {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    images:[{
        type:String
    }],
    prix:{
        type:Number,
        required:true
    },
    adresse : {
        type: String,
        required: true,
    },
    ville : {
        type : String,
        required: true
    },
    date_debut:{
        type : Date,
        required: true
    },
    date_fin: {
        type: Date,
        required: true,
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

},{
    timestamps: true
});

const Post = mongoose.model('Post',PostSchema);
module.exports = Post;