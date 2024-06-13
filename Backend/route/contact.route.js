import express from "express";
import { Data } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/",Data);

export default router;