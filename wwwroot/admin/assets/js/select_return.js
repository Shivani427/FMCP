
$(document).ready(function(){

    /* message modal box */
    $('.msg_box_modal').ready(function(){
        $('#login-modal-btn-msg-box').click();
        $('.login-modal-btn').on('click',function(){
            var alrtRedirectUrl = $('#alrt_redirect_url').val();
            location.href = alrtRedirectUrl;
        });
    });

    /* monthly select return form validations */
    $('#frmSelectReturns').ready(function(){

        $("#month").change(function(){
            var year = $("#year option:selected").val();
            var month = $("#month option:selected").val();
                    
            if(year!=null){
                var currentMonth = $('#current_month').val();
                var currentYear = $('#current_year').val();
                            
                if(year == currentYear){
                if(month >= currentMonth){
                    alert("You cannot select this month of current year");
                    $("#month").val('');
                }   
                }
            }
        });
      
      
        $("#year").change(function(){
            var year = $("#year option:selected").val();
            var month = $("#month option:selected").val();
                
            if(year!=null){
                var currentMonth = $('#current_month').val();
                var currentYear = $('#current_year').val();
                            
                if(year == currentYear){
                    if(month >= currentMonth){
                        alert("You cannot select this month of current year");
                        $("#month").val('');
                    }   
                }
            }
        });
      
        $('#frmSelectReturns').on('submit', function(){
            var month = $("#month option:selected").val();
            var year = $("#year option:selected").val();
            var result = true;
    
            if(month == ''){
    
                $('.err_month').text("Please select valid month");
                $('#month').addClass('form_red');
                result = false;
    
            } else if(year == ''){
    
                $('.err_year').text("Please select valid year");
                $('#year').addClass('form_red');
                result = false;
    
            }
    
            return result;
        });
    
        $('#month').on('click',function(){
            $(this).removeClass('form_red');
            $('.err_month').text("");
        });
    
        $('#year').on('click',function(){
            $(this).removeClass('form_red');
            $('.err_year').text("");
        });

    });

    /* annual select return form validations */
    $('#frmAnnualReturns').ready(function(){
        
        $('#frmAnnualReturns').on('submit', function(){
            var year = $("#year option:selected").val();
            var result = true;

            if(year == ''){
                $('.err_annual_year').text("Please select valid year");
                $('#year').addClass('is-invalid');
                result = false;
            }
    
            return result;
        });
    
        $('#year').on('click',function(){
            $(this).removeClass('is-invalid');
            $('.err_annual_year').text("");
        });

    });

      
});