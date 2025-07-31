import { BaseServiceError } from "./base-service-error";

export class ProcessNotRunningError extends BaseServiceError {
  constructor(message = "Process is not running") {
    super(ProcessNotRunningError.name, message, "PROCESS_NOT_RUNNING");
  }
}
