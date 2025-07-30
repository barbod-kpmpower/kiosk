import { Response } from "express";
import { IApiResponse } from "../types/api";

export const internalServerError = (res: Response<IApiResponse>) => {
  return res.status(500).json({
    success: false,
    message: "Internal server error",
    error: { code: "INTERNAL_ERROR" },
  });
};
