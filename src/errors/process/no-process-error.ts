import { BaseServiceError } from "./base-service-error";

export class NoProcessError extends BaseServiceError {
  constructor(message: string = "Process does not exist") {
    super(message, NoProcessError.name, "NO_PROCESS");
  }
}
