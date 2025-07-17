import { userSchema,contentSchema,tagSchema,linkSchema } from "./schema";
import mongoose from "mongoose";



const userModel= mongoose.model("User",userSchema);
const contentModel=mongoose.model("Content",contentSchema);
const tagModel=mongoose.model("Tag",tagSchema);
const linkModel=mongoose.model("Link",linkSchema);

export {userModel,contentModel,tagModel,linkModel};