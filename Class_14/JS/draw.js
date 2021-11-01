function draw() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // let WIDTH = document.documentElement.clientWidth;
    // let HEIGHT = document.documentElement.clientHeight;

    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;


    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function random(number) {
      return Math.floor(Math.random()*number);
    }

    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      //ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.fillStyle = 'rgba('+random(255)+','+random(255)+',0.5)';
      //ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), Math.PI, 2 * Math.PI, true);
      ctx.fill();
    }
  }
   