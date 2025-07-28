import { Router } from "express";
import { createProcess, testProcess } from "../controllers/processController";

const router = Router();

router.get("/test", testProcess);
router.post("/start", createProcess);
// router.put("/pause", );

export default router;
