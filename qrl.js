// (document).ready() runs when the page has loaded
$(document).ready(function() {
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
        pipeh3.text("Locked Loans");      
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
  // fix the speed bump modal arrangement
  if ($("#modal_leavingPage").length) {
    var t = $("#modal_leavingPage .modal-title");
    var h = $("#modal_leavingPage .modal-header");
    h.after("<div class='modal-body'><p>" + t.text() + "</p><p>Would you like to continue?</p></div>");
    t.text("You're about to leave the QRL Financial Services website.");
  }
  // initialize cost-to-service calculator
  if ($(".cost-to-service").length) {
    // add math functions on blur
    $(".cost-to-service #portfolio input").attr("onblur", "updatePortfolio();");
    $(".cost-to-service #staffing input").attr("onblur", "updateStaffing();");
    $(".cost-to-service #processing input").attr("onblur", "updateProcessing();");
    $(".cost-to-service #direct input").attr("onblur", "updateDirect();");
    $(".cost-to-service #summary input").attr("onblur", "updateSummary();");
    // initialize autoNumeric    
    $('.currency').each(function(){
      new AutoNumeric($(this).get(0),{
        maximumValue: 9999999999
      });
    });
    $('.percent').each(function(){
      new AutoNumeric($(this).get(0),{
        maximumValue: 100
      });
    });
    $('.integer').each(function(){
      new AutoNumeric($(this).get(0),{
        decimalPlaces: 0
      });
    });
    $('.total-int').each(function(){
      new AutoNumeric($(this).get(0),{
        noEventListeners: true, 
        decimalPlaces: 0, 
        maximumValue: 9999999999
      });
    });
    $('.total-cur').each(function(){
      new AutoNumeric($(this).get(0),{
        noEventListeners: true, maximumValue: 9999999999
      });
    });    
    // select input text on focus
    $(".cost-to-service input[type=text]").focus(function() {
        if(!$(this).hasClass("selected")) {
            $(this).select();
            $(this).addClass("selected");
        }
    });
    $(".cost-to-service input[type=text]").blur(function() {
        if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
        }
    });
    // add navigation for stripped js
    $(".nav-portfolio").click(function() {
      $(".calc-nav a[href='#portfolio']").tab("show");
    });
    $(".nav-staffing").click(function() {
      $(".calc-nav a[href='#staffing']").tab("show");
    });
    $(".nav-processing").click(function() {
      $(".calc-nav a[href='#processing']").tab("show");
    });
    $(".nav-direct").click(function() {
      $(".calc-nav a[href='#direct']").tab("show");
    });
    $(".nav-summary").click(function() {
      $(".calc-nav a[href='#summary']").tab("show");
    });
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
  // fix logo if for some reason it fails to load
  if ($(".site_logo img").attr("src").startsWith("https://static.approvedfast.com/media/retail/img/logo.gif")) {
    $(".site_logo img").attr("src","data:image/png;base64,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");
  }
  // allows manual bypass of speedbump for approvedfast-hosted content
  $(".bypass-bump").each(function() {
    var anchor = $(this);
    var urlRegex = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;  
    var url = urlRegex.exec(anchor.attr("onclick"))[0];
    anchor.removeAttr("onclick");
    anchor.removeAttr("data-toggle");
    anchor.attr("href", url);
  });
});
// end (document).ready()
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
// utility to get query string parameter by name
function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
// cost to service calculator functions
function anGet(e) {
  return AutoNumeric.getAutoNumericElement(e);
}
function updatePortfolio() {    
  anGet(numTotal).set(
    (      
      anGet(numFixed).getNumber()
      + anGet(numARM).getNumber()
    )
  );
  anGet(numTotalDelinquent).set(
    (
      anGet(numDelinquent).getNumber()
      + anGet(numBankrupt).getNumber()
      + anGet(numForclosure).getNumber()
      + anGet(numFormal).getNumber()
      + anGet(numInformal).getNumber()
      + anGet(numLossMit).getNumber()      
    )
  );
  updateSummary();
}
function updateStaffing() {
  var totalSal = 0;
  for (i = 1; i < 10; i++) {
    var empSal = 
      anGet(document.getElementById("staff0" + i + "-sal")).getNumber()
      * anGet(document.getElementById("staff0" + i + "-pct")).getNumber()
      / 100;       
    anGet(document.getElementById("staff0" + i + "-sub")).set(empSal);
    totalSal += empSal;
  };
  anGet(totalSalary).set(totalSal);
  anGet(fringeDol).set(totalSal * anGet(fringePct).getNumber() / 100);
  anGet(trainingDol).set(totalSal * anGet(trainingPct).getNumber() / 100);
  anGet(totalStaffing).set(
    totalSal
    + anGet(fringeDol).getNumber()
    + anGet(trainingDol).getNumber()
    + anGet(overtime).getNumber()
    + anGet(payrollTaxes).getNumber()
    + anGet(recruiting).getNumber()
  );
  updateSummary();
}
function updateProcessing() {
  anGet(totalOccupancy).set(
    anGet(numFTE).getNumber()
    * anGet(sqFt).getNumber()
    * anGet(sqFtCost).getNumber()
  );
  anGet(pcTotal).set(
    anGet(pcCost).getNumber()
    * anGet(numFTE).getNumber()
  );
  anGet(totalProcessing).set(
    anGet(pcTotal).getNumber()
    + anGet(copyMachine).getNumber()
    + anGet(mainframe).getNumber()
    + anGet(licensing).getNumber()
    + anGet(furniture).getNumber()      
  );
  updateSummary();
}
function updateDirect() {  
  anGet(totalDirect).set(
    anGet(tempServices).getNumber()
    + anGet(contactServices).getNumber()
    + anGet(travel).getNumber()
    + anGet(postage).getNumber()
    + anGet(printing).getNumber()  
    + anGet(telephone).getNumber()
    + anGet(officeSupplies).getNumber()
    + anGet(lockboxFees).getNumber()
    + anGet(legalFees).getNumber()  
    + anGet(bankingFees).getNumber()
    + anGet(membership).getNumber()
    + anGet(defaultExpenses).getNumber()
    + anGet(checkDisbursement).getNumber()  
    + anGet(otherChargebacks).getNumber()  
  );
  updateSummary();
}
function updateSummary() {
  var staffing = anGet(totalStaffing).getNumber();
  anGet(totalStaffingSummary).set(staffing);
  var occupancy = anGet(totalOccupancy).getNumber();
  anGet(totalOccupancySummary).set(occupancy);
  var processing = anGet(totalProcessing).getNumber();
  anGet(totalProcessingSummary).set(processing);
  var direct = anGet(totalDirect).getNumber();
  anGet(totalDirectSummary).set(direct);
  var totalExpenses = staffing + occupancy + processing + direct;
  anGet(totalServicingSummary).set(totalExpenses);
  var count = anGet(numTotal).getNumber();
  anGet(totalCountSummary).set(count);
  var cts = 0
  if (count > 0) { 
    cts = totalExpenses / count 
  }
  anGet(annualized).set(cts);
  var vari = cts - anGet(quote).getNumber();
  anGet(variance).set(vari);
  anGet(impact).set(vari * count);
  if (vari >= 0) {
    $("#impact").switchClass("danger", "success");
  } else {
    $("#impact").switchClass("success", "danger");    
  }
}
function searchNumber() {
  window.location = "/summary?query_id=663219&searchCall=leftmenu&columns=Loan+Number%2CBorrower+Name%2CStatus%2CLoan+Purpose%2CLoan+Amount%2CLock+Expires&ihm_query=" + encodeURIComponent($("#txtSearchLoanNumber").val())
}
function searchName() {
  window.location = "/summary?query_id=149&searchCall=leftmenu&columns=Loan+Number%2CBorrower+Name%2CStatus%2CLoan+Purpose%2CLoan+Amount%2CLock+Expires&ihm_query_last_name=" + encodeURIComponent($("#txtSearchLastName").val())
}
