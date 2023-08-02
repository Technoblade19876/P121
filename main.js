function perload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(590, 50, 70);
    circle(590, 420, 70);
    circle(60, 420, 70);
    circle(60, 60, 70);
    fill(200, 255, 0);
    rect(55, 90, 10 ,300)
    rect(585, 85, 10 ,300)
}


function take_snapshot(){
save("student_name.png");
}


function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}