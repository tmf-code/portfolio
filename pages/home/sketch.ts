import p5 from 'p5';

// Exporting a function called 'mySketch'
export const mySketch = (p: p5) => {
  // Calling p5.js functions, using the variable 'p'
  p.setup = () => {
    // Creating a canvas using the entire screen of the webpage
    p.createCanvas(window.innerWidth, window.innerHeight);
    console.log('p5.js setup function executed!');
  };

  p.draw = () => undefined;

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
  };
};
