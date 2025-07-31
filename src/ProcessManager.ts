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

  // ===== Utilities =====

  public create(process: IProcessCreateDto) {
    this.process = {
      component: process.component,
      quantity: process.quantity,
      status: "running",
      createdAt: new Date(),
      // targetDuration: 10 * 60 * 1000, // TODO: Value should be calculated based on component built time estimation
      targetDuration: 10_000,
    };
    this.interval = {
      startTime: this.process.createdAt,
      prevSessionsDuration: 0,
    };

    return this.process;
  }

  public reset() {
    this.process = null;
    this.interval = null;
  }

  // TODO: Determine whether I should have all these null checks?
  public pause() {
    if (this.process && this.interval) {
      this.interval.prevSessionsDuration += Date.now() - this.interval.startTime.getTime();
      this.process.status = "paused";
    }
  }

  public resume() {
    if (this.process && this.interval) {
      this.interval.startTime = new Date();
      this.process.status = "running";
    }
  }

  // ===== Getters =====

  public getProcess() {
    return this.process;
  }

  public getInterval() {
    return this.interval;
  }
}

export default ProcessManager;
