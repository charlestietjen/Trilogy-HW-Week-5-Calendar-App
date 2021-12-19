// Grab the time, day and date as in an object, using Day.js as an alternative to legacy moment.js provided
var dateTime = dayjs();
var weekDayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var monthNameArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentWeekDay = weekDayArray[dateTime.$W];
var currentMonth = monthNameArray[dateTime.$M];
var currentCalDay = dateTime.$D + 1;

var dateEl = document.querySelector("#currentDay");

dateEl.innerHTML = currentWeekDay + " " + currentMonth + " " + currentCalDay + " " + dateTime.$y;

