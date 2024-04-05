
$(document).ready(function(){

    $('#frmSalesDespatches #table_container_1').ready(function(){
        checkNilEntry();
        checkNatureOfDispatch();
    })

    $('#frmSalesDespatches').on('change', '.client_type', function(){
        var fieldId = $(this).attr('id');
        natureofdispatch(fieldId);
    });
    
    $('#frmSalesDespatches').on('click', '#addmorebtn #add_more', function(){
        
        $('#frmSalesDespatches #table_1').ready(function() {
            checkNatureOfDispatch();
        });

    });

    
    $('#frmSalesDespatches').on('change', '.sale_despatch_grade', function(){

        var curEl = $(this).attr('id');
        var curElArr = curEl.split('-');
        var curElRw = curElArr.length;
        var tblRw = curElArr[curElRw - 1];
        var grade = $(this).val();
        
        if(grade == 'NIL'){
            
            if($('#row_container-'+tblRw+' td').eq(1).find("select option[value='NIL']").length == 0){
                $('#row_container-'+tblRw+' td').eq(1).find('select').append($('<option></option>').attr('value','NIL').text('NIL'));
            }

            $('#row_container-'+tblRw+' td').eq(1).find('select').val('NIL').prop('disabled', true);
            $('#row_container-'+tblRw+' td').eq(2).find('.auto-comp').val('0').prop('disabled', true);
            $('#row_container-'+tblRw+' td').eq(3).find('input').val('NIL').prop('disabled', true);
            $('#row_container-'+tblRw+' td').eq(4).find('input').val('0.000').prop('disabled', true);
            $('#row_container-'+tblRw+' td').eq(5).find('input').val('0.00').prop('disabled', true);
            
            if($('#row_container-'+tblRw+' td').eq(6).find("select option[value='NIL']").length == 0){
                $('#row_container-'+tblRw+' td').eq(6).find('select').append($('<option></option>').attr('value','NIL').text('NIL'));
            }

            $('#row_container-'+tblRw+' td').eq(6).find('select').val('NIL').prop('disabled', true);
            $('#row_container-'+tblRw+' td').eq(7).find('input').val('0.000').prop('disabled', true);
            $('#row_container-'+tblRw+' td').eq(8).find('input').val('0.00').prop('disabled', true);

            remSaleDespatchRow();

        } else {

            upSaleDespatchRow();
            
            if($('#row_container-'+tblRw+' td').eq(1).find("select option[value='NIL']").length != 0){
                $('#row_container-'+tblRw+' td').eq(1).find("select option[value='NIL']").remove();
                
                if($('#row_container-'+tblRw+' td').eq(6).find("select option[value='NIL']").length != 0){
                    $('#row_container-'+tblRw+' td').eq(6).find("select option[value='NIL']").remove();
                }
                
                $('#row_container-'+tblRw+' td').eq(1).find('select').prop('disabled', false);
                $('#row_container-'+tblRw+' td').eq(2).find('.auto-comp').prop('disabled', false);
                $('#row_container-'+tblRw+' td').eq(3).find('input').prop('disabled', false);
                $('#row_container-'+tblRw+' td').eq(4).find('input').prop('disabled', false);
                $('#row_container-'+tblRw+' td').eq(5).find('input').prop('disabled', false);

                $('#row_container-'+tblRw+' td').eq(6).find('select').val('');
                $('#row_container-'+tblRw+' td').eq(7).find('input').val('');
                $('#row_container-'+tblRw+' td').eq(8).find('input').val('');

            }

        }

    });

    $("#reason_1").focusout(function (event) {
        if ($(this).val() != '') {
            var dataToAppend = "<div class='mt-2 position-absolute'> Reason for increase/decrease in Production </div>";
            $(this).parent().next('.err_cv').html(dataToAppend);
            event.preventDefault();
        }
    });
    
    $("#reason_2").focusout(function (event) {
        if ($(this).val() != '') {
            var dataToAppend = "<div class='mt-2 position-absolute'> Reason for increase/decrease in Ex-mine price </div>";
            $(this).parent().next('.err_cv').html(dataToAppend);
            event.preventDefault();
        }
    });

});

function remSaleDespatchRow(){

	$('#frmSalesDespatches #table_1 .table_body tr:not(:first-child)').remove();
	$('#add_more').hide();
	$('#frmSalesDespatches #table_1 .table_body tr:first-child .remove_btn .remove_btn_btn').attr('disabled',true);

}

function upSaleDespatchRow(){

	$('#add_more').show();
}


function natureofdispatch(id){

	var result = id.split('-');
	var count = result[2];
    var nature = document.getElementById(id).value;

    if (nature != '') {
		$('.err_cv').text('');
        if (nature == 'EXPORT') {
            document.getElementById('ta-client_reg_no-' + count).disabled = true;
            document.getElementById('ta-client_name-' + count).disabled = true;
            document.getElementById('ta-quantity-' + count).disabled = true;
            document.getElementById('ta-sale_value-' + count).disabled = true;
            document.getElementById('ta-expo_country-' + count).disabled = false;
            $('#ta-expo_country-' + count).val($('#ta-expo_country-' + count + ' option:first').val());
            document.getElementById('ta-expo_quantity-' + count).disabled = false;
            document.getElementById('ta-expo_fob-' + count).disabled = false;

            //clear the other entered fields
            document.getElementById('ta-client_reg_no-' + count).value = '';
            document.getElementById('ta-client_name-' + count).value = '';
            document.getElementById('ta-quantity-' + count).value = '';
            document.getElementById('ta-sale_value-' + count).value = '';
        } else {
            document.getElementById('ta-client_reg_no-' + count).disabled = false;
            document.getElementById('ta-client_name-' + count).disabled = false;
            document.getElementById('ta-quantity-' + count).disabled = false;
            document.getElementById('ta-sale_value-' + count).disabled = false;
            document.getElementById('ta-expo_country-' + count).disabled = true;
            document.getElementById('ta-expo_quantity-' + count).disabled = true;
            document.getElementById('ta-expo_fob-' + count).disabled = true;

            //clear the other entered fields
            // document.getElementById('ta-expo_country-' + count).value = '';
            document.getElementById('ta-expo_quantity-' + count).value = '';
            document.getElementById('ta-expo_fob-' + count).value = '';
        }
        
        if(count != 1){
            if($('#row_container-'+count+' td').eq(0).find("select option[value='NIL']").length != 0){
                $('#row_container-'+count+' td').eq(0).find("select option[value='NIL']").remove();
            }
            
            if($('#row_container-'+count+' td').eq(1).find("select option[value='NIL']").length != 0){
                $('#row_container-'+count+' td').eq(1).find("select option[value='NIL']").remove();
            }
            if($('#row_container-'+count+' td').eq(6).find("select option[value='NIL']").length != 0){
                $('#row_container-'+count+' td').eq(6).find("select option[value='NIL']").remove();
            }
        }
        
    }

}

$(document).ready(function(){

    $('#frmSalesDespatches').on('change', '.auto-comp', function(){

        var curEl = $(this).attr('id');
        var curElArr = curEl.split('-');
        var numRw = curElArr[2];
        var consigneeUrl = $('#consignee_url').val();

        setTimeout(function(){
            var reg_no = $('#ta-client_reg_no-'+numRw).val();
            $.ajax({
                type: 'POST',
                url: consigneeUrl,
                data: {	'reg_no': reg_no,},
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
                },
                success: function(data){
                    $('#ta-client_name-'+numRw).val(data);
                }
            });
        }, 500);

    });

    $('#frmSalesDespatches').on('keyup', '.auto-comp', function(){

        var curEl = $(this).attr('id');
        var curElArr = curEl.split('-');
        var numRw = curElArr[2];
        var app_id = $(this).val();
        var appUrl = $('#app_id_url').val();
        if (app_id !=="") {
            $.ajax({
                url:appUrl,
                type:"POST",
                cache:false,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
                },
                data:{'app_id':app_id},
                success:function(data){
                    $("#ta-suggestion_box-"+numRw).html(data);
                    $("#ta-suggestion_box-"+numRw).fadeIn();
                }  
            });
        }else{
            $("#ta-suggestion_box-"+numRw).html("");  
            $("#ta-suggestion_box-"+numRw).fadeOut();
        }

        // click one particular city name it's fill in textbox
        // $(document).on("click","li", function(){
        //   $('#ta-client_reg_no-'+numRw).val($(this).text());
        //   $('#ta-suggestion_box-'+numRw).fadeOut("fast");
        // });

        $(document).on("click",".sugg-box ul li", function(){
            var sugBoxId = $(this).closest('.sugg-box').attr('id');
            var curBx = sugBoxId.split('-');
            var boxRw = curBx[2];
            $('#ta-client_reg_no-'+boxRw).val($(this).text());
            $('#ta-suggestion_box-'+boxRw).fadeOut("fast");
        });

    });

});

function checkNilEntry(){

    var gradeCode = $('#frmSalesDespatches #ta-grade_code-1').val();
    if(gradeCode == 'NIL'){

        var tblRw = 1;
        
        if($('#row_container-'+tblRw+' td').eq(1).find("select option[value='NIL']").length == 0){
            $('#row_container-'+tblRw+' td').eq(1).find('select').append($('<option></option>').attr('value','NIL').text('NIL'));
        }

        $('#row_container-'+tblRw+' td').eq(1).find('select').val('NIL').prop('disabled', true);
        $('#row_container-'+tblRw+' td').eq(2).find('.auto-comp').val('0').prop('disabled', true);
        $('#row_container-'+tblRw+' td').eq(3).find('input').val('NIL').prop('disabled', true);
        $('#row_container-'+tblRw+' td').eq(4).find('input').val('0.000').prop('disabled', true);
        $('#row_container-'+tblRw+' td').eq(5).find('input').val('0.00').prop('disabled', true);
        
        if($('#row_container-'+tblRw+' td').eq(6).find("select option[value='NIL']").length == 0){
            $('#row_container-'+tblRw+' td').eq(6).find('select').append($('<option></option>').attr('value','NIL').text('NIL'));
        }

        $('#row_container-'+tblRw+' td').eq(6).find('select').val('NIL').prop('disabled', true);
        $('#row_container-'+tblRw+' td').eq(7).find('input').val('0.000').prop('disabled', true);
        $('#row_container-'+tblRw+' td').eq(8).find('input').val('0.00').prop('disabled', true);

        remSaleDespatchRow();

    }
    
}

function checkNatureOfDispatch(){
    
    var lenn = $('#table_1 .table_body tr').length;

    var i;
    for(i=1; i <= lenn; i++){
        var gradeCode = $('#ta-grade_code-'+i).val();
        if(gradeCode != 'NIL'){
            var currentRow = 'ta-client_type-' + i;
            natureofdispatch(currentRow);
        }
    }

}

// $(document).ready(function () {
// 	custom_validations.despatchGetUserByName("/monthly/getUserByConsigneeName");
// 	custom_validations.despatchGetUserByRegNo("/monthly/getUserByRegNo");

// 	var returnType = "<?php //echo $returnType; ?>";
// 	if (returnType == "ANNUAL") {
// 		custom_validations.closeIconClick();
// 	}

// 	// var checkFormTypeForF5 = "<?php //echo $formType; ?>";
// 	// var checkF5ForNil = "<?php //echo $checkF5ForNil; ?>";
// 	// if(checkFormTypeForF5 == 'F5'){
// 	// custom_validations.F5AutoFillForZeroProduction(checkF5ForNil);
// 	// }
// });

// custom_validations.init();
