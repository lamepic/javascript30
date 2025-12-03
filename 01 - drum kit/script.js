function playsound(e) {
  const keyCode = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  key.classList.add("playing");
  audio.play();
}

function removeTransition(e) {
  if (e.type !== "transitionend") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playsound);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
