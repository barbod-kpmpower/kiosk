export class ActiveProcessExistsError extends Error {
  constructor(message: string = "An active process already exists") {
    super(message);
    this.name = ActiveProcessExistsError.name;
  }
}
