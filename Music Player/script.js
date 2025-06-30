
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = 0;
}

// Play/pause toggle function
function playPause() {
    if (song.paused) {
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }
}


song.addEventListener("timeupdate", () => {
    progress.value = song.currentTime;
});


progress.oninput = function () {
    song.currentTime = progress.value;
}


song.addEventListener("ended", () => {
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
    progress.value = 0;
});
