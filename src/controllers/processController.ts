import { Request, Response } from "express";
import ProcessManager from "../ProcessManager";
import { ActiveProcessExistsError } from "../errors/process/active-process-exists-error";
import { NoActiveProcessError } from "../errors/process/no-active-process-error";
import { processService } from "../services/processService";
import { IApiResponse } from "../types/api";
import { IProcess, IProcessCreateDto } from "../types/process";
import { createApiError, internalServerError } from "../utils/api";

export const testProcess = (_: Request, res: Response) => {
  res.status(200).json({ message: "Process test endpoint is working" });
};

export const getProcess = (_: Request, res: Response<IApiResponse<IProcess | null>>) => {
  try {
    const process = ProcessManager.getInstance().getProcess();
    res.status(200).json({ success: true, ...(!process && { message: "No active process" }), data: process });
  } catch (error) {
    return internalServerError(res);
  }
};

export const createProcess = (req: Request<{}, {}, IProcessCreateDto>, res: Response<IApiResponse<IProcess>>) => {
  try {
    const process = processService.create(req.body);
    res.status(201).json({ success: true, message: "Process created successfully", data: process });
  } catch (error) {
    if (error instanceof ActiveProcessExistsError) {
      return res
        .status(400)
        .json({ success: false, message: error.message, error: createApiError("ACTIVE_PROCESS_EXISTS") });
    }
    return internalServerError(res);
  }
};

export const pauseProcess = (_: Request, res: Response<IApiResponse>) => {
  try {
    processService.pause();
    return res.status(200).json({ success: true, message: "Process paused" });
  } catch (error) {
    if (error instanceof NoActiveProcessError) {
      return res
        .status(400)
        .json({ success: false, message: error.message, error: createApiError("NO_ACTIVE_PROCESS") });
    }
    return internalServerError(res);
  }
};
