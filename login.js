$(document).ready(function() {
  $("#login_box form input").attr("onfocus", "activate_login();")
  $("#login_box button[type='submit']").after("<a href='passwordhelp' class='pw_help glyphicon glyphicon-question-sign'></a>");
  if ($("#faq-link").length) {
    $("#faq-link").click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    }); 
  };
  if ($(".hide-login").length) {
    $("#login_box").addClass("invis");
  };
  if ($(".hide-menu").length) {
    $("ul#mynav").addClass("invis");
  };
  $("body>div.container-full:last-of-type").attr("id", "qrl-footer"); 
  $("body").children().wrapAll("<div id='qrl-wrapper'></div>"); 
});
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
function deactivate_login() {
  //remove animated login elements
  $("#login_active_bg").remove();
  $("#login_box").removeClass("login_active"); 
}

