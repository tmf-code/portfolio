import { p5Instance } from './p5Instance';
import { hairGrid } from './HairGrid';

p5Instance.draw = () => {
  p5Instance.background(255);
  hairGrid.draw();
};
