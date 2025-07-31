import { BaseServiceError } from "./base-service-error";

export class ProcessDoesNotExist extends BaseServiceError {
  constructor(message: string = "Process does not exist") {
    super(message, ProcessDoesNotExist.name, "NO_PROCESS");
  }
}
