function colorizeLozenges() {
  //console.log('colorizing...');
  // add CSS if not present
  var cs = $("#customstyle"); 
  if (cs.length == 0) {
    var css = 'input.text,input.textarea{width:100%!important}table.aui>tbody>tr,table.aui>tfoot>tr{color:#666!important}table.aui a{color:#4e79b9!important}.qrl-resolved{color:#083!important;border:1px solid #083!important;background:#cfc!important}.qrl-awaiting{color:#b62!important;border:1px solid #b62!important;background:#fec!important}.qrl-open{color:#62b!important;border:1px solid #62b!important;background:#ecf!important}.qrl-queued{color:#ba2!important;border:1px solid #ba2!important;background:#ffc!important}.qrl-roadmap{color:#23b!important;border:1px solid #23b!important;background:#cef!important}.qrl-estimate{color:#2b9!important;border:1px solid #2b9!important;background:#cff!important}.qrl-closed{color:#666!important;border:1px solid #666!important;background:#eee!important}.qrl-other{color:#900!important;border:1px solid #900!important;background:#fee!important}.qrl-row-highlight td{background:#dff!important;color:#000!important}table.aui .qrl-row-highlight a{color:#0747a6!important}.cv-requests-list table.aui td:nth-child(13),.cv-requests-list table.aui td:nth-child(14),.cv-requests-list table.aui td:nth-child(8),.cv-requests-list table.aui th:nth-child(13),.cv-requests-list table.aui th:nth-child(14),.cv-requests-list table.aui th:nth-child(8){display:none!important}table.aui>thead>tr>th:nth-child(3){width:400px!important}.select2-container{width:50%;}.field-container{width:100%!important;}.vp-rq-icon{width:20px!important;height:20px!important;margin-bottom:-3px!important;}table.aui>table.aui>tbody>tr>td{padding:3px 10px!important;font-size:13px!important;}';      
    var style = document.createElement("style");
    style.type = "text/css";
    style.id = "customstyle"
    style.innerHTML = css;
    document.body.appendChild(style);
  }  
  // add classes to lozenges
  var lozenges = $(".aui-lozenge:visible");  
  if (lozenges.length > 0) {
    lozenges.each(function(i){
      switch($(this).text().toLowerCase()) {       
        case "open": 
          $(this).addClass("qrl-open").attr("title", $(this).text()); 
          break;
        case "roadmap review": 
          $(this).addClass("qrl-roadmap").attr("title", $(this).text());
          break;
        case "awaiting vendor": 
          $(this).addClass("qrl-awaiting").attr("title", $(this).text());
          break;
        case "awaiting customer response": 
          $(this).addClass("qrl-awaiting").attr("title", $(this).text());
          break;
        case "estimate requested": 
          $(this).addClass("qrl-estimate").attr("title", $(this).text());
          break;
        case "estimate delivered": 
          $(this).addClass("qrl-estimate").attr("title", $(this).text());
          break;
        case "assigned to professional services": 
          $(this).addClass("qrl-estimate").attr("title", $(this).text());
          break;
        case "queued - not assigned": 
          $(this).addClass("qrl-queued").attr("title", $(this).text());
          break;            
        case "queued - assigned": 
          $(this).addClass("qrl-queued").attr("title", $(this).text());
          break;
        case "resolved awaiting verification": 
          $(this).addClass("qrl-resolved").attr("title", $(this).text());
          break;
        case "closed": 
          $(this).addClass("qrl-closed").attr("title", $(this).text());
          break;
        default:
          $(this).addClass("qrl-other").attr("title", $(this).text());         
      }
    });    
  }
  // highlight rows that are my cases
  $("td:contains('Andy Skrenes')").each(function(i) { 
    $(this).parent().addClass("qrl-row-highlight"); 
  });
  // fire every few seconds
  setTimeout(colorizeLozenges, 2000);
}
function adjustDisplay() {
  //console.log('adjusting display...');
  // reconfigure search and filter elements
  var btn = $("#custombutton");
  if (btn.length == 0) {
    var mainFilterRow = $("#sd-all-requests-filter").css("display","inline-block");
    var cv = $(".cv-top > div");
    var priorityFilter = $("a[href='#ultimate-requests-status']").parent().parent().css("display","inline-block");
    priorityFilter.insertBefore(mainFilterRow);
    var img = "https://jira.pclender.com/servicedesk/customershim/secure/viewavatar?avatarType=SD_REQTYPE&avatarId=";
    var link = "https://jira.pclender.com/servicedesk/customer/portal/";
    cv.prepend("<div id='custombutton' class='aui cv-search-filter' style='display:inline-block;'><a href='#newitem' class='aui-dropdown2-trigger aui-button js-status-trigger status-trigger aui-alignment-target aui-alignment-abutted aui-alignment-abutted-left aui-alignment-element-attached-top aui-alignment-element-attached-left aui-alignment-target-attached-bottom aui-alignment-target-attached-left' style='width: 180px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;' resolved='' aria-controls='newitemlist' aria-haspopup='true' aria-expanded='false'>New...</a><div id='newitemlist' class='aui-style-default aui-dropdown2 aui-layer aui-alignment-element aui-alignment-side-bottom aui-alignment-snap-left aui-alignment-enabled aui-alignment-abutted aui-alignment-abutted-left aui-alignment-element-attached-top aui-alignment-element-attached-left aui-alignment-target-attached-bottom aui-alignment-target-attached-left' style='width: 180px; z-index: 3000; top: 0px; left: 0px; position: absolute; transform: translateX(114px) translateY(149px) translateZ(0px);' resolved='' aria-hidden='true' data-aui-alignment='bottom auto' data-aui-alignment-static='true'><ul class='aui-list-truncate'><li><a href='" + link + "2/create/8' tabindex='-1'><img src='" + img + "13430' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Bug</a></li><li><a href='" + link + "2/create/12' tabindex='-1'><img src='" + img + "13427' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Question</a></li><li><a href='" + link + "2/create/25' tabindex='-1'><img src='" + img + "13432' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Enhancement</a></li><li><a href='" + link + "4/create/21' tabindex='-1'><img src='" + img + "13432' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Professional Services</a></li><li><a href='" + link + "4/create/16' tabindex='-1'><img src='" + img + "13410' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Data Language</a></li><li><a href='" + link + "2/create/7' tabindex='-1'><img src='" + img + "13438' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Outage</a></li><li><a href='" + link + "4/create/22' tabindex='-1'><img src='" + img + "13435' style='height:16px;width:16px;margin-right:10px;margin-top:2px;float:left;' />Print Forms</a></li></ul></div></div>"); 
  }
  setTimeout(adjustDisplay, 2000);
}
colorizeLozenges();
adjustDisplay();
