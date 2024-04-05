jQuery(document).ready(function () {

    jQuery('.fax_no_update').click(function () {
        var value = jQuery.trim($("#f_fax_no").val());
        var mineCode = $('#mine_code').val();
        jQuery('.fax_ajaxloader').fadeIn();
        jQuery('.fax_no_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/F/' + value, function () {
            jQuery('.fax_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.phone_no_update').click(function () {
        var value = jQuery.trim($(" #f_phone_no").val());
        var mineCode = $('#mine_code').val();
        jQuery('.phone_ajaxloader').fadeIn();
        jQuery('.phone_no_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/P/' + value, function () {
            jQuery('.phone_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.mobile_no_update').click(function () {
        var value = jQuery.trim($("#f_mobile_no").val());
        var mineCode = $('#mine_code').val();
        jQuery('.mobile_ajaxloader').fadeIn();
        jQuery('.mobile_no_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/M/' + value, function () {
            jQuery('.mobile_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.email_update').click(function () {
        var value = jQuery.trim($("#f_email").val());
        var mineCode = $('#mine_code').val();
        jQuery('.email_ajaxloader').fadeIn();
        jQuery('.email_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/E/' + value, function () {
            jQuery('.email_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.a_fax_no_update').click(function () {
        var value = jQuery.trim($("#f_a_fax_no").val());
        var mineCode = $('#mine_code').val();
        jQuery('.a_fax_ajaxloader').fadeIn();
        jQuery('.a_fax_no_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/FA/' + value, function () {
            jQuery('.a_fax_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.a_phone_no_update').click(function () {
        var value = jQuery.trim($("#f_a_phone_no").val());
        var mineCode = $('#mine_code').val();
        jQuery('.a_phone_ajaxloader').fadeIn();
        jQuery('.a_phone_no_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/PA/' + value, function () {
            jQuery('.a_phone_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.a_mobile_no_update').click(function () {
        var value = jQuery.trim($("#f_a_mobile_no").val());
        var mineCode = $('#mine_code').val();
        jQuery('.a_mobile_ajaxloader').fadeIn();
        jQuery('.a_mobile_no_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/MA/' + value, function () {
            jQuery('.a_mobile_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });

    jQuery('.a_email_update').click(function () {
        var value = jQuery.trim($("#f_a_email").val());
        var mineCode = $('#mine_code').val();
        jQuery('.a_email_ajaxloader').fadeIn();
        jQuery('.a_email_loder').hide().load('../monthly/mineUpdates/MC/'+mineCode+'/EA/' + value, function () {
            jQuery('.a_email_ajaxloader').hide();
            jQuery(this).fadeIn();
        });
    });


});