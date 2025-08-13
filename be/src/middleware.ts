import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "./utils";

dotenv.config();
const secret = process.env.SECRET_KEY || "SECRET";

export const encode=(user:IUser)=>{
    const token=jwt.sign(user,secret as string);
    return token;
}

export const decode=(token:string)=>{
    return jwt.verify(token,secret as string);
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
       res.status(401).json({ error: "No token provided" });
       return;
    }
    const decoded = decode(token);
    req.user = decoded as IUser;
    next();
  } catch (error) {
     res.status(401).json({ error: "Invalid or expired token" });
     return;
  }
};
