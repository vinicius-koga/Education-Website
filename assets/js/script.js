let daysEl = document.querySelector('.cronDays');
let hoursEl = document.querySelector('.cronHours');
let minutesEl = document.querySelector('.cronMinutes');
let secondsEl = document.querySelector('.cronSeconds');

let days = 11;
let hours = 2;
let minutes = 45;
let seconds = 21;

function cronometer() {
  seconds--;
  if(seconds == 0){
    minutes--;
    seconds = 60;
  }
  if(minutes == 0){
    hours--;
    minutes = 59;
  }
  if(hours == 0){
    days--;
    hours = 24;
  }

  let secFormat = seconds < 10 ? '0'+seconds : seconds;
  let minFormat = minutes < 10 ? '0'+minutes : minutes;
  let hourFormat = hours < 10 ? '0'+hours : hours;
  let dayFormat = days < 10 ? '0'+days : days;

  secondsEl.innerText = secFormat;
  minutesEl.innerText = minFormat
  hoursEl.innerText = hourFormat;
  daysEl.innerText = dayFormat;
}

setInterval(cronometer, 1000);