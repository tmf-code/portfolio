import { mySketch } from './sketch';
import p5 from 'p5';

const sketch = document.getElementById('sketch');

export const p5Instance = sketch ? new p5(mySketch, sketch) : new p5(mySketch);
