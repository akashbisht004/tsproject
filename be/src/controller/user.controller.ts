import { PrismaClient } from "../../generated/prisma";
import { Request, Response } from "express";

const prisma=new PrismaClient();

export const addContentHandler=async (req:Request,res:Response)=>{
    const {title,url}=req.body;
    const authorId=req.user.id;
    try{
        await prisma.content.create({
            data:{
                title,url,authorId
            }
        });
        res.status(200).json({message:"content added succesfully"});
    }catch(e){
        console.log(e);
        res.status(401).json({error: (e as Error).message});
    }
}

export const getAllContentHandler=async (req:Request,res:Response)=>{
    const authorId=req.user.id;
    try{
        const content=await prisma.content.findMany({
            where:{authorId}
        });
        res.status(200).json({data:content});
    }catch(e){
        console.log(e);
        res.status(401).json({error: (e as Error).message});
    }
}

export const getContentHandler=async (req:Request,res:Response)=>{
 const contentId = Number(req.params.contentId);
    if (!req.params.contentId || isNaN(contentId)) {
    res.status(400).json({ error: "Invalid or missing contentId parameter" });
    return;
  }

    try{
        const content=await prisma.content.findUnique({
            where:{id:contentId}
        });
        res.status(200).json({data:content});
    }catch(e){
        console.log(e);
        res.status(401).json({error: (e as Error).message});
    }
}

export const deleteContentHandler=async (req:Request,res:Response)=>{
    const contentId=Number(req.params.contentId);
    try{
        await prisma.content.delete({
            where:{id:contentId}
        });
    res.status(200).json({message:"content deleted succesfully"});
    }catch(e){
        console.log(e);
        res.status(401).json({error: (e as Error).message});
    }
}

export const updateContentHandler=async (req:Request,res:Response)=>{
    const contentId=Number(req.params.contentId);
    const {url,title}=req.body;
    try{
        await prisma.content.update({
            where:{id:contentId},
            data:{url,title}
        });
        res.status(200).json({message:"updated succesfully"});
    }catch(e){
        console.log(e);
        res.status(401).json({error: (e as Error).message});
    }
}
