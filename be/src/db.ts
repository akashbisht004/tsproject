import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const url:string=process.env.MONGODB_URL as string;

const connectDb=async():Promise<void>=>{
        await mongoose.connect(url);
};

export default connectDb;

