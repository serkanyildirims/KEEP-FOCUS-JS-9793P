document.addEventListener("DOMContentLoaded", function () {
    const counterSpan = document.getElementById("counter");
    const button = document.querySelector(".btn");

    let count = parseInt(counterSpan.textContent);

    button.addEventListener("click", function () {
        count++;
        counterSpan.textContent = count;
    });
});

function playFireSound() {
    let audio = document.getElementById("firesound");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function playRainSound() {
    let audio = document.getElementById("rainsound");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
 
function playWindSound() {
    let audio = document.getElementById("windsound");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

let firesound = document.getElementById("firesound");
let rainsound = document.getElementById("rainsound");
let windsound = document.getElementById("windsound");

firesound.addEventListener("play", function () {
    rainsound.pause();
    windsound.pause();
});

rainsound.addEventListener("play", function () {
    firesound.pause();
    windsound.pause();
});

windsound.addEventListener("play", function () {
    firesound.pause();
    rainsound.pause();
});

