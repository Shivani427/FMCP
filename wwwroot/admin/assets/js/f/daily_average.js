
$(document).ready(function(){

	$('#frmDailyAverage').ready(function(){

		var returnMonthTotalDays = $('#return_month_total_days').val();
		custom_validations.openWageCalculation(returnMonthTotalDays);
		custom_validations.belowWageCalculation(returnMonthTotalDays);
		custom_validations.aboveWageCalculation(returnMonthTotalDays);
		custom_validations.totalSalary(returnMonthTotalDays);
		custom_validations.dailyEmploymentValidations();
		
	});

});

jQuery(document).ready(function () {
	var openMaleDirect = jQuery.trim($("#f_open_male_avg_direct").val());
	var belowMaleDirect = jQuery.trim($("#f_below_male_avg_direct").val());
	var aboveMaleDirect = jQuery.trim($("#f_above_male_avg_direct").val());

	var openFemaleDirect = jQuery.trim($("#f_open_female_avg_direct").val());
	var beloFemMaleDirect = jQuery.trim($("#f_below_female_avg_direct").val());
	var aboveFemaleDirect = jQuery.trim($("#f_above_female_avg_direct").val());

	var openMaleContract = jQuery.trim($("#f_open_male_avg_contract").val());
	var belowMaleContract = jQuery.trim($("#f_below_male_avg_contract").val());
	var aboveMaleContract = jQuery.trim($("#f_above_male_avg_contract").val());

	var openFemaleDirect = jQuery.trim($("#f_open_female_avg_contract").val());
	var belowFemaleDirect = jQuery.trim($("#f_below_female_avg_contract").val());
	var aboveFemaleDirect = jQuery.trim($("#f_above_female_avg_contract").val());

	var openTotalDirect = jQuery.trim($("#f_open_wage_direct").val());
	var openTotalContract = jQuery.trim($("#f_below_wage_direct").val());
	var belowTotalDirect = jQuery.trim($("#f_above_wage_direct").val());
	var belowTotalContract = jQuery.trim($("#f_open_wage_contract").val());
	var aboveTotalDirect = jQuery.trim($("#f_below_wage_contract").val());
	var aboveTotalContract = jQuery.trim($("#f_above_wage_contract").val());
});