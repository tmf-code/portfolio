/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

// This triggers auto rebuild for conditional imports

// @ts-ignore
import type { createHairGird } from './createHairGrid';
// @ts-ignore
import type { createSketch } from './createSketch';
// @ts-ignore
import type { HairGrid } from './createHairGrid';
// @ts-ignore
import type { Hair } from './Hair';
// @ts-ignore
import type { Mouse } from './Mouse';

const HomeSketch = (): React.ReactElement => {
  if (process.browser) {
    const { createHairGird } = require('./createHairGrid');
    const sketchDiv = document.getElementsByClassName('sketch')[0] as HTMLDivElement;

    const createP5Instance = () => {
      const { createSketch } = require('./createSketch');
      const sketch = createSketch(sketchDiv);
      const p5 = require('p5');
      return sketchDiv ? new p5(sketch, sketchDiv) : new p5(sketchDiv);
    };

    const p5Instance = createP5Instance();
    const hairGrid = createHairGird(p5Instance, sketchDiv.offsetWidth, sketchDiv.offsetHeight);

    p5Instance.draw = () => {
      p5Instance.background(255);
      hairGrid.draw();
    };
  }

  return <div style={{ height: '100%' }} className="sketch"></div>;
};

export { HomeSketch };
