function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#ff0000");
    stroke("#ff0000");
    song.isPlaying();
    if (scoreleftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song.stop(Rightsong);
        InNumber = Number(leftWristY);
        remove_decimals = floor(InNumber);
        volume = remove_decimals / 500;
        if (Leftsong = false) {
            song.isPlaying();
        }
    }

    if (scorerightWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        song.stop(Leftsong);
        if (Rightsong = false) {
            song.isPlaying()
        }
    }
}
song = "";
song = "";
Rightsong = "music.mp3";
Leftsong = "music2.mp3";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scorerightWrist = 0;
scoreleftWrist = 0;

function preload() {
    song = loadSound("music.mp3");
    song = loadSound("music2.mp3");
}

function play() {
    song.play();
    song.isPlaying();
    song.stop();
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        scorerightWrist = results[0].pose.keypoints[10].score;

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scorerightWrist = " + scorerightWrist + "scoreleftWrist = " + scoreleftWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}