import express from "express";
import cors from "cors";
import { login, logout, signup } from "../controller/auth.controller.js";

const router=express.Router();

router.use(cors());

router.post('/signup',signup)
router.post('/login',login)
router.post('/logout',logout)

export default router;