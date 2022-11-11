R_wristX=0;
L_wristX=0;
R_wristY=0;
L_wristY=0;
L_wrist_score=0;
R_wrist_score=0;
Song1="";
Song2="";
status_S1="";
status_S2="";

function preload()
{

song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");

}


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
{


if(results.length > 0)
{

    R_wrist_score=results[0].pose.keypoints[10].score;
    L_wrist_score=results[0].pose.keypoints[9].score;
    console.log("R wrist score-"+R_wrist_score + "L wrist score-"+L_wrist_score);

R_wristX=results[0].pose.rightWrist.x;
R_wristY= results[0].pose.rightWrist.y;

L_wristY=results[0].pose.leftWrist.y;
L_wristX=results[0].pose.leftWrist.x;

console.log("Right wrist X ="+R_wristX+"Right wrist Y ="+R_wristY);
console.log("Left wrist X ="+L_wristX+"Left wrist Y ="+L_wristY);


}

}

function draw()
{
image(video,0,0,700,600);


status_S1= Song1.isPlaying();
status_S2= Song2.isPlaying();
fill('#FF0000');
stroke('#FF0000');

if( L_wrist_score>0.2)
{

circle(L_wristX,L_wristY,15);
Song2.stop();

if(status_S1==false)
{
   
    Song1.play();

    document.getElementById("play_btn").innerHTML="Playing Harry Potter theme song";
    
}

}

if( R_wrist_score>0.2)
{

circle(R_wristX,R_wristY,15);
Song1.stop();

if(status_S2==false)
{
   
    Song2.play();

    document.getElementById("play_btn").innerHTML="Playing Peter pan theme song";
    
}

}


}

function play()
{

play_btn.play();
play_btn.rate(1);
play_btn.setVolume(1);

}
