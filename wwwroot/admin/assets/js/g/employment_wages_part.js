
$(document).ready(function(){

    EmploymentWagesPart2.fieldValidation();
    EmploymentWagesPart2.validateBigFormula();

    var startDate = $('#start_date').val();
    var endDate = $('#end_date').val();

    var sDate = startDate.split('-');
    var sDD = sDate[2];
    var sMM = sDate[1];
    var sYY = sDate[0];
    sDate = sDD+'-'+sMM+'-'+sYY;
    
    var eDate = endDate.split('-');
    var eDD = eDate[2];
    var eMM = eDate[1];
    var eYY = eDate[0];
    eDate = eDD+'-'+eMM+'-'+eYY;

    $(function() {
        $(".date").datepicker({
            dateFormat: 'dd-mm-yy',
            changeMonth: true,
            changeYear: true
        });

        $(".date").datepicker("option", "minDate", sDate);
        $(".date").datepicker("option", "maxDate", eDate);

    });
    

    // $("#WORKING_BELOW_DATE").prop('readonly', 'readonly');
    // $("#WORKING_ALL_DATE").prop('readonly', 'readonly');

    // var fromReturnYearForCal = "2020";
    // var toReturnYearForCal = parseInt(fromReturnYearForCal) + 1;
    // Utilities.datePicker(".date", fromReturnYearForCal, toReturnYearForCal);
    
    getTotal('direct');
    getTotal('contract');
    getTotal('man');
    getTotalDays();
    getTotal('male');
    getTotal('female');
    getTotal('per_tot');
    getTotal('wages');
    
    $('.direct').on('blur', function() {
        getTotal('direct');
        getTotalEmployeeDirect(this.id);
        getTotal("man");
    });

    $('.contract').on('blur', function() {
        getTotal('contract');
        getTotalEmployeeDirect(this.id);
        getTotal("man");
    });

    $('.man').on('blur', function() {
        getTotal("man");
    });
    
    $('.days').on('blur', function() {
        // getTotal("days");
        getTotalDays();
    });
    
    $('.male').on('blur', function() {
        getTotal('male');
        getTotalEmployeeDirect(this.id);
        getTotal("per_tot");
    });
    
    $('.female').on('blur', function() {
        getTotal('female');
        getTotalEmployeeDirect(this.id);
        getTotal("per_tot");
    });

    $('.per_tot').on('blur', function() {
        getTotal("per_tot");
    });
    
    $('.wages').on('blur', function() {
        getTotal("wages");
    });

});


function getTotal(field) {
    
    var totalValue = 0;
    var multiplicationValue = 0;
    $('.'+field).each(function() {
        var field_id = this.id;
        if($('#'+field_id).val() != '') {
            totalValue = totalValue+parseFloat($('#'+field_id).val());
            if(field == 'days' || field == 'direct' || field == 'contract'){
                var splittedFieldId = field_id.split('_');
                var manTotId = splittedFieldId[0]+'_'+splittedFieldId[1]+'_MAN_TOT';
                var daysId  = splittedFieldId[0]+'_'+splittedFieldId[1]+'_DAYS';
                //alert($('#'+daysId).val());
                if($('#'+daysId).val() != '' && $('#'+daysId).val() != 0) {
                    multiplicationValue = parseFloat(multiplicationValue)+parseFloat($('#'+daysId).val()) * parseFloat($('#'+manTotId).val());
                    var finalValue = parseFloat(multiplicationValue)/parseFloat($('#TOTAL_MAN').val());
                    finalValue = Math.round(finalValue);
                    $('#TOTAL_DAYS').val(finalValue);
                }
                
            }
        }
    });

    var field_new = field.toUpperCase();

    //  alert('else');
    if(field_new != 'DAYS'){
        if(field_new == 'WAGES'){
            var totValue = Utilities.roundOff2(totalValue)
        }
        else{
            var totValue = Utilities.roundOff1(totalValue)
        }
        $('#TOTAL_'+field_new).val(totValue);
        if(field_new == 'FEMALE' || field_new == 'MALE') {
            var totalMale   = $('#TOTAL_MALE').val();
            var totalFemale = $('#TOTAL_FEMALE').val();
            var calculatedTotal = parseFloat(totalMale)+parseFloat(totalFemale);
            var calTotal = Utilities.roundOff1(calculatedTotal);
            $('#TOTAL_PERSONS').val(calTotal);
        }
        // $('#TOTAL_'+field_new).val(totalValue.toFixed(1));
        // $('#TOTAL_'+field_new).val(totalValue.toFixed(1));
    }

    /*if(field_new == 'DAYS' || field_new == 'DIRECT' || field_new == 'CONTRACT'){
        var totalPersonsVal = parseFloat($('#TOTAL_MAN').val())/parseFloat($('#TOTAL_DAYS').val());
        $('#TOTAL_PERSONS').val(totalPersonsVal);
    }*/

}

function getTotalEmployeeDirect(elementId){
    var splittedId   = elementId.split('_');
    var commomField  = splittedId[0]+'_'+splittedId[1];
    var totalFieldId = commomField+'_MAN_TOT';
    var dirVal=parseFloat($("#"+commomField+"_DIRECT").val());
    var contVal=parseFloat($("#"+commomField+"_CONTRACT").val());
    var total = dirVal+contVal ;
    $("#"+totalFieldId).val(total.toFixed(1));
}

function getTotalDays() {
    var daysOne = $('#BELOW_FOREMAN_DAYS').val();
    var daysTwo = $('#OC_FOREMAN_DAYS').val();
    var daysThree = $('#ABOVE_CLERICAL_DAYS').val();
    daysOne = (daysOne == '') ? 0 : daysOne;
    daysTwo = (daysTwo == '') ? 0 : daysTwo;
    daysThree = (daysThree == '') ? 0 : daysThree;
    $('#TOTAL_DAYS').val(parseFloat(daysOne) + parseFloat(daysTwo) + parseFloat(daysThree));
}
