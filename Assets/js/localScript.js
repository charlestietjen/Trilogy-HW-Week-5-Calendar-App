// Grab the time, day and date as in an object, using Day.js as an alternative to legacy moment.js provided
var dateTime = dayjs();
var weekDayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNameArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentWeekDay = weekDayArray[dateTime.$W];
var currentMonth = monthNameArray[dateTime.$M];
var currentCalDay = dateTime.$D;
var currentHour = dateTime.$H;

const wHours = 8;

var dateEl = document.querySelector("#currentDay");

dateEl.innerHTML = currentWeekDay + " " + currentMonth + " " + currentCalDay + " " + dateTime.$y;

//object to hold the days events
var events = {};

// function for creating each hour element
var createEvents = function(eventHour, eventInfo, eventTense) {
    var eventLiEl = $("<li>").addClass("time-block list-group-item row");
    var eventContainerEl = $("<div>")
        .addClass("container row");
    var eventHourEl = $("<div>")
        .addClass("hour col-1")
        .text(eventHour);
    var eventInfoEl = $("<div>")
        .addClass(eventTense + " description col-sm col-10")
    var eventInfoPEl = $("<p>")
        .addClass("event-info")
        .text(eventInfo);
    var saveBtnEl = $("<button>")
        .addClass("saveBtn col-2") 
        .html("Save");
    eventInfoEl.append(eventInfoPEl);
    eventContainerEl.append(eventHourEl, eventInfoEl, saveBtnEl);
    eventLiEl.append(eventContainerEl);
    $("#timeblocks").append(eventLiEl);
}

for (i = 0; i < wHours; i++){
    var h = i + 9;
    var hour = h + ":00"
    var tense = "past";
    if (h === currentHour){
        tense = "present";
    }
    else if (currentHour < h){
        tense = "future";
    }
    createEvents(hour, "Free Time", tense);
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
    //console.log("unfocus event")
    // get current value
    var text = $(this).val();
    if (text.trim() === "") {
        text = "Free Time";
    };

    //recreate p
    var eventP = $("<p>")
        .addClass("event-info description flex-fill")
        .text(text);
    
    //replace textarea with new p
    $(this).replaceWith(eventP);
});

// save

