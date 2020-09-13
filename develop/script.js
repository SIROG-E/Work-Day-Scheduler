
//1. 	Load page
(function($) {
    "use strict";
  
    localStorage.setItem("", "");
  //- Load calendar data
    $(document).ready(function() {
      //date format MMDDYYYY
      var loadFunction = function(date) {
        //'09/12/2020'
        var calendarData = [];  //localStorage.getItem(date);
        
        for (var h = 0; h <= 17; h++) {
        calendarData.push(localStorage.getItem(h));        
        }
        return calendarData;
      }
  
      var saveFunction = function(hour, hourInfo) {
        localStorage.setItem(hour, hourInfo);
      }
  
      var dataService = {
        loadCalendarItem: loadFunction,
        saveCalendarItem: saveFunction
      }
  
      //- Load current date time
      var currentSimpleDate = moment().format('L');
      console.log('currentSimpleDate: ', currentSimpleDate);
     //- Create ViewModel
      var calendarViewModel = {
        currentDate: moment().format('MMMM Do YYYY, h:mm A'),
        calendarData: dataService.loadCalendarItem(currentSimpleDate)
      }
  
      console.log('calendarViewModel: ', calendarViewModel);
  
      function htmlTemplate(hour, details, hourDecorator) {
        var d = new Date().setHours(hour);
        var buttonId = `hrBtn${hour}`;
        var textId = `text${hour}`
        var hourlyTemplate = `
        <div class="row hour-block ${hourDecorator}">
          <div class="col-md-1 hour d-flex align-items-center">${moment(d).format('h A')}
          </div>
            <textarea id="${textId}" class="col-md-10 description">${details}</textarea>
                <button id="${buttonId}" type="button" class="saveBtn col-1 fa fa-save fa-2x"></button>
        </div>`;
        return hourlyTemplate;
      }
  
       var dailyInfo = [];
      function printCalendar() {
        var hourDecorator;
        //- Color code hour depending on past, present, future

        for (var h = 9; h <= 17; h++) {
          //if (expression) ? true : false
          var hourData = (calendarViewModel.calendarData === null) ? null : calendarViewModel.calendarData[h];
          //console.log(moment().hour());
  
          if (moment().hour() > h) {
            //create past css class 
            hourDecorator = 'past';
          } else if (moment().hour() === h) {
            hourDecorator = 'present';
          } else if (moment().hour() < h) {
            hourDecorator = 'future';
          }
  
          var html = htmlTemplate(h, (hourData == null ? "" : hourData), hourDecorator);
          $(".container").append(html);
        }
      }
    //- Print hourly calendar
      printCalendar();
  
      function handleHourSaveEvent() {
      }
  
      $("#currentDay").html(calendarViewModel.currentDate);
  
      $(".saveBtn").click(function(index, element) {
        console.log('I was clicked!');
        //save calendar time slot
        var hour = this.id.replace('hrBtn', '');      
        hour= parseInt(hour, 10);
  
        var detailsId = `#text${hour}`;
        console.log('dets: ', detailsId);
        
        var details = $(`#text${hour}`).val(); //text1, text2
        console.log('dets: ', details);
        
        var hourlyInfo = {
          hour: hour,
          details: details
        }

        console.log('dailyInfo bef', dailyInfo);
        console.log('dailyInfo after', dailyInfo);
  
        dataService.saveCalendarItem(hour, details);
      });
    });

  })(window.jQuery);