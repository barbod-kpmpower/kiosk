import { ProcessAlreadyRunningError } from "../errors/process/process-already-running-error";
import { NoProcessError } from "../errors/process/no-process-error";
import ProcessManager from "../ProcessManager";
import { IProcessCreateDto } from "../types/process";

export const processService = {
  get: () => {
    return ProcessManager.getInstance().getProcess();
  },
  create: (process: IProcessCreateDto) => {
    if (!ProcessManager.getInstance().getProcess()) return ProcessManager.getInstance().create(process);
    else throw new ProcessAlreadyRunningError();
  },
  pause: () => {
    if (ProcessManager.getInstance().getProcess()) ProcessManager.getInstance().pause();
    else throw new NoProcessError();
  },
};
