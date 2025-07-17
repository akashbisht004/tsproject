import mongoose, { Types } from "mongoose";

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const contentTypes=['image', 'video', 'article', 'audio'];

const contentSchema=new mongoose.Schema({
    link:{
        type: String,
        required: true
    },
    tittle:{
        type: String,
        required: true
    },
    type:{
        type: String,
        enum: contentTypes,
        required: true
    },
    tags:[{
        type: Types.ObjectId, ref:'Tag'
    }],
    userId:{
        type: Types.ObjectId,
        ref:'User',
        required: true
    }
},);

const tagSchema=new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique:true
    }
});

const linkSchema=new mongoose.Schema({
    hash:{
        type: String,
        required: true
    },
    userId:{
        type: Types.ObjectId,
        ref: "User",
        required: true,
        unique:true
    }
})

export {userSchema,contentSchema,tagSchema,linkSchema}