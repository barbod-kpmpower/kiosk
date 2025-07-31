import { OVERTIME_TARGET_DURATION, TARGET_DURATION, TIMEOUT_TARGET_DURATION } from "./constants/process";
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
      isRunning: true,
      pendingAction: false,
      createdAt: new Date(),
      targetDuration: TARGET_DURATION, // TODO: Value should be calculated based on component built time estimation
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
      this.process.isRunning = false;
    }
  }

  public resume() {
    if (this.process && this.interval) {
      this.interval.startTime = new Date();
      this.process.isRunning = true;
    }
  }

  public timeout() {
    if (this.process && this.interval) {
      this.process.targetDuration = TIMEOUT_TARGET_DURATION;
      this.process.pendingAction = true;

      this.interval.prevSessionsDuration = 0;
      this.interval.startTime = new Date();
    }
  }
  
  public overtime() {
    if (this.process && this.interval) {
      this.process.targetDuration = OVERTIME_TARGET_DURATION;
      this.process.pendingAction = false;
      
      this.interval.prevSessionsDuration = 0;
      this.interval.startTime = new Date();
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
