// ===== Models =====

export interface IInterval {
  startTime: Date;
  targetDuration: number;
  prevSessionsDuration: number;
}

export interface IProcess {
  component: string;
  quantity: number;
  isRunning: boolean;
  pendingAction: boolean;
  createdAt: Date;
  interval: IInterval;
}

// ===== DTOs =====

export interface IProcessCreateDto {
  component: string;
  quantity: number;
}

export interface IIntervalStatusDto extends IInterval {
  remainingDuration: number;
}

export interface IProcessStatusDto extends IProcess {
  interval: IIntervalStatusDto;
}
