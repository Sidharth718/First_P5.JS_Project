function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 175, 150, 220, 200);
    
    rect(40, 40, 20, 420)
    rect(500, 40, 20, 400)
    
    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(510, 50, 80);

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(510, 420, 80);


    

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 380, 20);

    rect(90, 420, 380, 20);

    

    fill(255, 0, 0 );
    stroke(255, 0, 0);
    circle(52, 425, 80);

    

}



