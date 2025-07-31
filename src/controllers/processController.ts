import { Request, Response } from "express";
import { NoProcessError } from "../errors/process/no-process-error";
import { ProcessAlreadyExistsError } from "../errors/process/process-already-exists-error";
import { ProcessAlreadyPausedError } from "../errors/process/process-already-paused-error";
import { processService } from "../services/processService";
import { IApiResponse } from "../types/api";
import { IProcess, IProcessCreateDto } from "../types/process";
import { internalServerError } from "../utils/api";
import { ProcessAlreadyRunningError } from "../errors/process/process-already-running-error";

export const testProcess = (_: Request, res: Response) => {
  res.status(200).json({ message: "Process test endpoint is working" });
};

export const getProcess = (_: Request, res: Response<IApiResponse<IProcess | null>>) => {
  try {
    const process = processService.get();
    res.status(200).json({ success: true, ...(!process && { message: "No active process" }), data: process });
  } catch (error) {
    return internalServerError(res);
  }
};

export const createProcess = (req: Request<{}, {}, IProcessCreateDto>, res: Response<IApiResponse<IProcess>>) => {
  try {
    const process = processService.create(req.body);
    res.status(201).json({ success: true, message: "Process created", data: process });
  } catch (error) {
    if (error instanceof ProcessAlreadyExistsError) {
      return res.status(400).json({ success: false, message: error.message, error: error.serialize() });
    }
    return internalServerError(res);
  }
};

export const pauseProcess = (_: Request, res: Response<IApiResponse>) => {
  try {
    processService.pause();
    return res.status(200).json({ success: true, message: "Process paused" });
  } catch (error) {
    if (error instanceof NoProcessError || error instanceof ProcessAlreadyPausedError) {
      return res.status(400).json({ success: false, message: error.message, error: error.serialize() });
    }
    return internalServerError(res);
  }
};

export const resumeProcess = (_: Request, res: Response<IApiResponse>) => {
  try {
    processService.resume();
    return res.status(200).json({ success: true, message: "Process resumed" });
  } catch (error) {
    if (error instanceof NoProcessError || error instanceof ProcessAlreadyRunningError) {
      return res.status(400).json({ success: false, message: error.message, error: error.serialize() });
    }
    return internalServerError(res);
  }
};
