const state = document.querySelectorAll(".state");
// const pause = document.querySelector(".pause");
const player_btn = document.querySelector(".player__button");
const video = document.querySelector("video");
const volume = document.querySelector("input[type=range]");
const backward = document.querySelector(".rewind");
const forward = document.querySelector(".fastforward");
const progress_bar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress__filled");
const playbackspeed = document.querySelector("#playback_speed_rate");
let rate = 1;
let playState = 0;
let videoDurationInsec = video.duration;
let progressLength = getComputedStyle(progress_bar).width;
playbackspeed.value = `${rate}x`;

player_btn.addEventListener("click", () => {
  if (!playState) {
    video.play();
    playState = 1;
    state[1].classList.remove('toggle');
    state[0].classList.add('toggle');
  } else {
    video.pause();
    playState = 0;
    state[0].classList.remove('toggle');
    state[1].classList.add('toggle');
  }
});

playbackspeed.addEventListener("click", (e) => {
  console.log(e);
  video.playbackRate = parseFloat(e.target.value);
});

volume.addEventListener("input", (e) => {
  console.log(e.target.value);
  video.volume = e.target.value;
});

backward.addEventListener("click", (e) => {
  video.currentTime -= 10;
  console.log(video.currentTime);
});

forward.addEventListener("click", (e) => {
  video.currentTime += 25;
});

video.addEventListener("timeupdate", () => {
  let currentTime = parseFloat(video.currentTime);
  let finalProgress = Math.trunc(
    Math.trunc(parseFloat(progressLength) / videoDurationInsec) * Math.trunc(currentTime)
  );
  progress.style.width = finalProgress + "px";
});