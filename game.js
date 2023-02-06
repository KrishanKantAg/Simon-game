const systemGeneratedPattern  =[];
const userClickedPattern = [];

const a  = ["green" , "red" , "yellow" , "blue" ];

var level = 0;
var started = false;
$(document).keydown(function(){
if(!started){
    nextSequence();
    started = true;
}
});

var cc = 0;
    $(".btn").click(function(event){
        if(started){
        userClickedPattern.push(event.currentTarget.id);
        playSound(event.currentTarget.id);
        animate(event.currentTarget.id);
      
      if(userClickedPattern[cc]!=systemGeneratedPattern[cc]){
       error(); 
      }
      cc++;
    if(cc==level){ while(userClickedPattern.length>0){userClickedPattern.pop();} cc=0; setTimeout(function(){nextSequence();},500); }  
   if(cc>level)cc=0;
    }
        });




function nextSequence(){
  level++;
  $("#level-title").text("level "+level);
  function randomNumber(){
    var randomNumber = Math.floor((Math.random())*4);
    return randomNumber;
}
var randomColorChosen = a[randomNumber()];
systemGeneratedPattern.push(randomColorChosen);
    $("#"+randomColorChosen).fadeOut(100).fadeIn(100);
    playSound(randomColorChosen);

}
function error(){
$("body").addClass("red");
setTimeout(function(){
    $("body").removeClass("red");
} , 100);
playSound("wrong");
$("#level-title").text("Game over, press any key to restart");
while(systemGeneratedPattern.length>0){systemGeneratedPattern.pop();}
while(userClickedPattern.length>0){userClickedPattern.pop();}
cc=0; level = 0 ; started = false;
}












function playSound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}
function animate(eie){
    $("#"+eie).addClass("pressed");
    setTimeout(function(){
        $("#"+eie).removeClass("pressed");
    },100);

}