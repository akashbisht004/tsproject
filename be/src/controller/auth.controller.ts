import bcrypt from 'bcrypt'
import {Request,Response} from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { PrismaClient } from '../../generated/prisma';
import { encode } from '../middleware';

const prisma=new PrismaClient();

dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY || "MY_SECRET";

export const registerHandler=async (req:Request,res:Response)=>{
    try{
        const {username,password,email}=req.body;
        const hashpass=await bcrypt.hash(password,8);
        await prisma.user.create({data:{username,password:hashpass,email}});
        res.status(200).json({message:"user created"});
    }catch(e){
        res.status(401).send({error: (e as Error).message});
    }
}

export const signinHandler = async (req: Request, res: Response) => {
  const email=req.body.email;
  try {
    const user = await prisma.user.findUnique({where:{email}});
    if (!user) {
       res.status(404).send("User doesn't exist");
       return
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        res.status(401).send("Invalid credentials");
        return
    }
    const token = encode(email);
    res.status(200).json({ token });
  } catch (e) {
    res.status(500).send({ error: (e as Error).message });
  }
};
