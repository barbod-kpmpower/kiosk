import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyPausedError extends BaseServiceError {
  constructor(message: string = "The process is already paused") {
    super(message, ProcessAlreadyPausedError.name, "PROCESS_ALREADY_PAUSED");
  }
}
