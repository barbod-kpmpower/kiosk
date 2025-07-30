import { NoActiveProcessError } from "../errors/process/no-active-process-error";
import ProcessManager from "../ProcessManager";
import { IProcessCreateDto } from "../types/process";

export const processService = {
  create: (process: IProcessCreateDto) => {
    ProcessManager.getInstance().create(process);
  },
  pause: () => {
    if (ProcessManager.getInstance().getProcess()) ProcessManager.getInstance().pause();
    else throw new NoActiveProcessError();
  },
};
