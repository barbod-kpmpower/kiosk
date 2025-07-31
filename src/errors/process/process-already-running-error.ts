import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyRunningError extends BaseServiceError {
  constructor(message: string = "Process is already running") {
    super(ProcessAlreadyRunningError.name, message, "PROCESS_ALREADY_RUNNING");
  }
}
