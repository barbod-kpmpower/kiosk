import { NoProcessError } from "../errors/process/no-process-error";
import { ProcessAlreadyExistsError } from "../errors/process/process-already-exists-error";
import { ProcessAlreadyPausedError } from "../errors/process/process-already-paused-error";
import { ProcessAlreadyRunningError } from "../errors/process/process-already-running-error";
import ProcessManager from "../ProcessManager";
import { IProcessCreateDto } from "../types/process";

const manager = () => ProcessManager.getInstance();

export const processService = {
  get: () => {
    return manager().getProcess();
  },

  create: (process: IProcessCreateDto) => {
    if (manager().getProcess()) throw new ProcessAlreadyExistsError();

    return manager().create(process);
  },

  pause: () => {
    const process = manager().getProcess();

    if (!process) throw new NoProcessError();
    if (process.status === "paused") throw new ProcessAlreadyPausedError();
    
    manager().pause();
  },
  
  resume: () => {
    const process = manager().getProcess();
  
    if (!process) throw new NoProcessError();
    if (process.status === "running") throw new ProcessAlreadyRunningError();
    
    manager().resume();
  },
};
