console.log("page loaded...");

let vid = document.getElementById("video");
function videoplay() {
    vid.play(); 
}

function videopause() {
    vid.currentTime = 0;
    vid.pause(); 
}