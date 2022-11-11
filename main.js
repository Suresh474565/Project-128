R_wristX=0;
L_wristX=0;
R_wrist_Y=0;
L_wrist_Y=0;

function setup()
{

canvas=createCanvas(700,600);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    
console.log("model has been loaded/initiallized");

}

function gotPoses(results)


if(results.length > 0)
{

wrist_R_X= results[0].pose.rightWrist.x;
wrist_R_Y= results[0].pose.rightWrist.y;

wrist_L_Y=results[0].pose.leftWrist.y;
wrist_L_X=results[0].pose.leftWrist.x;

console.log("Right wrist X ="+wrist_R_X+"Right wrist Y ="+wrist_R_Y);
console.log("Left wrist X ="+wrist_L_X+"Left wrist Y ="+wrist_L_Y);


}