export class ProcessAlreadyRunning extends Error {
  constructor(message: string = "An active process already exists") {
    super(message);
    this.name = ProcessAlreadyRunning.name;
  }
}
