import { NextFunction,Request,Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secret=process.env.SECRET_KEY || "SECRET";

export const  encode=(email:string)=>{
    const token=jwt.sign(email,secret as string);
    return token;
}

export const decode=(payload: string,token:string)=>{
    const decoded=jwt.verify(token,secret as string);
    if(decoded==payload) return true;
    return false;
}


export const authMiddleware=async (req:Request,res:Response,next:NextFunction)=>{
    const email=req.body?.email;
    const token=req.header('Authorization')?.replace('Bearer ','');
    if(decode(email,token as string)){
        next();
    }else{
        res.status(401).send('Please authenticate');
    }
   
}