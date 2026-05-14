function showTime(){

  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let dayNumber = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let day = now.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
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
    "December"
  ];

  let period = "AM";

  if(hours >= 12){
    period = "PM";
  }

  if(hours > 12){
    hours = hours - 12;
  }

  if(hours == 0){
    hours = 12;
  }

  if(hours < 10){
    hours = "0" + hours;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(seconds < 10){
    seconds = "0" + seconds;
  }

  let finalTime =
    hours + ":" +
    minutes + ":" +
    seconds + " " + period;

  document.getElementById("time").innerHTML = finalTime;

  let finalDate =
    days[day] + " , " +
    dayNumber + " " +
    months[month] + " " +
    year;

  document.getElementById("date").innerHTML = finalDate;
}

setInterval(showTime,1000);

showTime();
