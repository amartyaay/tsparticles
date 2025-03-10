import type { ICoordinates } from "./ICoordinates";
import type { Vector } from "../Utils";

export interface ICircleBouncer {
    position: ICoordinates;
    velocity: Vector;
    radius: number;
    mass: number;
    factor: Vector;
}
