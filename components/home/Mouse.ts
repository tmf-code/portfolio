import { Vector } from 'p5';

export class Mouse {
  static instance = new Mouse();
  public position: [number, number];
  public positionVector: Vector;
  public velocityVector: Vector;

  private timeout: NodeJS.Timeout | undefined;
  private constructor() {
    this.position = [0, 0];
    this.positionVector = new Vector().set(this.position[0], this.position[1]);
    this.velocityVector = new Vector().set(this.position[0], this.position[1]);
    document.addEventListener('mousemove', (event: MouseEvent) => {
      const prevPosition = this.positionVector.copy();
      // const [scaleX, scaleY] = [window.innerWidth, window.innerHeight];
      this.position = [event.clientX, event.clientY];
      this.positionVector = new Vector().set(this.position[0], this.position[1]);

      this.velocityVector = this.positionVector.copy().sub(prevPosition);
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(() => (this.velocityVector = new Vector().set(0, 0)), 10);
    });
  }
  static Position(): [number, number] {
    return this.instance.position;
  }

  static PositionVector(): Vector {
    return this.instance.positionVector.copy();
  }

  static VelocityVector(): Vector {
    return this.instance.velocityVector.copy().div(window.innerWidth);
  }
}
