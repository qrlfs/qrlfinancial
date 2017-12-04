// (document).ready() runs when the page has loaded
$(document).ready(function() {
  // configure login
  $("#login_box form input").attr("onfocus", "activate_login();")
  //$(".site_logo").attr("href", "/index");
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
  $("span.gray_text:contains('© Copyright')").html("&copy; " + (new Date).getFullYear() + " QRL Financial Services, a division of First Federal Bank of Florida");
  $("body>div.container-full:last-of-type").attr("id", "qrl-footer"); 
  $("body").children().wrapAll("<div id='qrl-wrapper'></div>"); 
  $("#qrl-footer *:contains('|')").each(function() {    
    $(this).html($(this).html().replace(/\|/g, ""));
  });
  $("#qrl-footer a").each(function() {
    $(this).text($(this).text().trim());
  });
  // configure partner home
  if ($(".partner-home").length) {
    $("#bodypanel").addClass("body-panel-fix");
    $($("#bodypanel .row")[0]).addClass("partner-home-wrap");
    $(".partner-home-wrap>.col-md-3").addClass("invis");
    $(".partner-home-wrap>.col-md-9").addClass("partner-home-col-2").switchClass("col-md-9", "col-md-12", 0);    
  };
  // configure document group pages
  /*
  if ($(".document-group").length) {
    $("#bodypanel h3").addClass("h1");
    $("#bodypanel table").removeAttr("width").removeAttr("border").removeAttr("cellspacing").removeAttr("cellpadding");
    $("#bodypanel table td").removeAttr("width");
    $("#bodypanel table td a").removeAttr("onclick");
    $("#bodypanel table").addClass("dg-table");     
    $($(".dg-table")[0]).parent().addClass("dg-table-wrap panel panel-default");
  }
  */
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
  }
  // add favicon
  var fav = "data:image/x-icon;base64,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";
  $("head").prepend("<link rel='shortcut icon' href='" + fav + "' />");  
  // configure security questions
  var f = $('form[name="frmSecurity"]');
  if (f.length) {
    var sec = [];  
    var vals = [];
    configureSecurityQuestions(f);
  }
  if ($(".dmPanel").length) {
    $(".dmButton").attr("onclick", "expose($('.dmInput')[0])");
  }
});
// activate_login() highlights the login area
function activate_login() {
  var login = $("#login_box");  
  if (login.find('button[type="submit"]').length) {
    //login is available
    if ($("#login_box.login_active").length) {
      //login is already active; do nothing
    } else {
      //configure the login animation
      //dim background
      $("body").prepend("<div id='login_active_bg' class='login_active' onclick='deactivate_login();'></div>")
      //move login
      $("#login_box").addClass("login_active"); 
    }    
  } else {
    //user is logged in; forward them to partner home
    window.location = "home";
  }
}
// deactivate_login() un-highlights the login area
function deactivate_login() {
  //remove animated login elements
  $("#login_active_bg").remove();
  $("#login_box").removeClass("login_active"); 
}
// functions for security question configuration
function configureSecurityQuestions(f) {
  f.find("div.row").each(function() {    
    var hasVal = false;
    var val = $($(this).find("input.form-control")[0]).val();
    var inputId = $(this).find("input.form-control")[0].id;
    if (val){      
      vals.push({id:inputId, value:val});
      hasVal = true;
    }  
    var q = {text:$(this).find("div.col-md-9").text(), input:$(this).find("input.form-control")[0].outerHTML, inputId:inputId, hasValue:hasVal};
    sec.push(q);
    $(this).remove();
  });    
  for (i = 0; i < 6; i++) {
    //create row
    f.prepend('<div class="row"><div class="col-md-9" id="q_' + i + '"><p><select id="s_' + i + '" class="form-control input-sm" onchange="selectChange(this)" input="' + i + '"></select></p></div><div class="col-md-3"><p><input type="text" name="question_' + i + '" id="question_' + i + '" q_id="' + i + '" class="form-control input-sm" /></p></div></div>');
    //populate select with options
    selectPopulate($('#s_' + i)[0]);  
    if (i <= vals.length - 1) {      
      var thisSelect = $('#s_' + i);
      thisSelect.val(vals[i].id);
      thisSelect.attr("oldVal", vals[i].id);
      var thisInput = $('input[q_id="' + i + '"]');
      thisInput.val(vals[i].value);
      thisInput.attr("id", vals[i].id);
      thisInput.attr("name", vals[i].id);
    }
  }
  selectSync();
}
//populates passed select element
function selectPopulate(sel) {
  $.each(sec, function (j, item) {
    if ($(sel).find('option[value="' + item.inputId + '"]').length == 0) {
      $(sel).append($('<option>', { 
        value: item.inputId,
        text : item.text 
      }));
    }
  });  
}
function selectChange(sel) {  
  //remove de-selected question
  var newVal = $(sel).val()
  vals = vals.filter(function(el) {
    return el.id != $(sel).attr("oldVal");
  });  
  $(sel).attr("oldVal", $(sel).val());
  //add selected question
  vals.push({id:newVal, value:""});
  var inputToChange = $('input[q_id="' + $(sel).attr("input") + '"]');
  inputToChange.val('');    
  inputToChange.attr("id", newVal);
  inputToChange.attr("name", newVal);    
  selectSync();
}
function selectSync() {
  //loop through select elements and remove selected options
  for (i = 0; i < 6; i++) {
    thisSelect = $('#s_' + i);
    selectPopulate(thisSelect[0]);
    $(vals).each(function(){
      if (this.id != thisSelect.val()) {
        thisSelect.find('option[value="' + this.id + '"]').remove();
      }
    });
  }
}
function getParameterByName(name) {
  var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
function expose(input) {  
  var k = CryptoJS.AES.decrypt(atob(getParameterByName("k")),input.value).toString(CryptoJS.enc.Utf8);
  $(".dmOutput").text(k);
  $(".dmOutputWrap").removeClass("invis");
}
