const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    const h = width * 0.1;
    const w = height * 0.1;
    const gap = width * 0.03;
    let ix = width * 0.17;
    let iy = height * 0.17;
    let off = width * 0.02;
    let x, y;

    // setInterval(() => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    for (let i of [...Array(5).keys()]) {
      for (let j of [...Array(5).keys()]) {
        x = ix + (gap + w) * i;
        y = iy + (gap + h) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        // context.arc(110, 100, 100, 357, Math.PI);
        context.stroke();
        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, w - off, h - off);
          context.stroke();
        }
      }
    }
    // }, 10000);
  };
};

canvasSketch(sketch, settings);
