import { Response } from "express";
import { ErrorCode, IApiResponse } from "../types/api";

export const internalServerError = <T = undefined>(res: Response<IApiResponse<T>>) => {
  return res.status(500).json({
    success: false,
    message: "Internal server error",
    error: { code: "INTERNAL_ERROR" },
  });
};

export const createApiError = <T>(code: ErrorCode, details?: T) => {
  return { code, details };
};
