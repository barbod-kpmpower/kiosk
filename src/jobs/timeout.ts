import ProcessManager from "../ProcessManager";
import { processService } from "../services/processService";

export const checkTimeout = () => {
  const processManager = ProcessManager.getInstance();
  const process = processManager.getProcess();
  const interval = processManager.getInterval();

  if (process && interval) {
    const duration = Date.now() - interval.startTime.getTime() + interval.prevSessionsDuration;
    console.log(`Current process duration: ${duration} ms`);
    
    if (process.isRunning && duration > process.targetDuration) {
      console.log("Process has timed out");

      if (process.pendingAction) {
        console.log("EXPIRE");
        processManager.reset();
      } else {
        console.log("DISPLAY POPUP");
        processService.timeout();
      }
    }
  }
};
