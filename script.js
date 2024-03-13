var orangeImg = document.getElementById("orangeFanta");
var grapsImg = document.getElementById("grapsFanta");
var orange = document.getElementById("orange");
var bodyColor=document.querySelector("body");
var grapsText=document.getElementById("grapsText");
var orangeText=document.getElementById("orangeText");
var logo = document.getElementById("logo");
let c=1,d=1;
function change() {
    if (c%2==1||d%2==0) {
    logo.style.backgroundImage="url('grapsImg.jpg')"
    orangeText.hidden=true;
    grapsText.hidden=false;
    orange.src = "grapsImg.jpg"
    orange.style.transition="2s";
    grapsImg.style.backgroundImage = "url('orangeCan1.png')"
    orangeImg.style.backgroundImage = "url('graps1.png')";
    orangeImg.style.transition = "2s"
    orangeImg.style.transition = "2s"
    bodyColor.style.transition="2s"
    bodyColor.style.backgroundColor="purple";
    }
    else{
        logo.style.backgroundImage="url('logo.png')"
        orangeText.hidden=false;
        grapsText.hidden=true;
        orange.src = "orange1.jpg"
        orange.style.transition="2s";
        grapsImg.style.backgroundImage = "url('graps1.png')"
        orangeImg.style.backgroundImage = "url('orangeCan1.png')";
        orangeImg.style.transition = "2s"
        orangeImg.style.transition = "2s"
        bodyColor.style.transition="2s"
        bodyColor.style.backgroundColor=" rgb(255, 102, 0)";
    }
    c++;
}