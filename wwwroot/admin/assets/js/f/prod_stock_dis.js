
$(document).ready(function(){

    $(document).on('change','#frmProdStockDis .tot_no', function(){

        var returnFormStatus = true;
        var totNoId = $(this).attr('id');
        var totNoArr = totNoId.split('_');
        var mainEl = totNoArr[0]+'_'+totNoArr[1];
        
        var prodOc = $('#frmProdStockDis #'+mainEl+'_prod_oc_no').val();
        var prodUg = $('#frmProdStockDis #'+mainEl+'_prod_ug_no').val();
        var prodTot = $(this).val();
        prodTot = parseInt(prodTot);
        var prodSum = parseInt(prodOc) + parseInt(prodUg);

        if(prodTot != prodSum){
            showAlrt("Production total of no. of stones doesn't match with the calculated total");
            returnFormStatus = false;
            $(this).val('');
        }

        return returnFormStatus;

    });
    
    $(document).on('change','#frmProdStockDis .tot_no_qty', function(){

        var returnFormStatus = true;
        var totNoId = $(this).attr('id');
        var totNoArr = totNoId.split('_');
        var mainEl = totNoArr[0]+'_'+totNoArr[1];
        
        var prodOc = $('#frmProdStockDis #'+mainEl+'_prod_oc_qty').val();
        var prodUg = $('#frmProdStockDis #'+mainEl+'_prod_ug_qty').val();
        var prodTot = $(this).val();
        prodTot = parseFloat(prodTot).toFixed(3);
        var prodSum = parseFloat(prodOc) + parseFloat(prodUg);
        prodSum = (prodSum).toFixed(3);

        if(prodTot != prodSum){
            showAlrt("Production total of no. of stones doesn't match with the calculated total");
            returnFormStatus = false;
            $(this).val('');
        }

        return returnFormStatus;

    });
    
    $(document).on('change','#frmProdStockDis .clos_no', function(){

        var returnFormStatus = true;
        var totNoId = $(this).attr('id');
        var totNoArr = totNoId.split('_');
        var mainEl = totNoArr[0]+'_'+totNoArr[1];
        
        var opnTot = $('#frmProdStockDis #'+mainEl+'_open_tot_no').val();
        var prodTot = $('#frmProdStockDis #'+mainEl+'_prod_tot_no').val();
        var despTot = $('#frmProdStockDis #'+mainEl+'_desp_tot_no').val();
        var closTot = $(this).val();
        closTot = parseInt(closTot);
        var prodSum = parseInt(opnTot) + parseInt(prodTot) - parseInt(despTot);

        if(closTot != prodSum){
            showAlrt("Closing no. of stones doesn't match with the calculated total.");
            returnFormStatus = false;
            $(this).val('');
        }

        return returnFormStatus;

    });
    
    $(document).on('change','#frmProdStockDis .clos_no_qty', function(){

        var returnFormStatus = true;
        var totNoId = $(this).attr('id');
        var totNoArr = totNoId.split('_');
        var mainEl = totNoArr[0]+'_'+totNoArr[1];
        
        var opnTot = $('#frmProdStockDis #'+mainEl+'_open_tot_qty').val();
        var prodTot = $('#frmProdStockDis #'+mainEl+'_prod_tot_qty').val();
        var despTot = $('#frmProdStockDis #'+mainEl+'_desp_tot_qty').val();
        var closTot = $(this).val();
        closTot = parseInt(closTot).toFixed(3);
        var prodSum = parseInt(opnTot) + parseInt(prodTot) - parseInt(despTot);
        prodSum = (prodSum).toFixed(3);

        if(closTot != prodSum){
            showAlrt("Closing no. of stones doesn't match with the calculated total.");
            returnFormStatus = false;
            $(this).val('');
        }

        return returnFormStatus;

    });

    $(document).on('submit','#frmProdStockDis',function(){

        $('#frmProdStockDis').find('select').not(':hidden').not('select[disabled]').removeClass('is-invalid');
        $('#frmProdStockDis').find('input').not(':hidden').not('select[disabled]').removeClass('is-invalid');
        var returnFormStatus = true;

        var emptyStatus = formEmptyStatus('frmProdStockDis');

        // $("#frmProDiStocksF7").submit(function(event){
        var qtyArr = new Array();
        var exMinePriceArr = new Array();
        var errorFlag = 0; // NO ERROR
        
        // qtyArr = ['#F_Rough_OPEN_TOT_QTY', '#F_Polished_OPEN_TOT_QTY', '#F_Industrial_OPEN_TOT_QTY', '#F_Other_OPEN_TOT_QTY'];
		qtyArr = ['#f_rough_prod_tot_qty', '#f_polished_prod_tot_qty', '#f_industrial_prod_tot_qty', '#f_other_prod_tot_qty'];
        exMinePriceArr = ['#f_rough_pmv_oc', '#f_polished_pmv_oc', '#f_industrial_pmv_oc', '#f_other_pmv_oc'];
    
        $.each(qtyArr, function(index, value){
            var exMinePriceForCorresQty = exMinePriceArr[index];
            var qtyValue = $(value).val();
            var exMineValue = $(exMinePriceForCorresQty).val();
            if(qtyValue > 0)
                if(exMineValue == 0 || exMineValue == '' || isNaN(exMineValue)){
                    errorFlag = 1;
                }
        });
        if(errorFlag == 1){
            // alert("Ex-Mine price should be greater then 0, If the Qty is Greater than 0. Kindly correct before proceeding.");
            showAlrt("Ex-Mine price should be greater then 0, If the Qty is Greater than 0. Kindly correct before proceeding.");
            // event.preventDefault();
            returnFormStatus = false;
        }
        
        if(emptyStatus == 'invalid'){ returnFormStatus = false; }
        
        return returnFormStatus;

    });

});