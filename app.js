const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

let mouse = {
  x: undefined,
  y: undefined
};

  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;

// whenever resizing the browser, the canvas should take up the entire size of screen


window.addEventListener('resize', function() {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
})

// track mouse events, so creating global mouse object and event listener for tracking mouse move

window.addEventListener('mousemove', function(e) {
  // console.log('moving');
  // store the mouse x and y value in the object
  
  mouse.x = event.x;
  mouse.y = event.y;

})


class Shape{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.initialY = y;
  }

  draw = ()=> {

  }

  update = ()=> {

    this.draw();
  }
}

function animate() {

  // request animation frame renders the workspace everytime and calls the animate function clearRect clear everything in the place and sets the height
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // call the animate function
  Shape.draw();
}

animate();