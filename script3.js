var button8 = document.querySelector("#PT5_btn");
var button9 = document.querySelector("#PT6_btn");
var button10 = document.querySelector("#PT7_btn");

let i8=i9=i10=0;

button8.addEventListener("click", openSS8);
button9.addEventListener("click", openSS9);
button10.addEventListener("click", openSS10);
window.addEventListener("resize", Reset);

function openSS8(){
    if(!i8) {
        document.querySelector("#pPT5").style.display = "none";
        document.querySelector("#imgPT5").style.display = "block";
        i8=1;
        button8.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT5").style.display = "block";
        document.querySelector("#imgPT5").style.display = "none";
        i8=0;
        button8.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS9(){
    if(!i9) {
        document.querySelector("#pPT6").style.display = "none";
        document.querySelector("#imgPT6").style.display = "block";
        i9=1;
        button9.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT6").style.display = "block";
        document.querySelector("#imgPT6").style.display = "none";
        i9=0;
        button9.innerHTML = "SHOW SCREENSHOT";
    }
}

function openSS10(){
    if(!i10) {
        document.querySelector("#pPT7").style.display = "none";
        document.querySelector("#imgPT7").style.display = "block";
        i10=1;
        button10.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT7").style.display = "block";
        document.querySelector("#imgPT7").style.display = "none";
        i10=0;
        button10.innerHTML = "SHOW SCREENSHOT";
    }
}


function Reset() {
    i8=i9=i10=0;
    if(innerWidth>1350) {
        document.querySelector("#pPT5").style.display = "block";
        document.querySelector("#imgPT5").style.display = "block";
        document.querySelector("#pPT6").style.display = "block";
        document.querySelector("#imgPT6").style.display = "block";
        document.querySelector("#pPT7").style.display = "block";
        document.querySelector("#imgPT7").style.display = "block";
    }
    else {
        document.querySelector("#pPT5").style.display = "block";
        document.querySelector("#imgPT5").style.display = "none";
        document.querySelector("#pPT6").style.display = "block";
        document.querySelector("#imgPT6").style.display = "none";
        document.querySelector("#pPT7").style.display = "block";
        document.querySelector("#imgPT7").style.display = "none";
        button8.innerHTML = "SHOW SCREENSHOT";
        button9.innerHTML = "SHOW SCREENSHOT";
        button10.innerHTML = "SHOW SCREENSHOT";
    }
}
