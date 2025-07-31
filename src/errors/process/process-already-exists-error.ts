import { BaseServiceError } from "./base-service-error";

export class ProcessAlreadyExists extends BaseServiceError {
  constructor(message: string = "Process already exists") {
    super(message, ProcessAlreadyExists.name, "PROCESS_ALREADY_EXISTS");
  }
}
