import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyRunning extends BaseServiceError {
  constructor(message: string = "Process is already running") {
    super(message, ProcessAlreadyRunning.name, "PROCESS_ALREADY_RUNNING");
  }
}
