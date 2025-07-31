import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyRunningError extends BaseServiceError {
  constructor(message: string = "Process is already running") {
    super(message, ProcessAlreadyRunningError.name, "PROCESS_ALREADY_RUNNING");
  }
}
