let hour = document.querySelector('.hour');
let mint = document.querySelector('.mint');
let sec = document.querySelector('.sec');
let ampm = document.querySelector('.period');

function updateTime() {
  const date = new Date();

  hour.innerText = date.getHours();
  mint.innerText = date.getMinutes();
  sec.innerText = date.getSeconds();
}

let period = hour >= 12 ? "PM" : "AM";
ampm.innerText = period;


// run every second
setInterval(updateTime, 1000);

// run immediately so it doesn't wait 1 second
updateTime();