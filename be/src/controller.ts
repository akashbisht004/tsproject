import bcrypt from 'bcrypt'
import {Request,RequestHandler,Response} from "express";
import { userModel } from "./model";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY;

export const register=async (req:Request,res:Response)=>{
    try{

        const username=req.body.username;
        const password=req.body.password;
        const email=req.body.email;
        
        const hashpass=await bcrypt.hash(password,8);

        await userModel.create({username,password:hashpass,email});
        res.status(200).json({message:"user created"});
    }catch(e){
        res.status(500).send({error: (e as Error).message});
    }
}

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
       res.status(404).send("User doesn't exist");
       return
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        res.status(401).send("Invalid credentials");
        return
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_KEY as string,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token });
  } catch (e) {
    res.status(500).send({ error: (e as Error).message });
  }
};
