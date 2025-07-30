import ProcessManager from "../ProcessManager";

export const processService = {
  pause: async () => {
    ProcessManager.getInstance().pause();
  },
};
