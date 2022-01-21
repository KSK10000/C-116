nose_x=0;
nose_y=0;
function preload(){
    Mustache=loadImage('https://i.postimg.cc/PfSW3p6y/MUSTACHE.png');
}
function setup(){
    Canvas=createCanvas(300,290);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,290);
    video.hide();
    pose_net=ml5.poseNet(video,modelloaded);
    pose_net.on('pose',got_poses);
}
function draw(){
    image(video,0,0,300,290);
    image(Mustache,nose_x,nose_y,60,30);
}
function take_snapshot(){
    save('downloaded.png');
}
function modelloaded(){
    console.log("Post Net Is Successfully Assigned");
}
function got_poses(results){
    if(results.length>0){
       
    
    console.log(results);
    nose_x=results[0].pose.nose.x-27;
    console.log("nose_x= "+nose_x);
    nose_y=results[0].pose.nose.y+6;
    console.log("nose_y= "+nose_y);
    }
}