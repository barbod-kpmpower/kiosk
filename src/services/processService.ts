import { InvalidProcessActionError } from "../errors/process/invalid-action-error";
import { NoProcessError } from "../errors/process/no-process-error";
import { ProcessAlreadyExistsError } from "../errors/process/process-already-exists-error";
import { ProcessAlreadyPausedError } from "../errors/process/process-already-paused-error";
import { ProcessAlreadyRunningError } from "../errors/process/process-already-running-error";
import { ProcessAlreadyTimedOutError } from "../errors/process/process-already-timed-out-error";
import { ProcessNotRunningError } from "../errors/process/process-not-running-error";
import ProcessManager from "../ProcessManager";
import { IProcessCreateDto } from "../types/process";

const manager = () => ProcessManager.getInstance();

export const processService = {
  getStatus: () => {
    const process = manager().getProcess();
    if (!process) return process;
    return {
      ...process,
      interval: {
        ...process.interval,
        remainingDuration:
          process.interval.targetDuration -
          (process.isRunning
            ? Date.now() - process.interval.startTime.getTime()
            : process.interval.prevSessionsDuration),
      },
    };
  },

  create: (process: IProcessCreateDto) => {
    if (manager().getProcess()) throw new ProcessAlreadyExistsError();

    return manager().create(process);
  },

  pause: () => {
    const process = manager().getProcess();

    if (!process) throw new NoProcessError();
    if (process.pendingAction) throw new InvalidProcessActionError("pause");
    if (!process.isRunning) throw new ProcessAlreadyPausedError();

    manager().pause();
  },

  resume: () => {
    const process = manager().getProcess();

    if (!process) throw new NoProcessError();
    if (process.pendingAction) throw new InvalidProcessActionError("resume");
    if (process.isRunning) throw new ProcessAlreadyRunningError();

    manager().resume();
  },

  timeout: () => {
    const process = manager().getProcess();

    if (!process) throw new NoProcessError();
    if (!process.isRunning) throw new ProcessNotRunningError();
    if (process.pendingAction) throw new ProcessAlreadyTimedOutError();

    manager().timeout();
  },

  overtime: () => {
    const process = manager().getProcess();

    if (!process) throw new NoProcessError();
    // if (!process.pendingAction)

    manager().overtime();
  },
};
