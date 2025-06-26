import bcrypt from 'bcrypt'
import {Request,Response} from "express";
import { userModel } from "./model";



export const register=async (req:Request,res:Response)=>{
    try{

        const username=req.body.username;
        const password=req.body.password;
        const email=req.body.email;
        
        const hashpass=bcrypt.hash(password,8);

        await userModel.create({username,hashpass,email});
        res.status(200).json({message:"user created"});
    }catch(e){
        res.status(500).send({error: (e as Error).message});
    }
}

export const signin=async (req:Request,res:Response)=>{
    try{
        const user = await userModel.findOne({ username: req.body.username });
        if (!user) {
            res.send("user doesn't exist");
            return;
        }
        
        if ( await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).json({ message: "signin successful" });
        } else {
            res.status(401).json({ message: "invalid credential" });
        }

    } catch (e) {
        res.status(500).send({ error: (e as Error).message });
    }
}