import { ActiveProcessExistsError } from "../errors/process/active-process-exists-error";
import { NoActiveProcessError } from "../errors/process/no-active-process-error";
import ProcessManager from "../ProcessManager";
import { IProcessCreateDto } from "../types/process";

export const processService = {
  get: () => {
    return ProcessManager.getInstance().getProcess();
  },
  create: (process: IProcessCreateDto) => {
    if (!ProcessManager.getInstance().getProcess()) return ProcessManager.getInstance().create(process);
    else throw new ActiveProcessExistsError();
  },
  pause: () => {
    if (ProcessManager.getInstance().getProcess()) ProcessManager.getInstance().pause();
    else throw new NoActiveProcessError();
  },
};
