var button1 = document.querySelector("#RC1_btn");
var button2 = document.querySelector("#RC2_btn");
var button3 = document.querySelector("#RC3_btn");
var button4 = document.querySelector("#PT1_btn");
var button5 = document.querySelector("#PT2_btn");
var button6 = document.querySelector("#PT3_btn");

let i1=i2=i3=i4=i5=i6=0;

button1.addEventListener("click", openSS1);
button2.addEventListener("click", openSS2);
button3.addEventListener("click", openSS3);
button4.addEventListener("click", openSS4);
button5.addEventListener("click", openSS5);
button6.addEventListener("click", openSS6);
window.addEventListener("resize", Reset);

function openSS1(){
    if(!i1) {
        document.querySelector("#pRC1").style.display = "none";
        document.querySelector("#imgRC1").style.display = "block";
        i1=1;
        button1.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pRC1").style.display = "block";
        document.querySelector("#imgRC1").style.display = "none";
        i1=0;
        button1.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS2(){
    if(!i2) {
        document.querySelector("#pRC2").style.display = "none";
        document.querySelector("#imgRC2").style.display = "block";
        i2=1;
        button2.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pRC2").style.display = "block";
        document.querySelector("#imgRC2").style.display = "none";
        i2=0;
        button2.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS3(){
    if(!i3) {
        document.querySelector("#pRC3").style.display = "none";
        document.querySelector("#imgRC3").style.display = "block";
        i3=1;
        button3.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pRC3").style.display = "block";
        document.querySelector("#imgRC3").style.display = "none";
        i3=0;
        button3.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS4(){
    if(!i4) {
        document.querySelector("#pPT1").style.display = "none";
        document.querySelector("#imgPT1").style.display = "block";
        i4=1;
        button4.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT1").style.display = "block";
        document.querySelector("#imgPT1").style.display = "none";
        i4=0;
        button4.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS5(){
    if(!i5) {
        document.querySelector("#pPT2").style.display = "none";
        document.querySelector("#imgPT2").style.display = "block";
        i5=1;
        button5.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT2").style.display = "block";
        document.querySelector("#imgPT2").style.display = "none";
        i5=0;
        button5.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS6(){
    if(!i6) {
        document.querySelector("#pPT3").style.display = "none";
        document.querySelector("#imgPT3").style.display = "block";
        i6=1;
        button6.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT3").style.display = "block";
        document.querySelector("#imgPT3").style.display = "none";
        i6=0;
        
    }
}

function Reset() {
    i1=i2=i3=i4=i5=i6=0;
    if(innerWidth>1350){
        document.querySelector("#pRC1").style.display = "block";
        document.querySelector("#imgRC1").style.display = "block";
        document.querySelector("#pRC2").style.display = "block";
        document.querySelector("#imgRC2").style.display = "block";
        document.querySelector("#pRC3").style.display = "block";
        document.querySelector("#imgRC3").style.display = "block";
        document.querySelector("#pPT1").style.display = "block";
        document.querySelector("#imgPT1").style.display = "block";
        document.querySelector("#pPT2").style.display = "block";
        document.querySelector("#imgPT2").style.display = "block";
        document.querySelector("#pPT3").style.display = "block";
        document.querySelector("#imgPT3").style.display = "block";
    }
    else {
        document.querySelector("#pRC1").style.display = "block";
        document.querySelector("#imgRC1").style.display = "none";
        document.querySelector("#pRC2").style.display = "block";
        document.querySelector("#imgRC2").style.display = "none";
        document.querySelector("#pRC3").style.display = "block";
        document.querySelector("#imgRC3").style.display = "none";
        document.querySelector("#pPT1").style.display = "block";
        document.querySelector("#imgPT1").style.display = "none";
        document.querySelector("#pPT2").style.display = "block";
        document.querySelector("#imgPT2").style.display = "none";
        document.querySelector("#pPT3").style.display = "block";
        document.querySelector("#imgPT3").style.display = "none";
        button1.innerHTML = "SHOW SCREENSHOT";
        button2.innerHTML = "SHOW SCREENSHOT";
        button3.innerHTML = "SHOW SCREENSHOT";
        button4.innerHTML = "SHOW SCREENSHOT";
        button5.innerHTML = "SHOW SCREENSHOT";
        button6.innerHTML = "SHOW SCREENSHOT";
    }
}