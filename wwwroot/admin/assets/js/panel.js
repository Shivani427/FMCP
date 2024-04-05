
$(document).ready(function(){

	$('#list').DataTable();
	$('#frmDeductionsDetails').addClass('w-75 m-auto');
	
	/**
	 * HIGHLIGHT FORM LEFT SIDEBAR MAIN MENU SECTION IF ALL SUBMENUS ARE FILLED
	 * @version 01-04-2021
	 * @author Aniket Ganvir
	 */

	for(var i=1; i<=10; i++){

		if($('.menu_sec_'+i).length > 0){

			var secCount = $('.menu_sec_'+i).parent().find('ul li').length;
			var classCount = $('.menu_sec_'+i).parent().find('ul li .u_menu_success').length;
			var pendingCount = $('.menu_sec_'+i).parent().find('ul li .u_menu_pending').length;
			if(secCount == classCount){
				$('.menu_sec_'+i).addClass('main_menu_success');
				$('.pb_menu_sec_'+i).addClass('u_pb_success');
			} else if(pendingCount > 0) {
				$('.menu_sec_'+i).addClass('main_menu_pending');
				$('.pb_menu_sec_'+i).addClass('u_pb_pending');
			} else {
				$('.pb_menu_sec_'+i).addClass('u_pb_error');
			}

		}

	}

	/* printall button */
	$('#print_all_btn').on('click',function(){
		var l_val = $(this).val();
		window.open(l_val, '_blank');
	});

	/* statistics count swing effect */
	$('.count-text').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});

	/* progress bar highlight */

	var pbCount = $('.u_pb_menu li').length;
	var i;
	var avgLen = 100 / pbCount;
	var activeMenuLen = avgLen + (pbCount - 1);
	var normalMenuLen = avgLen - 1;
	for(i = 1; i <= pbCount; i++){
	
		if($('.u_pb_menu li:nth-child('+i+') a').hasClass('u_progress_bar_active')){
			$('.u_pb_menu li:nth-child('+i+')').css('width', activeMenuLen+'%');
		} else {
			$('.u_pb_menu li:nth-child('+i+')').css('width', normalMenuLen+'%');
		}
		
	}
	
	$('.u_progress_bar').hover(function(){
		$(this).parent().css('width', activeMenuLen+'%');
		$('.u_progress_bar_active').parent().css('width', normalMenuLen+'%');
		//$('.u_pg_bar_active').addClass('u_progress_bar_menu');
	}, function(){
		$(this).parent().css('width', normalMenuLen+'%');
		$('.u_progress_bar_active').parent().css('width', activeMenuLen+'%');
	});


});

// element > return_list
if($('.return_list_table').length){
	$('.return_list_table').DataTable();
}

// monthly > rejected_returns
$(document).ready(function() {
	if($('.rejected-return-table').length){
		$('#rejected-return-table').DataTable();
	}
});

/**
 * Spinner hide/show on form redirection and on load
 * @version 17th Nov 2021
 * @author Aniket Ganvir
 */
 $(window).on('load', function() {

	$('.form_spinner').hide('slow');

});

$(document).ready(function() {
	
	// Sidebar menu link redirection
	$('.mm-collapse li:not(:has(a[href="#"]))').on('click', function() {
		$('.form_spinner').show('slow');
	});

	// For 'Previous', 'Home' and 'Next' action button
	$(document).on('click', '.spinner_btn_nxt', function() {
		$('.form_spinner').show('slow');
	});

	// Modal continue button
	$('#modal-cont-btn').on('click', function() {
		$('.form_spinner').show('slow');
	});
	
	// $('.spinner_btn').on('click', function() {
	// 	$('.form_spinner').show('slow');
	// });

	// $("body").on('DOMSubtreeModified', "#alrt-div", function() {
	// 	console.log('changed');
	// });

	// $('#alrt-div').on('documentchanged', function() {
	// 	// 	console.log('changed');
	// });

});

