import { IInterval, IProcess, IProcessCreateDto } from "./types/process";

class ProcessManager {
  private static instance: ProcessManager;
  private process: IProcess | null = null;
  private interval: IInterval | null = null;

  private constructor() {}

  public static getInstance(): ProcessManager {
    if (!ProcessManager.instance) {
      ProcessManager.instance = new ProcessManager();
    }
    return ProcessManager.instance;
  }

  public create(process: IProcessCreateDto) {
    this.process = {
      component: process.component,
      quantity: process.quantity,
      status: "in-progress",
      createdAt: new Date(),
      // targetDuration: 10 * 60 * 1000, // TODO: Value should be calculated based on component built time estimation
      targetDuration: 10_000,
    };
    this.interval = {
      startTime: this.process.createdAt,
      prevSessionsDuration: 0,
    };
  }

  public reset() {
    this.process = null;
    this.interval = null;
  }

  public getProcess() {
    return this.process;
  }

  public getInterval() {
    return this.interval;
  }
}

export default ProcessManager;
