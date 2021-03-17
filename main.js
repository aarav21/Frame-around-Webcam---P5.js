function setup(){
    canvas = createCanvas(400,300);
    canvas.position(250,350)
    video = createCapture(VIDEO);
    video.hide();
    tintColor=""

}

function draw(){
    image(video, 0,0,400,300)
    tintColor = document.getElementById("color").value;
    tint(tintColor)   
stroke("crimson");
fill("cadetblue")
    circle(30, 30, 20);
    circle(30,270,20)
    circle(370,270,20)
    circle(370, 30, 20);
}

function takeSnapshot(){
    save("your_image.png");
}

