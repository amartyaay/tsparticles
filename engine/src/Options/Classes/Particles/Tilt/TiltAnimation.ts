import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { ITiltAnimation } from "../../../Interfaces/Particles/Tilt/ITiltAnimation";
import type { RecursivePartial } from "../../../../Types";

/**
 * @category Options
 */
export class TiltAnimation implements ITiltAnimation, IOptionLoader<ITiltAnimation> {
    enable;
    speed;
    sync;

    constructor() {
        this.enable = false;
        this.speed = 0;
        this.sync = false;
    }

    load(data?: RecursivePartial<ITiltAnimation>): void {
        if (data === undefined) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.speed !== undefined) {
            this.speed = data.speed;
        }

        if (data.sync !== undefined) {
            this.sync = data.sync;
        }
    }
}
