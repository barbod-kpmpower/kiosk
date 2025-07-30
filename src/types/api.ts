import { ERROR_CODES } from "../constants/api";

export type ErrorCode = keyof typeof ERROR_CODES;

export interface IApiResponse<TData = undefined, TError = undefined> {
  success: boolean;
  message?: string;
  data?: TData;
  error?: {
    code: ErrorCode;
    details?: TError;
  };
}
