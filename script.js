let [seconds, minutes, hours] = [0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;
let lapCount = 1;
let lapList = document.getElementById("lap-list");

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 1000); // Update the interval to 1000 ms (1 second)
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [seconds, minutes, hours] = [0, 0, 0];
  timeRef.innerHTML = "00 : 00 : 00";
});

document.getElementById("lap-timer").addEventListener("click", () => {
  let lapTime = timeRef.innerHTML;
  let lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
  lapList.appendChild(lapItem);
  lapCount++;
});

function displayTimer() {
  seconds++;
  
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timeRef.innerHTML = `${h} : ${m} : ${s}`;
}
