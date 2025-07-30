export class NoActiveProcessError extends Error {
  constructor(message: string = "No active process to pause") {
    super(message);
    this.name = NoActiveProcessError.name;
  }
}
