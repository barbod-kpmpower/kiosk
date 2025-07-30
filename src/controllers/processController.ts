import { Request, Response } from "express";
import { IProcessCreateDto } from "../types/process";
import ProcessManager from "../ProcessManager";
import ProcessService from "../services/processService";

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

export const pauseProcess = (req: Request, res: Response) => {
  const process = ProcessManager.getInstance().getProcess();

  if (!process) {
    return res.status(404).json({ message: "No process found to pause" });
  }

  ProcessService.pause();

  res.status(200).json({ message: "Process paused", data: process });
};
