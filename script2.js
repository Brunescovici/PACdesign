var button7 = document.querySelector("#PT4_btn");

let i7=0;

button7.addEventListener("click", openSS7);
window.addEventListener("resize", Reset);

function openSS7(){
    if(!i7) {
        document.querySelector("#pPT4").style.display = "none";
        document.querySelector("#imgPT4").style.display = "block";
        i7=1;
        button7.innerHTML = "SHOW TEXT";
    }
    else {
        document.querySelector("#pPT4").style.display = "block";
        document.querySelector("#imgPT4").style.display = "none";
        i7=0;
        button7.innerHTML = "SHOW SCREENSHOT";
    }
}

function Reset() {
    i7=0;
    if(innerWidth>1350) {
        document.querySelector("#pPT4").style.display = "block";
        document.querySelector("#imgPT4").style.display = "block";
    }
    else {
        document.querySelector("#pPT4").style.display = "block";
        document.querySelector("#imgPT4").style.display = "none";
        button7.innerHTML = "SHOW SCREENSHOT";
    }
}
