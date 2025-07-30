export interface IProcess {
  component: string;
  quantity: number;
  status: "in-progress" | "paused" | "completed" | "timeout" | "expired";
  createdAt: Date;
  targetDuration: number;
}

export interface IInterval {
  startTime: Date;
  prevSessionsDuration: number;
}

export interface IProcessCreateDto {
  component: string;
  quantity: number;
}

export interface IProcessGetDto {
  data: IProcess | null;
}