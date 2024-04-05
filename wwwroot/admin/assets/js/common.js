/* Hide error msg after 5s*/
$(function() {
    setTimeout(function() { $(".errormsg").fadeOut(1500); }, 5000)    
})

/* change language dropdown */
$('#language-dd').on('click', function(){

	var changeLangUrl = $('#change_lang_url').val();

	$.ajax({
	    url: changeLangUrl,
		beforeSend: function (xhr){
			xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
		},
	    success: function (resp) {
	    	location.reload();
	    }
	});

});

$(document).ready(function(){

	/* javascript disable msg box */
	$('.reload_page_btn').on('click', function(){
		location.reload();
	});

});