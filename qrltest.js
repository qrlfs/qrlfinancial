function defer(method) {
  if (window.jQuery) {
    method();
  } else {
    setTimeout(function() { defer(method) }, 50);
  }
}
function loadCustomJs() {
  // add style resources
  $('head').append('<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,600italic" rel="stylesheet" type="text/css">');
  $('head').append('<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">'); 
  $('head').append('<link href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@4.4.2/main.min.css" rel="stylesheet">'); 
  $('head').append('<link href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@4.4.2/main.min.css" rel="stylesheet">'); 
  // (document).ready() runs when the page has loaded
  $(document).ready(function() {
    // init closing calendar
    if ($(".closing-calendar").length) {
      // variables are set on the closing calendar B2B page
      loadClosingCalendar(".closing-calendar",max_files,min_days_out,max_days_out,pct_yellow,pct_red,date_mods,holiday_mods);
    }
    // configure login
    $("#login_box form input").attr("onfocus", "activate_login();")
    $("#login_box button[type='submit']").after("<a href='/PasswordHelp' class='pw_help glyphicon glyphicon-question-sign'></a>");
    if ($(".hide-login").length) {
      $("#login_box").addClass("invis");
    };
    // add FAQ animation for borrowers page
    if ($("#faq-link").length) {
      $("#faq-link").click(function(){
        $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
      }); 
    };
    // fix small viewport menus
    if ($(".hide-menu").length) {
      $("ul#mynav").addClass("invis");
      $("nav.navbar>.container>.navbar-header").addClass("invis");
    };
    // configure contact form
    if ($(".contact-form").length) {
      $(".panel>.panel-body>form").attr("id", "qrl-contact-form");
      $(".panel>.primary_color_bk").css("display", "none");
      $("#bodypanel .col-md-12 .panel.panel-default").addClass("body-wrap-fix");
    };
    // configure footer
    $("span.gray_text:contains('© Copyright')").html("&copy; " + (new Date).getFullYear() + " QRL Financial Services, a division of First Federal Bank");
    $("body>div.container-full").last().attr("id", "qrl-footer"); 
    $("body").children().wrapAll("<div id='qrl-wrapper'></div>"); 
    $("#qrl-footer *:contains('|')").each(function() {    
      $(this).html($(this).html().replace(/\|/g, ""));
    });
    $("#qrl-footer a").each(function() {
      $(this).text($(this).text().trim());
    });  
    // add announcement year selector
    annSel = $("#select-announcement-year");
    if (annSel.length) {
      // add year options
      y = 2007;
      do {
        annSel.append($("<option>", {
          value: y,
          text: y
        }));
        y++;
      }
      while (y <= (new Date().getFullYear()));
      annSel.val(annSel.attr("currentYear"));
      // add onchange event
      annSel.attr("onchange", "window.location.href='/Partner/Announcements/' + this.value.toString();")
    }
    // configure pipeline reports
    if ($("form[method='get'][action='summary']").length) {
      $("form[method='get'][action='summary']").addClass("row");
      var pipeh3 = $("#bodypanel div div h3");    
      pipeh3.attr("id", "pipeHeader");    
      switch (getParameterByName("query_id")) {
        case "10292349":
          pipeh3.text("Active Pipeline");
          break;
        case "10292916":
          pipeh3.text("Funded (Last 30 Days)");      
          break;
        case "10292922":
          pipeh3.text("Originations (Last 60 Days)");      
          break;
        case "10292923":
          pipeh3.text("Pended Loans (UW and PC)");      
          break;
        case "10292957":
          pipeh3.text("Locked oans");      
          break;
        case "10292963":
          pipeh3.text("Cancelled & Denied (Last 90 Days)");      
          break;
        default:         
          pipeh3.text("Pipeline Report");
      }
      $("#lnkPrint").addClass("btn-sm pull-right").appendTo("#pipeHeader");
    }
    // add favicon
    var fav = "data:image/x-icon;base64,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";
    $("head").prepend("<link rel='shortcut icon' href='" + fav + "' />");
    // redirects contact_us to contact
    if ($(".contact-redirect").length) {
      window.location = "/contact"; 
    }
    // wraps the resource page for css helpers
    if ($(".resources_wrap").length) {
      var r = window.location.hash.replace("#", "");
      $("#resource" + r).collapse("show");
    }
    // remove upload button on partner home page
    if ($('.partner-home').length && $('button').parent('a[href$="/upload_file"]').length) {
     $('button').parent('a[href$="/upload_file"]').remove(); 
    }
    // fixes to upload_file page
    if ($('upload-loan').length) {
      // remove MISMO option
      $('#file_type option[value="ftMismoAUS"]').remove();
      // fix css
      $(".question_label").removeClass("question_label").css("font-weight","normal");
      $("h3.caption.ng-scope").replaceWith('<h1>' + $("h3.caption.ng-scope").html() + '</h1>');
      $(".nav-upload").addClass("active");
    }    
    // allows manual bypass of speedbump for approvedfast or ffbf-hosted content
    $("a[href*='.ffbf.com']").addClass("bypass-bump");
    $("a[href*='.qrlfinancial.com']").addClass("bypass-bump");
    $(".bypass-bump").each(function() {
      var anchor = $(this);
      anchor.unbind("click");
    });
    if ($(".turn_times").length) {
      // variables are set on the Partner Home page
      $("#uw_pur").text(uw_pur);
      $("#uw_refi").text(uw_refi);
      $("#postcl").text(postcl);
    }
  });
  // activate_login() highlights the login area
  function activate_login() {
    if ($("#login_box.login_active").length) {
    //login is already active; do nothing
    } else {
      //configure the login animation
      //dim background
      $("body").prepend("<div id='login_active_bg' class='login_active' onclick='deactivate_login();'></div>")
      //move login
      $("#login_box").addClass("login_active"); 
    }   
  }
  // deactivate_login() un-highlights the login area
  function deactivate_login() {
    //remove animated login elements
    $("#login_active_bg").remove();
    $("#login_box").removeClass("login_active"); 
  }
  // determines if the login form is available
  function login_available() {
    var login = $("#login_box");  
    if (login.find('button[type="submit"]').length) {
      return true;
    } else {
      return false;
    }
  }
  // home page Partner callout click functionality
  function partner_click() {
    if (login_available()) {
      $("#login_user_name").focus();
    } else {
       window.location.href = "/Partner/Home";
    }
  }
  // utility to add days to a date
  Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
  }
  // utility to add business days to a date
  Date.prototype.businessDays = function( d, custHol ){
    custHol = custHol || [];
    var t = new Date( this ); // copy date.
    var opts = { shiftSaturdayHolidays: false, shiftSundayHolidays: true};
    while( d ){ // we loop while d is not zero...   
      t.setDate( t.getDate() + 1 ); // set a date and test it
      switch( t.getDay() ){ // switch is used to allow easier addition of other days of the week
        case 0: case 6: break;// sunday & saturday
      default: // check if we are a holiday or not
        d -= isAHoliday( t, opts, custHol ) ? 0 : 1; 
      }
    }
    return t;
  }
  // utility to return the time in standard time (vs. daylight time)
  Date.prototype.stdTimezoneOffset = function () {
      var jan = new Date(this.getFullYear(), 0, 1);
      var jul = new Date(this.getFullYear(), 6, 1);
      return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  }
  // utility to determine if the datetime is observing daylight time (vs. standard time)
  Date.prototype.isDstObserved = function () {
      return this.getTimezoneOffset() < this.stdTimezoneOffset();
  }
  // utility to get query string parameter by name
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  function select_fi() {
    $('.item-fi').slideToggle('fast').removeClass("invis");
  }
  // Closing Calendar
  function loadClosingCalendar(calDiv,maxFiles,minDaysOut,maxDaysOut,pctY,pctR,dateMods,custHol) {
    // closing_dates variable populated via data language
    // closing_dates.calendar_date = date
    // closing_dates.closing_count = count
    // by default, all days are disabled
    // most files that can be closed on a given day represented by maxFiles
    // starting minDaysOut *business* days from today, enable closing dates up to maxDaysOut *business* days in the future
    var opts = { shiftSaturdayHolidays: false, shiftSundayHolidays: true};
    var events = [];
    var i;  
    // find CT offset (based on if DST is currently observed)
    var today = new Date();
    var ctOffset = 360;
    if (today.isDstObserved()) {
      ctOffset = 300;
    }
    // identify the first day (generally today)
    if (new Date(today.getTime() + ((today.getTimezoneOffset() - ctOffset) * 60000)).getHours() >= 16 || today.getDay() == 0 || today.getDay() == 6 || isAHoliday(today, opts, custHol)) {
      // it's past 4 PM CT, or a weekend day, or a holiday; so it's effectively the following business day
      today = today.businessDays(1, custHol);
    }
    // loop through all potentially available days
    for (i = minDaysOut; i < maxDaysOut; i++) {  
      var eventDate = today.businessDays(i, custHol);    
      var eventDateStr = eventDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }).replace(/[^ -~]/g,'');    
      // find the date in the list of dates with modified capacity
      var dateMax = maxFiles;
      var dateMaxFiles = dateMods.filter(function(mod) {
        return mod.date == eventDateStr;
      });
      if (dateMaxFiles.length) {
        dateMax = dateMaxFiles[0].capacity;      
      }    
      // find the date in the closing_dates list if it's count exceeds the limit;
      var result = closing_dates.filter(function(closing_date) {
        return closing_date.calendar_date == eventDateStr;
      });    
      // capacity is limited via manual modification but there are no closings scheduled; add it so that it can be properly assessed
      if (dateMaxFiles.length && !result.length) {
        result[0] = { calendar_date: eventDateStr, closing_count: 0 };
      }
      // set defaults 
      var event_obj = {};
      var icon_color = '#008000';
      var icon_obj = {};
      // set date background - green if enabled, gray if disabled (dates are gray by default)
      if (result.length) { 
        result = result[0];
        if (result.closing_count >= dateMax) {
          // date is full - don't enable  
          // no icon for full days
        } else {
          // date has scheduled closings and isn't full; assess the appropriate event properties and icon color
          event_obj = { id: 'background_event_' + i.toString(), title: 'Available', allDay: true, start: eventDate, end: eventDate, rendering: 'background', backgroundColor: '#b0f1b2'}
          events.push(event_obj)          
          icon_color = ((result.closing_count < (dateMax * pctY)) ? '#008000' : ((result.closing_count < (dateMax * pctR)) ? '#ffff00' : '#ff0000'));
          var text_color = ((icon_color == '#ffff00') ? '#000000' : '#ffffff');
          icon_obj = { id: 'icon_event_' + i.toString(), title: '', allDay: true, start: eventDate, end: eventDate, backgroundColor: icon_color, borderColor: icon_color, textColor: text_color, classNames: 'icon_event'}
          events.push(icon_obj);
        }        
      } else {
        // date has no scheduled closings and is available - enable it;
        event_obj = { id: 'background_event_' + i.toString(), title: 'Available', allDay: true, start: eventDate, end: eventDate, rendering: 'background', backgroundColor: '#b0f1b2'}
        events.push(event_obj)
        icon_obj = { id: 'icon_event_' + i.toString(), title: '', allDay: true, start: eventDate, end: eventDate, backgroundColor: icon_color, borderColor: icon_color, classNames: 'icon_event'}
        events.push(icon_obj);
      }
    }
    // add holidays to calendar  
    var holStart = new Date(today.getFullYear(), today.getMonth(), 1); // first day of current month
    var holEnd = new Date(today.businessDays(maxDaysOut, custHol).getFullYear(), today.businessDays(maxDaysOut, custHol).getMonth() + 1, 0); // last day of max month
    var loop = new Date(holStart);
    while(loop <= holEnd){
      if (isAHoliday(loop, opts, custHol)) {
        var eventDate = new Date(loop);
        icon_obj = { id: 'holiday_event', title: 'Holiday', allDay: true, start: eventDate, end: eventDate, backgroundColor: '#9a0000', borderColor: '#9a0000', textColor: '#ffffff', classNames: 'holiday_event'}
        events.push(icon_obj);
      }
      var newDate = loop.setDate(loop.getDate() + 1);
      loop = new Date(newDate);
    }
    // initialize calendar
    var calEl = $(calDiv);
    if (calEl.length) {
      var cal = new FullCalendar.Calendar(calEl[0], {
        plugins: [ 'dayGrid' ],
        defaultView: 'dayGridMonth',
        timeZone: 'UTC',
        events: events,
        contentHeight: 600,
        fixedWeekCount: false
      });
      cal.render();
    }
    $(".calendar-refresh-date").html(new Date().toLocaleString("en-US"));    
  }
  // holiday utilities:
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
  function getNthDayOf(n, day, month, year) {
    var firstOfMonth = new Date(Date.parse("".concat(month, "/1/").concat(year, " GMT")));
    var dayOffset = firstOfMonth.getUTCDay() - day;
    if (dayOffset > 0) {
      dayOffset = 7 - dayOffset;
    } else {
      dayOffset = -dayOffset;
    }
    var initialDay = firstOfMonth.getUTCDate() + dayOffset;
    var finalDay = initialDay + 7 * (n - 1);
    return new Date(Date.parse("".concat(month, "/").concat(finalDay, "/").concat(year, " GMT")));
  }
  function getLastDayOf(day, month, year) {
    var firstOfDay = getNthDayOf(1, day, month, year).getUTCDate();
    var daysInMonth = new Date(year, month, 0).getUTCDate() - 7;
    var lastOfDay = firstOfDay;
    while (lastOfDay <= daysInMonth) {
      lastOfDay += 7;
    }
    return new Date(Date.parse("".concat(month, "/").concat(lastOfDay, "/").concat(year, " GMT")));
  }
  function allFederalHolidaysForYear() {
    var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getFullYear();
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$shiftSaturdayHol = _ref.shiftSaturdayHolidays,
        shiftSaturdayHolidays = _ref$shiftSaturdayHol === void 0 ? true : _ref$shiftSaturdayHol,
        _ref$shiftSundayHolid = _ref.shiftSundayHolidays,
        shiftSundayHolidays = _ref$shiftSundayHolid === void 0 ? true : _ref$shiftSundayHolid;  
    var holidays = [];    
    holidays.push({
      name: "New Year's Day",
      date: new Date(Date.parse("1/1/".concat(year, " GMT")))
    });
    holidays.push({
      name: "Birthday of Martin Luther King, Jr.",
      date: getNthDayOf(3, 1, 1, year)
    });
    holidays.push({
      name: "Washington's Birthday",
      date: getNthDayOf(3, 1, 2, year)
    });
    holidays.push({
      name: "Memorial Day",
      date: getLastDayOf(1, 5, year)
    });  
    holidays.push({
      name: "Juneteenth",
      date: new Date(Date.parse("6/19/".concat(year, " GMT")))
    });
    holidays.push({
      name: "Independence Day",
      date: new Date(Date.parse("7/4/".concat(year, " GMT")))
    });
    holidays.push({
      name: "Labor Day",
      date: getNthDayOf(1, 1, 9, year)
    });
    holidays.push({
      name: "Columbus Day",
      date: getNthDayOf(2, 1, 10, year)
    });
    holidays.push({
      name: "Veterans Day",
      date: new Date(Date.parse("11/11/".concat(year, " GMT")))
    });
    holidays.push({
      name: "Thanksgiving Day",
      date: getNthDayOf(4, 4, 11, year)
    });
    holidays.push({
      name: "Christmas Day",
      date: new Date(Date.parse("12/25/".concat(year, " GMT")))
    });
    if (shiftSaturdayHolidays || shiftSundayHolidays) {
      holidays.forEach(function (holiday) {
        var dow = holiday.date.getUTCDay();

        if (dow === 0 && shiftSundayHolidays) {
          holiday.date = new Date(Date.UTC(holiday.date.getUTCFullYear(), holiday.date.getUTCMonth(), holiday.date.getUTCDate() + 1));
        } else if (dow === 6 && shiftSaturdayHolidays) {
          holiday.date = new Date(Date.UTC(holiday.date.getUTCFullYear(), holiday.date.getUTCMonth(), holiday.date.getUTCDate() - 1));
        }
      });
    }  
    // add custom holidays set to add
    if (arguments.length > 2 && arguments[2] !== undefined) {
      arguments[2].forEach(function(cust){
        if (cust.action == "add") {
          var ch = new Date(cust.date);
          holidays.push({
            name: "Custom Holiday",
            date: new Date(ch.getUTCFullYear(), ch.getUTCMonth(), ch.getUTCDate())
          });
        }
      });    
    }  
    holidays.forEach(function (holiday) {
      holiday.dateString = "".concat(holiday.date.getUTCFullYear(), "-").concat(holiday.date.getUTCMonth() + 1, "-").concat(holiday.date.getUTCDate());
    });      
    // remove custom holidays set to remove
    if (arguments.length > 2 && arguments[2] !== undefined) {
      arguments[2].forEach(function(cust){
        if (cust.action == "remove") {
          var ch = new Date(cust.date);
          holidays = holidays.filter(function(h){
            return h.dateString != "".concat(ch.getUTCFullYear(), "-").concat(ch.getUTCMonth() + 1, "-").concat(ch.getUTCDate());
          });
        }
      });    
    }    
    return holidays;
  }
  function isAHoliday() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$shiftSaturdayHo = _ref2.shiftSaturdayHolidays,
        shiftSaturdayHolidays = _ref2$shiftSaturdayHo === void 0 ? true : _ref2$shiftSaturdayHo,
        _ref2$shiftSundayHoli = _ref2.shiftSundayHolidays,
        shiftSundayHolidays = _ref2$shiftSundayHoli === void 0 ? true : _ref2$shiftSundayHoli,
        _ref2$utc = _ref2.utc,
        utc = _ref2$utc === void 0 ? false : _ref2$utc;
    var year = utc ? date.getUTCFullYear() : date.getFullYear();
    var shift = {
      shiftSaturdayHolidays: shiftSaturdayHolidays,
      shiftSundayHolidays: shiftSundayHolidays
    };
    var customHolidays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var allForYear = allFederalHolidaysForYear(year, shift, customHolidays);
    var nextYear = allFederalHolidaysForYear(year + 1, shift, customHolidays);
    if (nextYear[0].date.getUTCFullYear() === year) {
      allForYear.push(nextYear[0]);
    }
    var mm = utc ? date.getUTCMonth() : date.getMonth();
    var dd = utc ? date.getUTCDate() : date.getDate();
    return allForYear.some(function (holiday) {
      return holiday.date.getUTCMonth() === mm && holiday.date.getUTCDate() === dd;
    });
  }
  function getOneYearFromNow() {
    var future = new Date();
    future.setUTCFullYear(new Date().getUTCFullYear() + 1);
    return future;
  }
  function federalHolidaysInRange() {
    var startDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var endDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getOneYearFromNow();
    var options = arguments.length > 2 ? arguments[2] : undefined;
    var customHolidays = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var startYear = startDate.getFullYear();
    var endYear = endDate.getFullYear();
    var candidates = [];
    for (var year = startYear; year <= endYear; year += 1) {
      candidates.push.apply(candidates, _toConsumableArray(allFederalHolidaysForYear(year, options, customHolidays)));
    }
    return candidates.filter(function (h) {
      return h.date >= startDate && h.date <= endDate;
    });
  }
}
defer(loadCustomJs);
