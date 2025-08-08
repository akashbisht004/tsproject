

import { Router } from "express";
import { registerHandler, signinHandler } from "../controller/auth.controller";

const authRoutes= Router();

authRoutes.post("/register",registerHandler);
authRoutes.post("/sigin",signinHandler);

export default authRoutes;

