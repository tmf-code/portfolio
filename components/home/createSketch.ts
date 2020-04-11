import p5 from 'p5';

export const createSketch = (parent: HTMLDivElement) => {
  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(parent.offsetWidth, parent.offsetHeight);
    };

    p.draw = () => undefined;

    p.windowResized = () => {
      p.resizeCanvas(parent.offsetWidth, parent.offsetHeight);
    };
  };

  return sketch;
};
