import { Vector } from 'p5';
import { Mouse } from './Mouse';

export class RelativeMouse {
  container: HTMLDivElement;
  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  positionVector(): Vector {
    const { left, top } = this.container.getBoundingClientRect();
    const position = Mouse.PositionVector().copy().sub(left, top);
    return position;
  }
}
