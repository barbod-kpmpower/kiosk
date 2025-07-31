import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyTimedOutError extends BaseServiceError {
    constructor(message = "Process has already timed out") {
        super(ProcessAlreadyTimedOutError.name, message, "PROCESS_ALREADY_TIMED_OUT");
    }
}