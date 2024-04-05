
var ajaxfunction = {
	
	getMonthArr: function () {
		
		$('#f_year').change(function(){
			
			var year = $(this).val();
			
			$.ajax({				
					type:"POST",
					url:"../ajax/get-month-arr",
					data:{year:year},
					cache:false,
					
					beforeSend: function (xhr) { // Add this line
						xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
					},
					success : function(response)
					{	
						$("#f_month").find('option').remove();
						$("#f_month").append(response);						
					}
			});			
		});	
	},
	
	getRegionArr: function () {
		
		$('#f_zone').change(function(){
			
			var zone = $(this).val();
			
			$.ajax({				
					type:"POST",
					url:"../ajax/get-regions-arr",
					data:{zone:zone},
					cache:false,
					
					beforeSend: function (xhr) { // Add this line
						xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
					},
					success : function(response)
					{	
						$("#f_region").find('option').remove();
						$("#f_state").find('option').remove();
						$("#f_district").find('option').remove();
						$("#f_state").append("<option value=''>Select</option>");
						$("#f_district").append("<option value=''>Select</option>");
						$("#f_region").append(response);						
					}
			});			
		});	
	},
	
	getStatesArr: function () {
		
		$('#f_region').change(function(){
			
			var region = $(this).val();
			
			$.ajax({				
					type:"POST",
					url:"../ajax/get-states-arr",
					data:{region:region},
					cache:false,
					
					beforeSend: function (xhr) { // Add this line
						xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
					},
					success : function(response)
					{	
						$("#f_state").find('option').remove();
						$("#f_district").find('option').remove();
						$("#f_district").append("<option value=''>Select</option>");
						$("#f_state").append(response);						
					}
			});			
		});	
	},
	
	
	getDistrictsArr: function () {
		
		$('#f_state').change(function(){
			
			var state = $(this).val();
			
			$.ajax({				
					type:"POST",
					url:"../ajax/get-districts-arr",
					data:{state:state},
					cache:false,
					
					beforeSend: function (xhr) { // Add this line
						xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
					},
					success : function(response)
					{	
						$("#f_district").find('option').remove();
						$("#f_district").append(response);						
					}
			});			
		});	
	},


	getParentUsersArr: function () {

		$('#role_id').change(function(){

			$("#zoneregionbox").hide();	

			var role_id = $(this).val();

			var roles = ['2','3','5','6','8','9'];	
		
			if( $.inArray(role_id, roles) !== -1 ){

				$.ajax({				
					type:"POST",
					url:"../ajax/get-parentuser-arr",
					data:{roleid:role_id},
					cache:false,
					
					beforeSend: function (xhr) { // Add this line
						xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
					},
					success : function(response)
					{	
						$("#parentbox").show();	
						$("#parentinput").find('option').remove();
						$("#parentinput").append(response);						
					}
				});

			}else{
				$("#parentinput").find('option').remove();
				$("#parentbox").hide();
			}

		});	

	},

	getZoneRegionArr: function(){
		
		var roles = ['5','6'];	

		$('#parentinput').change(function(){

			var role_id = $('#role_id').val();

			var parentinput = $(this).val();

			if( $.inArray(role_id, roles) !== -1 ){	

				$.ajax({				
					type:"POST",
					url:"../ajax/get-zone-region-arr",
					data:{roleid:role_id,parentid:parentinput},
					cache:false,
					
					beforeSend: function (xhr) { // Add this line
						xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
					},
					success : function(response)
					{	
						$("#zoneregionlabel").empty();
						if(role_id==5){
							$("#zoneregionlabel").append('Zone Name <span class="text-danger">*</span>');
						}else{
							$("#zoneregionlabel").append('Region Name <span class="text-danger">*</span>');
						}

						$("#zoneregionbox").show();	
						$("#zoneregionid").find('option').remove();
						$("#zoneregionid").append(response);						
					}
				});
			}	

		});
		
	},


	genLevel2UsrPass: function()
	{
		
		$('#level2user').on('click','tbody tr .genbtn', function(){
			
			var btntext = $(this).text().toLowerCase();
			var useremail = $(this).closest("tr").find('input[name="email"]').val();
			var userid = $(this).closest("tr").find('input[name="userid"]').val();
			var level2usrid = $(this).closest("tr").find('input[name="level2usrid"]').val();
			var level2type = $(this).closest("tr").find('input[name="level2type"]').val();

			$.ajax({
				type:"POST",
				url : "../ajax/gen-level3-user-pass",
				data : {	level2usrid:level2usrid,
					  		userid:userid,
							useremail:useremail,
							level2type:level2type},
				cache:false,

				beforeSend: function (xhr) { // Add this line
					xhr.setRequestHeader('X-CSRF-Token', $('[name="_csrfToken"]').val());
				},

				success : function(response)
				{
					if(response == 1){
						alert('Password successfully '+btntext+'. Kindly check your email '+useremail+' for reset the password.');
						location.reload();	
						
					}
				}
			});
						
		});

	}

	

}