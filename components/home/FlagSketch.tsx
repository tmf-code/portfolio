/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

// This triggers auto rebuild for conditional imports

import type p5 from 'p5';

const FlagSketch = (): React.ReactElement => {
  if (process.browser) {
    const sketchDiv = document.getElementsByClassName('sketch')[0] as HTMLDivElement;

    const createP5Instance = () => {
      const { createSketch } = require('./createSketch');
      const sketch = createSketch(sketchDiv);
      const p5Contructor = require('p5');
      const p5Instance = sketchDiv
        ? new p5Contructor(sketch, sketchDiv)
        : new p5Contructor(sketchDiv);

      const noiseScale = 0.02;
      p5Instance.draw = () => {
        p5Instance.background(255);
        p5Instance.fill(0);
        p5Instance.stroke(0);
        p5Instance.strokeWeight(2);
        for (let x = 0; x < p5Instance.width; x += 20) {
          const noiseVal = p5Instance.noise(
            (p5Instance.mouseX + x) * noiseScale,
            p5Instance.mouseY * noiseScale,
          );
          p5Instance.line(x, p5Instance.mouseY + noiseVal * 200, x, p5Instance.height);
          p5Instance.triangle(
            x,
            p5Instance.mouseY + noiseVal * 200 + 30,
            x,
            p5Instance.mouseY + noiseVal * 200 + 10,
            x + 10,
            p5Instance.mouseY + noiseVal * 200 + 20,
          );
        }
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

export { FlagSketch };
