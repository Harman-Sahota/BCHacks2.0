var w = window.innerWidth;
var h = window.innerHeight;  
var star1Radius = 1;			//stars that are furthest back
var star1Speed = 2;
var star1Num = 100;
var star2Radius = 1.5;		//stars that are closest 
var star2Speed = 3;
var star2Num = 20;


var star1 = [];			//an array for star1 objects
var star2 = [];			//an array for star2 objects
var meteor = [];		//an array for meteor objects


function setup() {
    canvas = createCanvas(w-25 ,h);
    canvas.parent('canvas');  
  canvas.style('z-index', '-1');
  canvas.position(0,0);  
  canvas.scale(5);  
  noStroke();
   // noCursor();

    for (var i = 0; i < star1Num; i++) {
        star1[i] = new Star1();
    }

    for (var j = 0; j < star2Num; j++) {
        star2[j] = new Star2();
    }

    var div = createDiv('');
    var div2 = createDiv('');
    var line = createDiv('');
  
 
  
    
}

function draw() {

    background(0, 0, 0);
    for (var i = 0; i < star1Num; i++) {
        star1[i].move();
        star1[i].display();
    }

    for (var j = 0; j < star2Num; j++) {
        star2[j].move();
        star2[j].display();
    }

    
}

function Star1() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);

    this.display = function () {
        fill(220);
        noStroke();
        ellipse(this.x, this.y, star1Radius * 2, star1Radius * 2);
    }

    this.move = function () {
        if (this.y > windowHeight)		//if the star goes below the screen
        {
            this.y = 0;						//reset to the top of the screen
            this.x = random(0, windowWidth);
        }
        else {
            this.y += star1Speed;
        }
    }
}

function Star2() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);

    this.display = function () {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, star2Radius * 2, star2Radius * 2);
    }

    this.move = function () {
        if (this.y > windowHeight)		//if the star goes below the screen
        {
            this.y = 0;						//reset to the top of the screen
            this.x = random(0, windowWidth);
        }
        else {
            this.y += star2Speed;
        }
    }
}

window.onresize = function () {
    // assigns new values for width and height variables
    w = windowWidth;
    h = windowHeight;
  //  canvas.size(w, h);
}

