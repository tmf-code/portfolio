import { Vector } from 'p5';
import { grid } from './grid';
import { Hair } from './Hair';
import { p5Instance } from './p5Instance';

const randRange = (minimum: number, maximum: number) =>
  Math.random() * (maximum - minimum) + minimum;

const jitter = (jitterRange: number) =>
  new Vector().set(randRange(-jitterRange, jitterRange), randRange(-jitterRange, jitterRange));

export class HairGrid {
  grid: Hair[];
  constructor(screenWidth: number, screenHeight: number) {
    const maxDimension = Math.max(screenWidth, screenHeight) * 2.5;

    const cellWidth = 0.01 * maxDimension;
    const cellHeight = 0.01 * maxDimension;
    const thickness = 0.003 * maxDimension;
    const positionJitterRange = 0.005 * maxDimension;
    const growthMin = 0.00003 * maxDimension;
    const growthMax = 0.00008 * maxDimension;
    const lengthMin = 0.01 * maxDimension;
    const lengthMax = 0.028 * maxDimension;

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
        ),
    );
  }

  draw() {
    this.grid.forEach(hair => hair.draw());
  }
}

export const hairGrid = new HairGrid(window.innerWidth, window.innerHeight);
