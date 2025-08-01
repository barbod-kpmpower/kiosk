export interface IProcess {
  component: string;
  quantity: number;
  isRunning: boolean;
  pendingAction: boolean;
  createdAt: Date;
  targetDuration: number;
}

export interface IInterval {
  startTime: Date;
  prevSessionsDuration: number;
  timeLeft: number;
}

export interface IProcessCreateDto {
  component: string;
  quantity: number;
}

export interface IProcessStatusDto {
  process: IProcess | null;
  interval: IInterval | null;
}