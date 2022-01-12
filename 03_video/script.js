const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

console.log(video.paused);

//  Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause Icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

// update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);

  let seconds = Math.floor(video.currentTime % 60);

  timestamp.innerHTML = `${mins.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // if (mins < 10) {
  //   mins = "0" + String(mins);
  // }

  // if (seconds < 10) {
  //   seconds = "0" + String(seconds);
  // }

  // timestamp.innerHTML = `${mins}:${seconds}`;
}

//  Set video time to progress
function setVideoProgress() {
  video.currentTime = Math.floor(+progress.value * (video.duration / 100));
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listener
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

video.addEventListener("click", toggleVideoStatus);
play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
