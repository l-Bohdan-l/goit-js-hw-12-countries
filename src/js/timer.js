import refs from './refs';
// import timerTamplate from './timerTamplate';

const { body, daysC, hoursC, minsC, secsC } = refs

// body.insertAdjacentHTML('afterbegin', timerTamplate)


const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
}
const currentDate = new Date().toLocaleString('Uk-uk', options);

class CountdownTimer {
  constructor(targetDate, markup) {
    this.markup = markup;
    this.targetDate = targetDate;
    this.intID = null;
    this.deltaTime = 0;
  }
  start() {
    this.intID = setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      const days = Math.floor(this.deltaTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((this.deltaTime % (1000 * 60)) / 1000);
      this.insertValues(days, hours, mins, secs)
    }, 1000)
  }
  stop() {
    clearInterval(this.intID)
  }

  insertValues(d, h, m, s) {
    const { daysC, hoursC, minsC, secsC } = this.markup;
    daysC.textContent = d;
    hoursC.textContent = h;
    minsC.textContent = m;
    secsC.textContent = s;
  }

  //==============
  // pad(value) {
  //   return String(value).padStart(2, '0')
  // }
}

const myTimer = new CountdownTimer(
  new Date ('Jan 1, 2022'),
  {
    daysC,
    hoursC,
    minsC,
    secsC
  }
);
myTimer.start()