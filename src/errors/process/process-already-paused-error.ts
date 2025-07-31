import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyPausedError extends BaseServiceError {
  constructor(message: string = "Process is already paused") {
    super(ProcessAlreadyPausedError.name, message, "PROCESS_ALREADY_PAUSED");
  }
}
