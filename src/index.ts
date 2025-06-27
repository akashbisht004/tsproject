import express from "express";
import { signin, register } from "./controller";
import { contentModel,linkModel } from "./model";
import connectDb from "./db";

const app=express();
app.use(express.json());

app.post("/register",register);
app.post("/signin",signin );

app.post("/content",async (req,res)=>{
    const {link,userId,tittle,tags,type} =req.body;
    try{
        await contentModel.create({link,userId,tittle,tags,type});
        res.json({"message":"content added successfully"});
    }catch(e){
        res.json((e as Error).message);
    }
})
app.get("/content/:contentId",async (req,res)=>{
    const contentId=req.params.contentId;
    try{
        const content=await contentModel.findById(contentId).populate("userId","username");
        res.send(content);
    }catch(e){
        res.json((e as Error).message)
    }
})
app.delete("/content/:contentId",async (req,res)=>{
    const contentId=req.params.contentId;
    try{
        await contentModel.findByIdAndDelete(contentId);
        res.json({"message":"content deleted successfully"})
    }catch(e){
        res.json((e as Error).message)
    }
})
app.get("/shareLink/:userId",(req,res)=>{
   

})
app.post("/shareLink",(req,res)=>{

})


app.listen(5000,()=>{
    connectDb().then(()=>{
        console.log("DB connected")
    },()=>{
        console.log("Db no connected")
    })

    console.log("Server is running!!")
})