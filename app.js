const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const deadline = document.querySelector(".deadline");
// const days = document.querySelector('.days');
const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");

// let futureDate = new Date();
// console.log(futureDate);

// When program runs, set current date and set giveaways time for future ten days from the current date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 3, 21, 22, 52, 30);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekDay = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hours}:${mins}am`;

// Future Time in Mili Seconds
const futureTime = futureDate.getTime();
// console.log(futureTime)


function getRemainingTime(){
  const today = new Date().getTime();
  // console.log(today)
  const t = futureDate - today
  
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 12hs

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let Seconds = Math.floor((t % oneMinute) / 1000)

  // set values Arrays
  const values = [days, hours, minutes, Seconds]

  function format(item){
    if(item <10){
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  })
  if(t < 0){
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class = 'expired'> sorry, this giveaway has expired </h4`;
  }
}

// countDown
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();