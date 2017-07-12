$(document).ready(function() {
  $('span.gray_text:contains("© Copyright")').html('&copy; ' + (new Date).getFullYear() + ' QRL Financial Services, a division of First Federal Bank of Florida');
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
    $("nav.navbar>.container>.navbar-header").addClass("invis");
  };
  if ($(".contact-form").length) {
    $(".panel>.panel-body>form").attr("id", "qrl-contact-form");
    $(".panel>.primary_color_bk").css("display", "none");
  };
  $("body>div.container-full:last-of-type").attr("id", "qrl-footer"); 
  $("body").children().wrapAll("<div id='qrl-wrapper'></div>"); 
  var fav = "data:image/x-icon;base64,AAABAAIAICAAAAEAIACoEAAAJgAAABAQAAABACAAaAQAAM4QAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNEDgRzRA5Ec0QOhnNEDrhzRA7Yc0QO53NEDudzRA7Zc0QOuXNEDohzRA5Gc0QOBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNEDhRzRA6Ec0QO6XNEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7qc0QOh3NEDhYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNEDgJzRA5tc0QO8HNEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO8nNEDnFzRA4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzRA4Rc0QOuHNEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDrxzRA4TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACK98zgivfPfIr3z3yiz4O4srdb/LK3W/yyt1v8srdb/LK3W/yyt1v8srdb/LK3W/yyt1v8srdb/LK3W/yyt1v8srdb/LK3W/yyt1v8srdb/LK3W/yyt1v9UcmX/c0QO/3NEDthzRA4aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIr3zFSK98/8ivfP/Ir3z/yK98/8ivfP/OJy0/zuXq/87l6v/O5er/zmZr/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/0KMl/9zRA7/c0QO/3NEDtZzRA4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJbfp7SK98/8ivfP/Ir3z/yK98/9fYEP/c0QO/3NEDv9zRA7/ckQO/yW36P8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/NKG+/3NEDv9zRA7/c0QO/3NEDrNzRA4BAAAAAAAAAAAAAAAAAAAAAHNEDlw4m7P/Ir3z/yK98/8ivfP/Ir3z/1J0af9zRA7/c0QO/3NEDv9zRA7/MqPD/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8mteX/ckQO/3NEDv9zRA7/c0QO/3NEDmIAAAAAAAAAAAAAAABzRA4Jc0QO5UeFiv8ivfP/Ir3z/yK98/8ivfP/RYeO/3NEDv9zRA7/c0QO/3NEDv8/kJ7/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/9pUSj/c0QO/3NEDv9zRA7/c0QO6HNEDgwAAAAAAAAAAHNEDmpzRA7/VW9g/yK98/8ivfP/Ir3z/yK98/84m7P/c0QO/3NEDv9zRA7/c0QO/018ef8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/1tnUP9zRA7/c0QO/3NEDv9zRA7/c0QObwAAAAAAAAAAc0QOz3NEDv9kWTf/Ir3z/yK98/8ivfP/Ir3z/yuv2f9zRA7/c0QO/3NEDv9zRA7/WmhT/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/TXt3/3NEDv9zRA7/c0QO/3NEDv9zRA7VAAAAAHNEDiJzRA7/c0QO/3FGE/8juu7/Ir3z/yK98/8ivfP/Irzy/25KGv9zRA7/c0QO/3NEDv9nVS7/Ir3z/yK98/8ypMT/TXx5/018ef9NfHn/TXx5/zShvv8ivfP/Ir3z/yK98/8/kJ//c0QO/3NEDv9zRA7/c0QO/3NEDv9zRA4oc0QOYXNEDv9zRA7/c0QO/zCnyv8ivfP/Ir3z/yK98/8ivfP/YV0+/3NEDv9zRA7/c0QO/3JFEP8kuev/Ir3z/zWfu/9zRA7/c0QO/3NEDv9zRA7/T3hx/yK98/8ivfP/Ir3z/zGlxv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDmhzRA6Qc0QO/3NEDv9zRA7/P5Gg/yK98/8ivfP/Ir3z/yK98/9UcWT/c0QO/3NEDv9zRA7/c0QO/zCmyf8ivfP/J7Tj/3JEDv9zRA7/c0QO/3NEDv9dY0n/Ir3z/yK98/8ivfP/JLnr/3FFEP9zRA7/c0QO/3NEDv9zRA7/c0QOlnNEDq1zRA7/c0QO/3NEDv9NfHj/Ir3z/yK98/8ivfP/Ir3z/0eFif9zRA7/c0QO/3NEDv9zRA7/PpOj/yK98/8ivfP/alEm/3NEDv9zRA7/c0QO/2xOIf8ivfP/Ir3z/yK98/8ivfP/ZlYw/3NEDv9zRA7/c0QO/3NEDv9zRA6zW2ZPt1RxY/9UcWP/WGtY/1xmTv8ivfP/Ir3z/yK98/8ivfP/Opiu/3NEDv9zRA7/c0QO/3NEDv9Lf37/Ir3z/yK98/9bZk//c0QO/3NEDv9zRA7/c0QO/ymx3f8ivfP/Ir3z/yK98/9Ya1j/alAk/1RxY/9UcWP/VHFj/1lqVr9sTR+2Np24/yK98/8ivfP/SIOH/yK98/8ivfP/Ir3z/yK98/8mtub/OJuy/zibsv84m7L/OJuy/y+oy/8ivfP/Ir3z/y+ozP84m7L/OJuy/zibsv84m7L/Jrbl/yK98/8ivfP/Ir3z/0mCg/80oL3/Ir3z/yK98/8ntOL/Y1o4vXNEDqVwRxT/PZOk/yK98/8juu7/Irzy/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/JLjr/yK98/8ivfP/I7rv/11jSv9zRA6rc0QOgnNEDv9yRA//RYeN/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/9Qd27/c0QO/3NEDodzRA5Nc0QO/3NEDv9zRA7/Tnp1/yK88f8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/QoyX/3NEDv9zRA7/c0QOU3NEDg5zRA75c0QO/3NEDv9zRA7/Vm5e/yO67f8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/zWfuv9xRhL/c0QO/3NEDvtzRA4SAAAAAHNEDq5zRA7/c0QO/3NEDv9zRA7/XWRL/ya25v8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/WGtY/3NEDv9zRA7/c0QOtAAAAAAAAAAAc0QOQXNEDv9zRA7/c0QO/3NEDv9zRA7/Y1o5/ymx3P8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/9Lf37/c0QO/3NEDv9zRA5GAAAAAAAAAAAAAAAAc0QOvXNEDv9zRA7/c0QO/3NEDv9zRA7/aFMr/y6q0P8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/zyUpv9zRA7/c0QOwwAAAAAAAAAAAAAAAAAAAABzRA4qc0QO93NEDv9zRA7/c0QO/3NEDv9zRA7/bE0f/zOiwP8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/LqnP/3NEDvlzRA4uAAAAAAAAAAAAAAAAAAAAAAAAAABzRA5qc0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/b0gX/zqYrv8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yiy3/8ivfP/Ir3z/yK98/8ju+//bUwdcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzRA6Pc0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/cUUR/0GNmf8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ypMT/W2ZQ/yK98/8ivfP/Ir3z/yK98/8ivfMyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNEDgFzRA6Mc0QO/3NEDv9zRA7/c0QO/3NEDv9zRA7/ckQO/0qAgf8ivPL/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/KbHc/2pRJv9sTR//Ir3z/yK98/8ivfP/Ir3z/yK9818AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzRA5gc0QO83NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/1J0af8ju+//Ir3z/yK98/8ivfP/Ir3z/yS56/9hXj//c0QO/3NEDv8qsNv/Ir3z/yK98/8ivfP/Ir3zjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzRA4gc0QOq3NEDv5zRA7/c0QO/3NEDv9zRA7/c0QO/1ppU/8luOr/Ir3z/yK98/8ivPL/VW9h/3NEDv9zRA7+c0QOrVB3cDAivfMgIr3zICK98yAivfMVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc0QOK3NEDpRzRA7oc0QO/3NEDv9zRA7/c0QO/2BfQf8otOL/Ir3z/0eFif9zRA7pc0QOlnNEDi4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNEDgJzRA4tc0QOXnNEDn9zRA6Oc0QOjltnUIAjuu2ab0kXLnNEDgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AA///AAD//AAAP/gAAB/AAAAPwAAAB+AAAAPAAAADgAAAAYAAAAGAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAGAAAABwAAAA8AAAAPgAAAH8AAAB/AAAAf8AAAH/gAAB/+AAf//4Af/KAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzRA4mc0QOjHNEDs9zRA7vc0QO8HNEDtBzRA6Nc0QOJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNEDgRzRA6Jc0QO+3NEDv9zRA7/c0QO/3NEDv9zRA7/c0QO/3NEDvxzRA6Lc0QOBQAAAAAAAAAAAAAAACK984sjuu7zJ7Xk/zKjw/8zosD/LazT/ye15P8nteT/J7Xk/ye15P8nteT/X2FG/3NEDrJzRA4EAAAAAAAAAAA7lqqSIr3z/yK98/9mVzL/c0QO/094cv8ivfP/Ir3z/yK98/8ivfP/Ir3z/1B3cP9zRA7/c0QOhQAAAABzRA4dYF9C+CK98/8ivfP/WGpX/3NEDv9cZUz/Ir3z/yK98/8ivfP/Ir3z/yK98/9CjJf/c0QO/3NEDvlzRA4fc0QOfG5KGf8ivPH/Ir3z/0t+fP9zRA7/aVEn/yK98/8wpsn/N5y2/zGmx/8ivfP/NKG//3NEDv9zRA7/c0QOf3NEDrxzRA7/LKzU/yK98/8+kqL/c0QO/3JEDv8mtub/UHdu/3NEDv9kWTX/Ir3z/ya25v9yRA7/c0QO/3NEDr9lWDTZZFk2/zuXq/8ivfP/MabH/3NEDv9zRA7/M6PB/0KMlv9zRA7/cUYS/yO67f8ivfP/Z1Uv/2NaOP9kWTbcX2BE1iiy3/8rrtb/Ir3z/yO77/8trNL/LazS/yW36f8lt+n/LazS/y2s0v8ju+//Ir3z/zGmx/8ivPL/VHJl2XNEDrNnVS7/LazT/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/SoGB/3NEDrZzRA5tc0QO/2tOIv8ypMT/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/NKG+/3JED/9zRA5wc0QOEHNEDu9zRA7/b0kY/zibsv8ivfP/Ir3z/yK98/8ivfP/Ir3z/yK98/8ivfP/Ir3z/zOjwv9zRA7wc0QOEgAAAABzRA5jc0QO/3NEDv9xRhL/P5Ce/yK98/8ivfP/Ir3z/yK98/8ivfP/I7ru/yK98/8lt+n/cUYSZgAAAAAAAAAAAAAAAHNEDodzRA7/c0QO/3JEDv9Ig4b/Irzy/yK98/8ivfP/I7rt/1lqVv8ivfP/Ir3z/yK98yQAAAAAAAAAAAAAAAAAAAAAc0QOXXNEDupzRA7/c0QO/1B3bv8iu/D/Irzy/1NyZv9zRA7qKrDclCK9848ivfMoAAAAAAAAAAAAAAAAAAAAAAAAAABzRA4Lc0QOX3NEDqJzRA7DUXVswzWfu7FzRA5gc0QOCwAAAAAAAAAAAAAAAAAAAADwD6xBwAOsQYABrEGAAaxBAACsQQAArEEAAKxBAACsQQAArEEAAKxBAACsQQAArEGAAaxBwAGsQeABrEHwD6xB";
  $("head").prepend("<link rel='shortcut icon' href='" + fav + "' />");  
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
