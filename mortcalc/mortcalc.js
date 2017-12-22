function qrl_vn(e) {
    if (!(e.charCode === 0 || /^[0-9.]+$/.test(String.fromCharCode(e.charCode)))) {
        e.preventDefault();
    }
}
function qrl_fc(txt) {
    var val = txt.value.replace(/[^0-9.]/g, '');
    if (val == '') { val = "0"; }
    txt.value = parseFloat(val).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    qrl_setResult_mp();
    qrl_setResult_ml();
}
function qrl_fp(txt) {
    var val = txt.value.replace(/[^0-9.]/g, '');
    if (val == '') { val = "0"; }
    txt.value = parseFloat(val).toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    qrl_setResult_mp();
    qrl_setResult_ml();
}
function qrl_setResult_mp() {
    var p = parseFloat(document.getElementById("qrl_mortgage_mp").value.replace(/[^0-9.]/g, ''));
    var i = parseFloat(document.getElementById("qrl_interest_mp").value.replace(/[^0-9.]/g, '')) / (12 * 100);
    var m = parseFloat(document.getElementById("qrl_period_mp").value) * 12;
    document.getElementById("qrl_result_mp").innerText = "$ " + qrl_calc_mp(p, i, m);
}
function qrl_setResult_ml() {
    var x = parseFloat(document.getElementById("qrl_payment_ml").value.replace(/[^0-9.]/g, ''));
    var i = parseFloat(document.getElementById("qrl_interest_ml").value.replace(/[^0-9.]/g, '')) / (12 * 100);
    var m = parseFloat(document.getElementById("qrl_period_ml").value) * 12;
    document.getElementById("qrl_result_ml").innerText = "$ " + qrl_calc_ml(x, i, m);
}
function qrl_calc_mp(p, i, m) {
    if (1 - (Math.pow(1 / (1 + i), m)) > 0) {
        return (p * i / (1 - (Math.pow(1 / (1 + i), m)))).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        return (p / m).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}
function qrl_calc_ml(x, i, m) {
    if (1 - (Math.pow(1 / (1 + i), m)) > 0) {
        return (x / (i / (1 - (Math.pow(1 / (1 + i), m))))).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    } else {
        return (x * m).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
}
function qrl_toggle(tar) {
    var n = "ml"
    if (tar == "ml") { n = "mp"; }
    document.getElementById("qrl_" + tar).className = "qrl-mortcalc-inner";
    document.getElementById("qrl_" + n).className = "qrl-mortcalc-inner qrl-hidden";
    document.getElementById("qrl_li_" + tar).className = "active";
    document.getElementById("qrl_li_" + n).className = "";
    return false;
}
function qrl_load() {
    var h = document.getElementsByTagName('head').item(0);
    var s = document.createElement("link");
    s.rel = "stylesheet";
    s.href = "https://cdn.jsdelivr.net/gh/qrlfs/qrlfinancial@1.1.5/mortcalc/mortcalc.css";
    s.tyle = "text/css";
    h.appendChild(s);
    var qrl_container = document.getElementById("qrl_mortcalc");
    var cn = "";
	if (qrl_container.hasAttribute("theme")) {
		cn += "qrl-" + qrl_container.getAttribute("theme");		
	} else {
		cn += "qrl-default"
	}
	if (qrl_container.hasAttribute("layout")) {
		cn += " qrl-" + qrl_container.getAttribute("layout");
	} else {
		cn += " qrl-vertical"
	}
    if (document.documentMode <= 8) {
        cn += " qrl-cm";
    }
    qrl_container.className = cn;
    qrl_container.innerHTML = "<div class='qrl-mortcalc-head'><h2>Mortgage Calculator</h2></div><ul class='qrl-ctl'><li id='qrl_li_mp' class='active'> <a href='javascript:void(0);' onclick='qrl_toggle(\"mp\");'>Monthly Payment</a> </li> <li id='qrl_li_ml'> <a href='javascript:void(0);' onclick='qrl_toggle(\"ml\");'>Maximum Loan</a> </li> </ul> <div id='qrl_mp' class='qrl-mortcalc-inner'> <div class='qrl-wrap'> <div class='qrl-col'> <div class='qrl-grp'> <label class='qrl-lbl'>Mortgage Amount</label> <input type='text' id='qrl_mortgage_mp' class='qrl-txt qrl-text-dol' maxlength='12' onkeypress='qrl_vn(event);' onblur='qrl_fc(this);' value='100,000.00' /> <div class='qrl-dol'>$</div> </div> </div> <div class='qrl-col'> <div class='qrl-grp'> <label class='qrl-lbl'>Interest Rate (%)</label> <input type='text' id='qrl_interest_mp' class='qrl-txt qrl-num' maxlength='7' onkeypress='qrl_vn(event);' onblur='qrl_fp(this);' value='4.000' /> </div> </div> <div class='qrl-col'> <div class='qrl-grp'> <label class='qrl-lbl'>Mortgage Period (years)</label> <select id='qrl_period_mp' class='qrl-sel' onchange='qrl_setResult_mp();'> <option value='15'>15</option> <option value='20'>20</option> <option value='30' selected='selected'>30</option> </select> </div> </div> <div class='qrl-fin'> <label class='qrl-lbl'>Monthly Principal & Interest</label> <div id='qrl_result_mp'>$ 0.00</div> </div> </div> </div> <div id='qrl_ml' class='qrl-mortcalc-inner qrl-hidden'> <div class='qrl-wrap'> <div class='qrl-col'> <div class='qrl-grp'> <label class='qrl-lbl'>Monthly Payment</label> <input type='text' id='qrl_payment_ml' class='qrl-txt qrl-text-dol' maxlength='12' onkeypress='qrl_vn(event);' onblur='qrl_fc(this);' value='1,000.00' /> <div class='qrl-dol'>$</div> </div> </div> <div class='qrl-col'> <div class='qrl-grp'> <label class='qrl-lbl'>Interest Rate (%)</label> <input type='text' id='qrl_interest_ml' class='qrl-txt qrl-num' maxlength='7' onkeypress='qrl_vn(event);' onblur='qrl_fp(this);' value='4.000' /> </div> </div> <div class='qrl-col'> <div class='qrl-grp'> <label class='qrl-lbl'>Mortgage Period (years)</label> <select id='qrl_period_ml' class='qrl-sel' onchange='qrl_setResult_ml();'> <option value='15'>15</option> <option value='20'>20</option> <option value='30' selected='selected'>30</option> </select> </div> </div> <div class='qrl-fin'> <label class='qrl-lbl'>Loan Amount</label> <div id='qrl_result_ml'>$ 0.00</div></div></div></div><!--(c) QRL Financial Services (www.qrlfinancial.com)-->";
    qrl_setResult_mp();
    qrl_setResult_ml();
}
qrl_load();
