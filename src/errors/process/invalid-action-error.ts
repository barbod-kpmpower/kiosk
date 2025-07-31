import { BaseServiceError } from "./base-service-error";

export class InvalidProcessActionError extends BaseServiceError {
    constructor(action: "pause" | "resume", message = "Action is not allowed in the current state") {
        super(InvalidProcessActionError.name, message, "INVALID_PROCESS_ACTION", { action });
    }
}