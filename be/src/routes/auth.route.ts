

import { Router } from "express";
import { registerHandler, signinHandler } from "../controller/auth.controller";

const authRoutes= Router();

authRoutes.post("/register",registerHandler);
authRoutes.post("/signin",signinHandler);

export default authRoutes;

