import { ErrorCode } from "../../types/api";

export class BaseServiceError extends Error {
    public code: ErrorCode;

    constructor(name: string, message: string, code: ErrorCode) {
        super(message);
        this.name = name;
        this.code = code;

        // Ensure the prototype chain is correctly set when extending built-in classes like Error
        // Without this, `instanceof AppError` may fail in some runtimes or transpiled code
        Object.setPrototypeOf(this, new.target.prototype);
    }
}