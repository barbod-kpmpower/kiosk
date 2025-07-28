import ProcessManager from "../ProcessManager";

export const checkTimeout = () => {
  const processManager = ProcessManager.getInstance();
  const process = processManager.getProcess();
  const interval = processManager.getInterval();

  if (process && interval) {
    const duration = Date.now() - interval.startTime.getTime() + interval.prevSessionsDuration;
    console.log(`Current process duration: ${duration} ms`);
    
    if (duration > process.targetDuration) {
      console.log("Process has timed out");
      processManager.reset();
    }
  }
};
