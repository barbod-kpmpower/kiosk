import { Request, Response } from "express";
import ProcessManager from "../ProcessManager";
import { NoActiveProcessError } from "../errors/process/no-active-process-error";
import { processService } from "../services/processService";
import { IApiResponse } from "../types/api";
import { IProcessCreateDto } from "../types/process";
import { internalServerError } from "../utils/api";

export const testProcess = (req: Request, res: Response) => {
  res.status(200).json({ message: "Process test endpoint is working" });
};

export const getProcess = (req: Request, res: Response) => {
  res.status(200).json(ProcessManager.getInstance().getProcess());
};

export const createProcess = (req: Request<{}, {}, IProcessCreateDto>, res: Response) => {
  ProcessManager.getInstance().create(req.body);
  res.status(201).json({ message: "Process created successfully" });
};

export const pauseProcess = (_: Request, res: Response<IApiResponse>) => {
  try {
    processService.pause();
    return res.status(200).json({ success: true, message: "Process paused" });
  } catch (error) {
    const success = false;
    if (error instanceof NoActiveProcessError) {
      return res.status(400).json({ success, message: error.message });
    }
    return internalServerError(res);
  }
};
