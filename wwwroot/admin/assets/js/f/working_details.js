
var optionEl = $('#free_option_arr').val();
var newOption = optionEl+'<div class="err_cv"></div>';
var selectedOpt = "";

$(document).ready(function(){

	$('#frmWorkingDetails').ready(function(){
		
        //enable remove row button if more than one rows present
		var rowC = $('.working_det_table .table_body tr').length;
		if(rowC > 1){
			$('.working_det_table .table_body tr button').removeAttr('disabled');
		}

        //select reasons by default
		var stoppageSn = [];
		stoppageSn[1] = $('#stoppage_sn_1').val();
		stoppageSn[2] = $('#stoppage_sn_2').val();
		stoppageSn[3] = $('#stoppage_sn_3').val();
		stoppageSn[4] = $('#stoppage_sn_4').val();
		stoppageSn[5] = $('#stoppage_sn_5').val();

		if(stoppageSn[1] != null){
			var selId = '1';
			var rowId = 'row-'+selId;
			var selOption = stoppageSn[1];
			$('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').attr('selected','true');
		}

		if(stoppageSn[2] != null){
			var selId = '2';
			var rowId = 'row-'+selId;
			var selOption = stoppageSn[2];
			$('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').attr('selected','true');
		}

		if(stoppageSn[3] != null){
			var selId = '3';
			var rowId = 'row-'+selId;
			var selOption = stoppageSn[3];
			$('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').attr('selected','true');
        }

		if(stoppageSn[4] != null){
        	var selId = '4';
			var rowId = 'row-'+selId;
			var selOption = stoppageSn[4];
			$('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').attr('selected','true');
        }

		if(stoppageSn[5] != null){
			var selId = '5';
			var rowId = 'row-'+selId;
			var selOption = stoppageSn[5];
			$('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').attr('selected','true');
		}

	});
    
    $('#frmWorkingDetails').on('change', '.work_det_reason', function(){

        var rowId = $(this).closest('tr').attr('id');
        updateWorkDetDropdown(rowId);

    });

    $('#frmWorkingDetails').on('click', '.rem_work_det_row', function(){

        var rowId = $(this).closest('tr').attr('id');
        remWorkDetRow(rowId);

    });
    
    //add more row
	$('#frmWorkingDetails').on('click', '#working_det_add_more', function(){

		var rowsCount = $('.working_det_table .table_body tr').length;
		if(rowsCount < 5){

			var currentRow = $('.working_det_table .table_body tr:last').attr('id');
			var extractId = currentRow.split('-');
			var incRow = parseInt(extractId[1]) + parseInt(1);

			selectEle = newOption.replace(/incStringPurpose/g,incRow);

			var selectEleLastKey = '<input type="hidden" name="stop_res_last_key[]" id="sto_res_last_key-incStringPurpose" value="">';
			var selectEleLastVal = '<input type="hidden" name="stop_res_last_val[]" id="sto_res_last_val-incStringPurpose" value="">';

			selectEleLastKey = selectEleLastKey.replace(/incStringPurpose/g,incRow);
			selectEleLastVal = selectEleLastVal.replace(/incStringPurpose/g,incRow);

			var rowContainer = "<tr id='row-"+incRow+"'><td>"+selectEle+" "+selectEleLastKey+" "+selectEleLastVal+"</td><td><div class='input text'><input type='text' name='no_days[]' id='no_days_"+incRow+"' class='form-control cvOn cvReq cvNum cvMaxLen' maxlength='2'></div><div class='err_cv'></div></td><td><button type='button' class='btn btn-sm btn-danger rem_work_det_row'><i class='fa fa-times'></i></button></td></tr>";

			$('.working_det_table .table_body').append(rowContainer);
			checkWorkDetRows();
			checkWorkDetRem();

		}

	});

});

$("#f_total_no_days").blur(function () {
	var month = $("#curmonth").val();
	var year = $("#curyear").val();

	// var daysinmonth = daysInMonth(month, year);
	var daysinmonth = $('#month_days').val();
	var enteredvalue = $("#f_total_no_days").val();
	if (enteredvalue > daysinmonth)
	{
		$("#f_total_no_days").focus();
		$('#frmWorkingDetails #f_total_no_days').addClass('is-invalid');
		showAlrt('Number of days the mine worked must be less than or equal to days in that particular month.');
		$("#f_total_no_days").val('');

	}
});

function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}


function checkWorkDetRows(){

	var totalRows = $('.working_det_table .table_body tr').length;
	if(totalRows == 5){
		$('#working_det_add_more').hide();
	} else {
		$('#working_det_add_more').show();
	}

}

function checkWorkDetRem(){

	var totalRows = $('.working_det_table .table_body tr').length;
	if(totalRows == 2){
		$('.working_det_table .table_body tr:first button').removeAttr('disabled');
	} else if(totalRows == 1) {
		$('.working_det_table .table_body tr:first button').attr('disabled','true');
	}

}

function updateWorkDetDropdown(rowId){

	var selId = rowId.split('-');
	var selectId = "stoppage_reason-"+selId[1];
	var curId = selId[1];
	var selOption = $('#'+rowId+' .work_det_reason').val();
	var selText = $('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').text();
	var selLastOpt = $('#sto_res_last_key-'+curId).val();
	var selLastOptVal = $('#sto_res_last_val-'+curId).val();

	if((!selOption.trim()) && (selLastOpt.trim())){

		// old: filled, new: blank
		// $('.work_det_reason option[value="'+selOption+'"]').not('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').remove();
		$('.work_det_reason').not('#'+rowId+' .work_det_reason').append("<option value='"+selLastOpt+"'>"+selLastOptVal+"</option>");
		$('#sto_res_last_key-'+curId).val(selOption);
		$('#sto_res_last_val-'+curId).val(selText);
		newOption = newOption.replace("</select>", '<option value="'+selLastOpt+'">'+selLastOptVal+'</option></select>');

	} else if(!selLastOpt.trim()){
		$('.work_det_reason option[value="'+selOption+'"]').not('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').remove();
		$('#sto_res_last_key-'+curId).val(selOption);
		$('#sto_res_last_val-'+curId).val(selText);
		selectedOpt='<option value="'+selOption+'">'+selText+'</option>';
		newOption = newOption.replace(selectedOpt, "");

	} else {
		$('.work_det_reason option[value="'+selOption+'"]').not('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').remove();
		$('.work_det_reason').not('#'+rowId+' .work_det_reason').append("<option value='"+selLastOpt+"'>"+selLastOptVal+"</option>");
		$('#sto_res_last_key-'+curId).val(selOption);
		$('#sto_res_last_val-'+curId).val(selText);
		selectedOpt='<option value="'+selOption+'">'+selText+'</option>';
		newOption = newOption.replace(selectedOpt, "");
		newOption = newOption.replace("</select>", '<option value="'+selLastOpt+'">'+selLastOptVal+'</option></select>');

	}

}

function remWorkDetRow(rowId){

	var selId = rowId.split('-');
	var selectId = "stoppage_reason-"+selId[1];
	var curId = selId[1];
	var selOption = $('#'+rowId+' .work_det_reason').val();
	var selText = $('#'+rowId+' .work_det_reason option[value="'+selOption+'"]').text();
	// var selLastOpt = $('#sto_res_last_key-'+curId).val();
	// var selLastOptVal = $('#sto_res_last_val-'+curId).val();

	if(!selOption.trim()){

	} else {

		$('.work_det_reason').not('#'+rowId+' .work_det_reason').append("<option value='"+selOption+"'>"+selText+"</option>");
		var selectedOptn='<option value="'+selOption+'">'+selText+'</option>';
		newOption = newOption.replace(selectedOptn, "");
		newOption = newOption.replace("</select>", '<option value="'+selOption+'">'+selText+'</option></select>');

	}

	$('#' + rowId).remove();
	checkWorkDetRows();
	checkWorkDetRem();

}
