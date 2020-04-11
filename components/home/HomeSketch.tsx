/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

// This triggers auto rebuild for conditional imports

// @ts-ignore
import type { createHairGird } from './createHairGrid';
// @ts-ignore
import type { createSketch } from './createSketch';
// @ts-ignore
import type { HairGrid, CreateHairGrid } from './createHairGrid';
// @ts-ignore
import type { Hair } from './Hair';
// @ts-ignore
import type { Mouse } from './Mouse';
import type p5 from 'p5';

const HomeSketch = (): React.ReactElement => {
  if (process.browser) {
    const { createHairGrid }: { createHairGrid: CreateHairGrid } = require('./createHairGrid');
    const sketchDiv = document.getElementsByClassName('sketch')[0] as HTMLDivElement;

    const createP5Instance = () => {
      const { createSketch } = require('./createSketch');
      const sketch = createSketch(sketchDiv);
      const p5Contructor = require('p5');
      const p5Instance = sketchDiv
        ? new p5Contructor(sketch, sketchDiv)
        : new p5Contructor(sketchDiv);
      const hairGrid: HairGrid = createHairGrid(
        p5Instance,
        sketchDiv.offsetWidth,
        sketchDiv.offsetHeight,
        sketchDiv,
      );

      p5Instance.draw = () => {
        p5Instance.background(255);
        hairGrid.draw();
      };

      return p5Instance as p5;
    };

    let p5Instance = createP5Instance();
    window.onresize = () => {
      p5Instance.remove();
      p5Instance = createP5Instance();
    };
  }

  return <div style={{ height: '100%' }} className="sketch"></div>;
};

export { HomeSketch };
