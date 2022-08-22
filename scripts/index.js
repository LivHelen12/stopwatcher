var hour = 0;
var minute = 0;
var second = 0;
var interval;

var appendHour = document.getElementById("hour");
var appendMinute = document.getElementById("min");
var appendSecond = document.getElementById("sec");

var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");

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

  appendHour.innerText = returnTime(hour);
  appendMinute.innerText = returnTime(minute);
  appendSecond.innerText = returnTime(second);
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
  appendHour.innerHTML = returnTime(hour);
  appendMinute.innerHTML = returnTime(minute);
  appendSecond.innerHTML = returnTime(second);
};

const returnTime = (time) => {
  return time > 10 ? time : `0${time}`;
};
