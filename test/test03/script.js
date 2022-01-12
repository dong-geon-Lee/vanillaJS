const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

function setProgressTime() {
  video.currentTime = Math.floor(+progress.value * (video.duration / 100));
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime % 60);

  timestamp.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

video.addEventListener("play", toggleIcon);
video.addEventListener("pause", toggleIcon);
video.addEventListener("timeupdate", updateProgress);

video.addEventListener("click", toggleVideo);
play.addEventListener("click", toggleVideo);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setProgressTime);
