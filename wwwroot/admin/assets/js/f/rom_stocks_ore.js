
$(document).ready(function(){

    f5Rom.formRomF5Validation();

	$('#frmRomStocksOre').on('change', '.open_dev_metal', function(){

		var openDevMetalCount = $('#open_dev_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.open_dev_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
            			showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.prod_dev_metal', function(){

		var openDevMetalCount = $('#prod_dev_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.prod_dev_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.close_dev_metal', function(){

		var openDevMetalCount = $('#close_dev_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.close_dev_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.open_stop_metal', function(){

		var openDevMetalCount = $('#open_stop_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.open_stop_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.prod_stop_metal', function(){

		var openDevMetalCount = $('#prod_stop_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.prod_stop_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.close_stop_metal', function(){

		var openDevMetalCount = $('#close_stop_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.close_stop_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.open_cast_metal', function(){

		var openDevMetalCount = $('#open_cast_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.open_cast_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.prod_cast_metal', function(){

		var openDevMetalCount = $('#prod_cast_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.prod_cast_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});
	
	$('#frmRomStocksOre').on('change', '.close_cast_metal', function(){

		var openDevMetalCount = $('#close_cast_metal_count').val();
		if(openDevMetalCount != 1){
			var selEl = $(this);
			var selMetal = $(this).val();
			var elId = $(this).attr('id');
			var elIdArr = elId.split('_');
			var elIdRw = elIdArr[3];
			
			$('.close_cast_metal').each(function(){
				var otherElId = $(this).attr('id');
				if(elId != otherElId){
					var otherMetal = $(this).val();
					if(selMetal == otherMetal){
						selEl.val('');
						showAlrt('Sorry, you can not select one metal more than once !');
					}
				}
			});

		}

	});

    romStockOreCount();
    romStockOreATotal('f_open_dev_qty', 'f_open_stop_qty', 'open_und_qty_total');
    romStockOreATotal('f_prod_dev_qty', 'f_prod_stop_qty', 'prod_und_qty_total');
    romStockOreATotal('f_close_dev_qty', 'f_close_stop_qty', 'close_und_qty_total');

    romStockOreRemAddAll('open_dev_table');
    romStockOreRemAddAll('prod_dev_table');
    romStockOreRemAddAll('close_dev_table');
    romStockOreRemAddAll('open_stop_table');
    romStockOreRemAddAll('prod_stop_table');
    romStockOreRemAddAll('close_stop_table');
    romStockOreRemAddAll('open_cast_table');
    romStockOreRemAddAll('prod_cast_table');
    romStockOreRemAddAll('close_cast_table');

    romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');
    romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');
    romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');
    romStockOreTStock();

    $('#frmRomStocksOre').on('click', '#btn-add-1', function(){

        var rowC = $('#open_dev_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#open_dev_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="open_dev_grade_rowcc" class="form-control input_sm open_dev_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="open_dev_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#open_dev_table');
        $('#open_dev_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#open_dev_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#open_dev_table');
        romStockOreSymRw('#open_dev_table');
        romStockOreCount();
        romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-2', function(){

        var rowC = $('#prod_dev_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#prod_dev_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="prod_dev_grade_rowcc" class="form-control input_sm prod_dev_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="prod_dev_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#prod_dev_table');
        $('#prod_dev_table tbody').append(rowCon);
        romStockOreCount();

    });


    $('#frmRomStocksOre').on('click', '#prod_dev_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#prod_dev_table');
        romStockOreSymRw('#prod_dev_table');
        romStockOreCount();
        romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-3', function(){

        var rowC = $('#close_dev_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#close_dev_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="close_dev_grade_rowcc" class="form-control input_sm close_dev_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="close_dev_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#close_dev_table');
        $('#close_dev_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#close_dev_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#close_dev_table');
        romStockOreSymRw('#close_dev_table');
        romStockOreCount();
        romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-4', function(){

        var rowC = $('#open_stop_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#open_stop_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="open_stop_grade_rowcc" class="form-control input_sm open_stop_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="open_stop_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#open_stop_table');
        $('#open_stop_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#open_stop_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#open_stop_table');
        romStockOreSymRw('#open_stop_table');
        romStockOreCount();
        romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-5', function(){

        var rowC = $('#prod_stop_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#prod_stop_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="prod_stop_grade_rowcc" class="form-control input_sm prod_stop_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="prod_stop_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#prod_stop_table');
        $('#prod_stop_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#prod_stop_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#prod_stop_table');
        romStockOreSymRw('#prod_stop_table');
        romStockOreCount();
        romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-6', function(){

        var rowC = $('#close_stop_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#close_stop_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="close_stop_grade_rowcc" class="form-control input_sm close_stop_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="close_stop_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#close_stop_table');
        $('#close_stop_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#close_stop_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#close_stop_table');
        romStockOreSymRw('#close_stop_table');
        romStockOreCount();
        romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-7', function(){

        var rowC = $('#open_cast_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#open_cast_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="open_cast_grade_rowcc" class="form-control input_sm open_cast_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="open_cast_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#open_cast_table');
        $('#open_cast_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#open_cast_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#open_cast_table');
        romStockOreSymRw('#open_cast_table');
        romStockOreCount();
        romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-8', function(){

        var rowC = $('#prod_cast_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#prod_cast_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="prod_cast_grade_rowcc" class="form-control input_sm prod_cast_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="prod_cast_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#prod_cast_table');
        $('#prod_cast_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#prod_cast_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#prod_cast_table');
        romStockOreSymRw('#prod_cast_table');
        romStockOreCount();
        romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');

    });

    $('#frmRomStocksOre').on('click', '#btn-add-9', function(){

        var rowC = $('#close_cast_table tbody tr').length;
        rowC++;

        var rowCon = "<tr>";
        rowCon += "<td>";
        rowCon += $('#close_cast_metal_row').val();
        rowCon += "<div class='err_cv'></div>";
        rowCon += "</td>";
        rowCon += "<td>";
        rowCon += '<div><input type="number" name="close_cast_grade_rowcc" class="form-control input_sm close_cast_grade grade-txtbox one_grade_more cvOn cvNum cvReq cvFloat" id="close_cast_grade_rowcc" cvFloat="99.99"></div><div class="err_cv"></div>';
        rowCon += "</td>";
        rowCon += "<td><i class='fa fa-times btn-rem'></i></td>";
        rowCon += "</tr>";
        rowCon = rowCon.replace(/rowcc/g,rowC);
        romStockRemAdd('#close_cast_table');
        $('#close_cast_table tbody').append(rowCon);
        romStockOreCount();

    });

    $('#frmRomStocksOre').on('click', '#close_cast_table .btn-rem', function(){

        $(this).closest('tr').remove();
        romStockOreRowVal('#close_cast_table');
        romStockOreSymRw('#close_cast_table');
        romStockOreCount();
        romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');

    });


    $('#mTable').on('change','#f_open_dev_qty, #f_open_stop_qty',function(){
        romStockOreATotal('f_open_dev_qty', 'f_open_stop_qty', 'open_und_qty_total');
    });

    $('#mTable').on('change','#f_prod_dev_qty, #f_prod_stop_qty',function(){
        romStockOreATotal('f_prod_dev_qty', 'f_prod_stop_qty', 'prod_und_qty_total');
    });

    $('#mTable').on('change','#f_close_dev_qty, #f_close_stop_qty',function(){
        romStockOreATotal('f_close_dev_qty', 'f_close_stop_qty', 'close_und_qty_total');
    });

    $('#open_dev_table').on('change','.open_dev_metal, .open_dev_grade',function(){
        romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');
    });
    $('#open_stop_table').on('change','.open_stop_metal, .open_stop_grade',function(){
        romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');
    });
    $('#open_cast_table').on('change','.open_cast_metal, .open_cast_grade',function(){
        romStockOreAMcgTotal('open_und_metal_total','open_dev_table','open_dev_metal','open_dev_grade','open_stop_table','open_stop_metal','open_stop_grade','open_total_table','open_cast_table','open_cast_metal','open_cast_grade');
    });

    $('#prod_dev_table').on('change','.prod_dev_metal, .prod_dev_grade',function(){
        romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');
    });
    $('#prod_stop_table').on('change','.prod_stop_metal, .prod_stop_grade',function(){
        romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');
    });
    $('#prod_cast_table').on('change','.prod_cast_metal, .prod_cast_grade',function(){
        romStockOreAMcgTotal('prod_und_metal_total','prod_dev_table','prod_dev_metal','prod_dev_grade','prod_stop_table','prod_stop_metal','prod_stop_grade','prod_total_table','prod_cast_table','prod_cast_metal','prod_cast_grade');
    });

    $('#close_dev_table').on('change','.close_dev_metal, .close_dev_grade',function(){
        romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');
    });
    $('#close_stop_table').on('change','.close_stop_metal, .close_stop_grade',function(){
        romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');
    });
    $('#close_cast_table').on('change','.close_cast_metal, .close_cast_grade',function(){
        romStockOreAMcgTotal('close_und_metal_total','close_dev_table','close_dev_metal','close_dev_grade','close_stop_table','close_stop_metal','close_stop_grade','close_total_table','close_cast_table','close_cast_metal','close_cast_grade');
    });




});


function romStockRemAdd(tId){

    $(tId+' tbody tr td:nth-child(3)').html("<i class='fa fa-times btn-rem'></i>");
}

function romStockOreRemAddAll(tId){

    if($('#'+tId+' tbody tr').length > 1){
        $('#'+tId+' tbody tr td:nth-child(3)').html("<i class='fa fa-times btn-rem'></i>");
    }
}

function romStockOreRowVal(tId){

    var rowCn = $(tId+' tbody tr').length;
    if(rowCn == 1){
        $(tId+' tbody tr:first td:nth-child(3)').html("");
    }

}

function romStockOreSymRw(tId){

    var rowCn = $(tId+' tbody tr').length;

    if(tId == '#open_dev_table'){
        var metalCl = '.open_dev_metal';
        var metalIn = 'open_dev_metal_';
        var gradeCl = '.open_dev_grade';
        var gradeIn = 'open_dev_grade_';
    } else if(tId == '#prod_dev_table'){
        var metalCl = '.prod_dev_metal';
        var metalIn = 'prod_dev_metal_';
        var gradeCl = '.prod_dev_grade';
        var gradeIn = 'prod_dev_grade_';
    } else if(tId == '#close_dev_table'){
        var metalCl = '.close_dev_metal';
        var metalIn = 'close_dev_metal_';
        var gradeCl = '.close_dev_grade';
        var gradeIn = 'close_dev_grade_';
    } else if(tId == '#open_stop_table'){
        var metalCl = '.open_stop_metal';
        var metalIn = 'open_stop_metal_';
        var gradeCl = '.open_stop_grade';
        var gradeIn = 'open_stop_grade_';
    } else if(tId == '#prod_stop_table'){
        var metalCl = '.prod_stop_metal';
        var metalIn = 'prod_stop_metal_';
        var gradeCl = '.prod_stop_grade';
        var gradeIn = 'prod_stop_grade_';
    } else if(tId == '#close_stop_table'){
        var metalCl = '.close_stop_metal';
        var metalIn = 'close_stop_metal_';
        var gradeCl = '.close_stop_grade';
        var gradeIn = 'close_stop_grade_';
    } else if(tId == '#open_cast_table'){
        var metalCl = '.open_cast_metal';
        var metalIn = 'open_cast_metal_';
        var gradeCl = '.open_cast_grade';
        var gradeIn = 'open_cast_grade_';
    } else if(tId == '#prod_cast_table'){
        var metalCl = '.prod_cast_metal';
        var metalIn = 'prod_cast_metal_';
        var gradeCl = '.prod_cast_grade';
        var gradeIn = 'prod_cast_grade_';
    } else {
        var metalCl = '.close_cast_metal';
        var metalIn = 'close_cast_metal_';
        var gradeCl = '.close_cast_grade';
        var gradeIn = 'close_cast_grade_';
    }

    for(var cnRw=1;cnRw <= rowCn; cnRw++){

        var metal = $(tId+' tbody tr:nth-child('+cnRw+') td:nth-child(1) '+metalCl);
        metal.attr('name',metalIn+cnRw);
        metal.attr('id',metalIn+cnRw);

        var grade = $(tId+' tbody tr:nth-child('+cnRw+') td:nth-child(2) '+gradeCl);
        grade.attr('name',gradeIn+cnRw);
        grade.attr('id',gradeIn+cnRw);

    }

}

function romStockOreCount(){

    $('#open_dev_metal_count').val($('#open_dev_table tbody tr').length);
    $('#prod_dev_metal_count').val($('#prod_dev_table tbody tr').length);
    $('#close_dev_metal_count').val($('#close_dev_table tbody tr').length);

    $('#open_stop_metal_count').val($('#open_stop_table tbody tr').length);
    $('#prod_stop_metal_count').val($('#prod_stop_table tbody tr').length);
    $('#close_stop_metal_count').val($('#close_stop_table tbody tr').length);

    $('#open_cast_metal_count').val($('#open_cast_table tbody tr').length);
    $('#prod_cast_metal_count').val($('#prod_cast_table tbody tr').length);
    $('#close_cast_metal_count').val($('#close_cast_table tbody tr').length);
    
}

function romStockOreATotal(devQty, stopQty, qtyTotal){

	var dev_qty = ($('#'+devQty).val() == '') ? 0 : $('#'+devQty).val();
	var stop_qty = ($('#'+stopQty).val() == '') ? 0 : $('#'+stopQty).val();
	$('#'+qtyTotal).text(parseFloat(dev_qty) + parseFloat(stop_qty));

}

function romStockOreAMcgTotal(tabUnd, tabOne, metalOne, gradeOne, tabTwo, metalTwo, gradeTwo, tabTotal, tabThree, metalThree, gradeThree){

	$('#'+tabUnd).html('');
	$('#'+tabTotal).html('');
	var tabOneRw = $('#'+tabOne+' tbody tr').length;
	var tabTwoRw = $('#'+tabTwo+' tbody tr').length;
	var tabThreeRw = $('#'+tabThree+' tbody tr').length;

	for(var i=1;i<=tabOneRw;i++){

		var metal = $('#'+tabOne+' tbody tr:nth-child('+i+') td:nth-child(1) .'+metalOne).val();
		var grade = $('#'+tabOne+' tbody tr:nth-child('+i+') td:nth-child(2) .'+gradeOne).val();

		var rowCon = (metal != '' && grade != '') ? "<tr><td>"+metal+"</td><td>"+grade+"</td></tr>" : "";
		$('#'+tabUnd).append(rowCon);
		$('#'+tabTotal).append(rowCon);

	}

	for(var n=1;n<=tabTwoRw;n++){

		var metal = $('#'+tabTwo+' tbody tr:nth-child('+n+') td:nth-child(1) .'+metalTwo).val();
		var grade = $('#'+tabTwo+' tbody tr:nth-child('+n+') td:nth-child(2) .'+gradeTwo).val();

		var rowCon = (metal != '' && grade != '') ? "<tr><td>"+metal+"</td><td>"+grade+"</td></tr>" : "";
		$('#'+tabUnd).append(rowCon);
		$('#'+tabTotal).append(rowCon);

	}

	for(var m=1;m<=tabThreeRw;m++){

		var metal = $('#'+tabThree+' tbody tr:nth-child('+m+') td:nth-child(1) .'+metalThree).val();
		var grade = $('#'+tabThree+' tbody tr:nth-child('+m+') td:nth-child(2) .'+gradeThree).val();

		var rowCon = (metal != '' && grade != '') ? "<tr><td>"+metal+"</td><td>"+grade+"</td></tr>" : "";
		$('#'+tabTotal).append(rowCon);

	}

}

function romStockOreTStock(){

	var a_open = $('#open_und_qty_total').html();
	var b_open = $('#f_open_cast_qty').val();
	var open = (a_open != '' && b_open != '') ? parseFloat(a_open) + parseFloat(b_open) : '';
	$('#f_open_tot_qty').val(open);
	var a_prod = $('#prod_und_qty_total').html();
	var b_prod = $('#f_prod_cast_qty').val();
	var prod = (a_prod != '' && b_prod != '') ? parseFloat(a_prod) + parseFloat(b_prod) : '';
	$('#f_prod_tot_qty').val(prod);
	var a_close = $('#close_und_qty_total').html();
	var b_close = $('#f_close_cast_qty').val();
	var close = (a_close != '' && b_close != '') ? parseFloat(a_close) + parseFloat(b_close) : '';
	$('#f_close_tot_qty').val(close);

}