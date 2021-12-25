difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 450);
    canvas.position(560 , 110);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function modelLoaded(){
    console.log('PoseNet Is Intialized!');

}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.y;
difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("#ff2160");

    textSize(difference);
    fill("#05edd6");
    text('HELLO', 50 , 400);
}
