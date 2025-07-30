import { Router } from "express";
import { createProcess, pauseProcess, testProcess } from "../controllers/processController";

const router = Router();

router.get("/test", testProcess);
router.post("/start", createProcess);
router.put("/pause", pauseProcess);

export default router;
