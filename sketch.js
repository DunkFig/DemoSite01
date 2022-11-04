let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let speeds = [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.6, 3.8, 4.0, 4.2, 4.4, 4.6, 4.8, 5.0, 5.2];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.parent('myContainer');
}

function draw(){
    background(155, 0, 0, 1);
    let i = 0;
    while (i <= 20) {
    let incrament = windowWidth / 20
      noStroke()
      let fillb = map(arr[i], 0, windowHeight, 0, 255)
      fill(i * 50, i * 13, fillb, 50);
      ellipse(incrament * i, arr[i], incrament, incrament);
      arr[i] += speeds[i];
      if (arr[i] > height) {
        arr[i] = 0;
      }
  
      i++;
    }
}
