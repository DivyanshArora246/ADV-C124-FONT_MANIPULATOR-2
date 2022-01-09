function setup(){
    video = createCapture(VIDEO);
    video.size(450,400);
    video.position(5,100);

    canvas = createCanvas(450,400);
    canvas.position(480,100);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function modelLoaded(){
    console.log("PoseNet Is Inishilized!");
}

function draw(){
    background('#808080');
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
    }
}