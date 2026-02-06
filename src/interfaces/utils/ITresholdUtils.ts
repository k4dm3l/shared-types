import { ITreshold } from "../entities/IThreshold.interface";

export interface ITresholdUtils {
  checkCondition: (currentRate: number, treshold: ITreshold, previousRate: number | null) => boolean;
  calculateHoursSinceLastTrigger: (lastTriggeredAt: Date | null) => number;
}