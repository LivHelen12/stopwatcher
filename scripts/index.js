let hour = 0,
  minute = 0,
  second = 0,
  interval;

let appendHour = document.getElementById("hour"),
  appendMinute = document.getElementById("min"),
  appendSecond = document.getElementById("sec"),
  btnStart = document.getElementById("start"),
  btnStop = document.getElementById("stop"),
  btnReset = document.getElementById("reset");

function timer() {
  second++;

  if (second == 60) {
    second = 0;
    minute++;
  }

  if (minute == 60) {
    minute = 0;
    hour++;
  }

  appendHour.innerHTML = formatTime(hour);
  appendMinute.innerHTML = formatTime(minute);
  appendSecond.innerHTML = formatTime(second);
}

function pause() {
  clearInterval(interval);
}

btnStart.onclick = () => {
  pause();
  interval = setInterval(timer, 100);
};

btnStop.onclick = () => {
  pause();
};

btnReset.onclick = () => {
  pause();
  hour = 0;
  minute = 0;
  second = 0;
  appendHour.innerHTML = formatTime(hour);
  appendMinute.innerHTML = formatTime(minute);
  appendSecond.innerHTML = formatTime(second);
};

const formatTime = (time) => {
  return time > 10 ? time : `0${time}`;
};
