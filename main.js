console.log("JS Loaded");
// song1 = "";
song1 = "";
song2 = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;
//
function preload() {
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);

}

function modelloaded() {
    console.log("Model Loaded");
}

function draw() {

}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        left_wrist_x = result[0].pose.leftWrist.x;
        left_wrist_y = result[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + left_wrist_x + " Left Wrist Y = " + left_wrist_y);
        right_wrist_x = result[0].pose.rightWrist.x;
        right_wrist_y = result[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + right_wrist_x + " Right Wrist Y = " + right_wrist_y);
    }
}