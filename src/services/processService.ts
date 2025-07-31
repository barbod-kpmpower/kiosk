import { ProcessAlreadyRunning } from "../errors/process/process-already-running-error";
import { ProcessDoesNotExist } from "../errors/process/no-process-error";
import ProcessManager from "../ProcessManager";
import { IProcessCreateDto } from "../types/process";

export const processService = {
  get: () => {
    return ProcessManager.getInstance().getProcess();
  },
  create: (process: IProcessCreateDto) => {
    if (!ProcessManager.getInstance().getProcess()) return ProcessManager.getInstance().create(process);
    else throw new ProcessAlreadyRunning();
  },
  pause: () => {
    if (ProcessManager.getInstance().getProcess()) ProcessManager.getInstance().pause();
    else throw new ProcessDoesNotExist();
  },
};
