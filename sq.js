var sec = [];	
var vals = [];
var f = $('form[name="frmSecurity"]');
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
$(document).ready(function() {
	if (f) {
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
});



