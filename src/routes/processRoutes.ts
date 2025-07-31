import { Router } from "express";
import { createProcess, getProcess, pauseProcess, testProcess } from "../controllers/processController";

const router = Router();

router.get("/test", testProcess);
router.get("/status", getProcess);
router.post("/create", createProcess);
router.patch("/pause", pauseProcess);
router.patch("/resume", pauseProcess);

export default router;
