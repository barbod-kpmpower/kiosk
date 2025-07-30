import ProcessManager from "../ProcessManager";

export default {
  pause: async () => {
    ProcessManager.getInstance().pause();
  },
};
