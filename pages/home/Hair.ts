import { Vector, Color } from 'p5';
import { p5Instance } from './p5Instance';
import { Mouse } from './Mouse';

type Quad = [number, number, number, number, number, number, number, number];

export class Hair {
  rootPosition: Vector;
  tipPosition: Vector;
  maximumLength: number;
  direction: Vector;
  growthRate: number;
  color: Color;
  startThickness: number;

  private goToAngle: number = ((Math.random() - 1) * Math.PI) / 2.0;

  constructor(
    rootPosition: Vector,
    tipPosition: Vector,
    maximumLength: number,
    direction: Vector,
    color: Color,
    startThickness: number,
    growthRate: number,
  ) {
    this.rootPosition = rootPosition.copy();
    this.tipPosition = tipPosition.copy();
    this.maximumLength = maximumLength;
    this.direction = direction.copy().normalize();
    this.color = color;
    this.startThickness = startThickness;
    this.growthRate = growthRate;
  }

  growStep(tipPosition: Vector, direction: Vector, growthRate: number): Vector {
    return tipPosition.copy().add(direction.copy().mult(growthRate));
  }

  grow(
    rootPosition: Vector,
    tipPosition: Vector,
    direction: Vector,
    growthRate: number,
    maximumLength: number,
  ): Vector {
    const hairLength = this.hairLength(rootPosition, tipPosition);
    if (hairLength > maximumLength) return tipPosition.copy();

    return this.growStep(tipPosition, direction, growthRate);
  }

  thickness(
    rootPosition: Vector,
    tipPosition: Vector,
    startThickness: number,
    maximumLength: number,
  ): number {
    const hairLength = this.hairLength(rootPosition, tipPosition);
    const fractionLength = hairLength / maximumLength;

    return startThickness * (1 - fractionLength);
  }

  hairLength(rootPosition: Vector, tipPosition: Vector): number {
    return Vector.dist(tipPosition, rootPosition);
  }

  shape(
    rootPosition: Vector,
    tipPosition: Vector,
    direction: Vector,
    maximumLength: number,
    startThickness: number,
  ): Quad {
    const thickness = this.thickness(rootPosition, tipPosition, startThickness, maximumLength);

    const normal = direction
      .copy()
      .normalize()
      .rotate(Math.PI / 2.0)
      .normalize();

    const rootOffset = normal.copy().mult(startThickness / 2.0);

    const rootLeft = rootPosition.copy().sub(rootOffset).array().slice(0, 2);
    const rootRight = rootPosition.copy().add(rootOffset).array().slice(0, 2);

    const tipOffset = normal.copy().mult(thickness / 2.0);

    const tipLeft = tipPosition.copy().sub(tipOffset).array().slice(0, 2);

    const tipRight = tipPosition.copy().add(tipOffset).array().slice(0, 2);

    return [...rootLeft, ...rootRight, ...tipRight, ...tipLeft] as Quad;
  }

  collideWith(
    rootPosition: Vector,
    tipPosition: Vector,
    mousePosition: Vector,
    radius: number,
  ): Vector {
    const distanceToMouse = Vector.dist(tipPosition, mousePosition);

    if (distanceToMouse > radius) return tipPosition.copy();

    const fractiondistanceToMouse = 1 - distanceToMouse / radius;

    const hair = Vector.sub(tipPosition, rootPosition);

    const currentAngle = tipPosition.copy().angleBetween(rootPosition.copy());

    const fractionAngle = this.goToAngle - currentAngle;

    const rotateHair = hair.rotate(
      fractionAngle * fractiondistanceToMouse * Math.max(Mouse.VelocityVector().mag(), 0) * 10.0,
    );

    return Vector.add(rootPosition, rotateHair);
  }

  draw() {
    p5Instance.noStroke();
    p5Instance.fill(this.color);

    this.tipPosition = this.collideWith(
      this.rootPosition,
      this.tipPosition,
      Mouse.PositionVector(),
      300,
    );

    const quad = this.shape(
      this.rootPosition,
      this.tipPosition,
      this.direction,
      this.maximumLength,
      this.startThickness,
    );

    p5Instance.quad(...quad);

    this.tipPosition = this.grow(
      this.rootPosition,
      this.tipPosition,
      this.direction,
      this.growthRate,
      this.maximumLength,
    );
  }
}
