import { Router } from "express";
import { createProcess, getProcess, pauseProcess, testProcess } from "../controllers/processController";

const router = Router();

router.get("/test", testProcess);
router.get("/get", getProcess);
router.post("/start", createProcess);
router.put("/pause", pauseProcess);

export default router;
