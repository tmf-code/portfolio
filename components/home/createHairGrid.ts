import p5, { Vector } from 'p5';
import { grid } from './grid';
import { Hair } from './Hair';
import { RelativeMouse } from './RelativeMouse';

const randRange = (minimum: number, maximum: number) =>
  Math.random() * (maximum - minimum) + minimum;

const jitter = (jitterRange: number) =>
  new Vector().set(randRange(-jitterRange, jitterRange), randRange(-jitterRange, jitterRange));

export class HairGrid {
  grid: Hair[];
  p5Instance: p5;
  screenWidth: number;
  constructor(
    screenWidth: number,
    screenHeight: number,
    p5Instance: p5,
    container: HTMLDivElement,
  ) {
    const maxDimension = Math.max(screenWidth, screenHeight) * 2.5;

    const cellWidth = 0.01 * maxDimension;
    const cellHeight = 0.01 * maxDimension;
    const thickness = 0.01 * maxDimension;
    const positionJitterRange = 0.005 * maxDimension;
    const growthMin = 0.00003 * maxDimension;
    const growthMax = 0.00008 * maxDimension;
    const lengthMin = 0.005 * maxDimension;
    const lengthMax = 0.01 * maxDimension;

    const directionLeft = -0.1;
    const directionRight = 0.8;

    const positions = grid(screenWidth, screenHeight, cellWidth, cellHeight).map(position =>
      Vector.add(position, jitter(positionJitterRange)),
    );

    const directions = positions.map(() =>
      new Vector().set(randRange(directionLeft, directionRight), 1),
    );

    const growthRates = positions.map(() => randRange(growthMin, growthMax));
    const maximumLengths = positions.map(() => randRange(lengthMin, lengthMax));

    const color = p5Instance.color(0, 0, 0, 200);

    this.p5Instance = p5Instance;
    this.screenWidth = screenWidth;
    this.grid = positions.map(
      (position, index) =>
        new Hair(
          position,
          position,
          maximumLengths[index],
          directions[index],
          color,
          thickness,
          growthRates[index],
          this.p5Instance,
          this.screenWidth,
          new RelativeMouse(container),
        ),
    );
  }

  draw() {
    this.grid.forEach(hair => hair.draw());
  }
}

const createHairGrid = (p5Instance: p5, width: number, height: number, container: HTMLDivElement) =>
  new HairGrid(width, height, p5Instance, container);

type CreateHairGrid = typeof createHairGrid;
export type { CreateHairGrid };

export { createHairGrid };
