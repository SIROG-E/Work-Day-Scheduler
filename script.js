// A $( document ).ready() block.
$(document).ready(function () {
  console.log("ready!");
});

// add global variables
var availHours = []; // declares an array
var schedHours = {}; // declares an object
var moment = moment();
var currTime = moment.hour();
var nuDay = moment().hour(0);
// declares an object
 
// add clock to current Day id (use moments.js)
//        to display current day at top of calendar.

// Present timeblocks for standard business hours 9am-5pm
// generate textareas for scheduling

// Color code each timeblock to determine past, present or future.

// add save button fot timeblock to store after entering event

// save event to local (JSON.parse) storage so that when page is refreshed it stays there
// use session storage to take input from user then save it to local storage
// so when user refreshes page, it pulls data from local storage and inserts it to session storage to populate page.


//set value of available Hours to equal the user input for each row
//save value to local storage on click
//set available Hours time attribute
//set available Hours value attribute
//save user input in each object to local storage
