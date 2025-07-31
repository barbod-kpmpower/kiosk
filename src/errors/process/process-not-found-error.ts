export class ProcessNotFound extends Error {
  constructor(message: string = "No process exists") {
    super(message);
    this.name = ProcessNotFound.name;
  }
}
