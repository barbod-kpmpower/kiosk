import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyExistsError extends BaseServiceError {
  constructor(message: string = "Process already exists") {
    super(message, ProcessAlreadyExistsError.name, "PROCESS_ALREADY_EXISTS");
  }
}
