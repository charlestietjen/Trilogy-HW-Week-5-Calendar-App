// Grab the time, day and date as in an object, using Day.js as an alternative to legacy moment.js provided
var dateTime = dayjs();
var weekDayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var monthNameArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentWeekDay = weekDayArray[dateTime.$W];
var currentMonth = monthNameArray[dateTime.$M];
var currentCalDay = dateTime.$D + 1;

const wHours = 8;

var dateEl = document.querySelector("#currentDay");

dateEl.innerHTML = currentWeekDay + " " + currentMonth + " " + currentCalDay + " " + dateTime.$y;

//object to hold the days events
var events = {};

// function for creating each hour element
var createEvents = function(eventHour, eventInfo) {
    var eventLi = $("<li>").addClass("time-block list-group-item d-flex");
    var eventHourEl = $("<p>")
        .addClass("hour d-inline-flex")
        .text(eventHour);
    var eventInfoEl = $("<p>")
        .addClass("event-info description flex-fill")
        .text(eventInfo);
    var saveBtnEl = $("<p>")
        .addClass("saveBtn")
        .html("&#9760");
    eventLi.append(eventHourEl, eventInfoEl, saveBtnEl); //skull and crossbones unicode is placeholder because it is funny/cool

    $("#timeblocks").append(eventLi);
}

for (i = 0; i < wHours; i++){
    var h = i + 9;
    var hour = h + ":00"
    createEvents(hour, "Placeholder");
};

$(document).on("click", ".event-info", function() {
    //get current text value
    var text = $(this)
        .text()
        .trim();
    
    // replace p with textarea
    var textInput = $("<textarea>")
        .addClass("event-info description flex-fill")
        .val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

//unfocus event
$(document).on("blur", "textarea", function(){
    console.log("unfocus event")
    // get current value
    var text = $(this).val();

    //recreate p
    var eventP = $("<p>")
        .addClass("event-info description flex-fill")
        .text(text);

    //replace textarea with new p
    $(this).replaceWith(eventP);
});