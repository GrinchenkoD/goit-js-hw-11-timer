class CountdownTimer {
  constructor(selector, targetDate) {
    (this.selector = selector), (this.targetDate = new Date(targetDate));
  }
}

const newCountdown = new CountdownTimer("timer1", "August 3, 2021");

const daysRef = document.querySelector("[data-value='days']");
const hourRef = document.querySelector("[data-value='hours']");
const minsRef = document.querySelector("[data-value='mins']");
const secsRef = document.querySelector("[data-value='secs']");

function start() {
  setInterval(() => {
    const currentTime = Date.now();
    const endTime = this.targetDate;

    const delta = endTime - currentTime;
    changeTimer(delta);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, 0);
}

function changeTimer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  daysRef.textContent = days;
  hourRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}

start.call(newCountdown);
