import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyExistsError extends BaseServiceError {
  constructor(message: string = "Process already exists") {
    super(ProcessAlreadyExistsError.name, message, "PROCESS_ALREADY_EXISTS");
  }
}
