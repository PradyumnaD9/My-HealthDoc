localStorage.setItem('address','https://www.manoramahealthcare.com/health_record_organizer/');

var address = localStorage.getItem('address');
var user_id = localStorage.getItem('u_id');
var insurance_id = localStorage.getItem('insurance_id');

console.log(user_id);
var flag = localStorage.getItem('flag');



$(document).ready(function () {

  $("#addinsurance").hide();
  $("#updateinsurance").hide();
  
 
   
  if(flag == 0)
{
	$("#updateinsurance").show();
	$("#addinsurance").hide();
	showinsuranceDetails(insurance_id);
	
}
else if(flag == 1){
	$("#addinsurance").show();
	$("#updateinsurance").hide();
	AddInsuranceDetails();
}

  
});



function AddInsuranceDetails(){
		
		document.getElementById("user_id").value = user_id;
		
		var insurance_company = $("#insurance_company").val();
		var insurance_scheme = $("#insurance_scheme").val();
		var insurance_premium = $("#insurance_premium").val()
		var insurance_scheme_start_date = $("#insurance_scheme_start_date").val();
		var insurance_scheme_start_date = $("#insurance_scheme_start_date").val();
		var insurance_no = $("#insurance_no").val();
		var insurance_department = $("#insurance_department").val();
	
		if(insurance_company == "") {
                alert("Please Enter Client Name")
				setTimeout(function(){
					$("#insurance_company").focus();
					
				},500)
                
                return false;
            }
			else if(insurance_scheme == "") {
                alert("Please Enter Scheme Name")
				setTimeout(function(){
					$("#insurance_scheme").focus();
					
				},500)
                
                return false;
            }
			else if(insurance_premium == ""){
				 alert("Please Enter insurance_premium")
				 setTimeout(function(){
				  $("#insurance_premium").focus();
				  },500)
                return false;
			}
			else if(insurance_scheme_start_date == ""){
				 alert("Please Select Scheme Start Date")
				 setTimeout(function(){
				  $("#insurance_scheme_start_date").focus();
				  },500)
                return false;
			}
			else if(insurance_scheme_start_date == ""){
				 alert("Please Select Scheme Expiry Date")
				 setTimeout(function(){
				  $("#insurance_scheme_start_date").focus();
				  },500)
                return false;
			}
			else if (insurance_no == "") {
                alert("Please Enter Insurance No")
				setTimeout(function(){
                $("#insurance_no").focus();
				},500)
                return false;
            }
			else{
			
		
				var data = $("#Insurance-form").serialize();
				
				$.ajax({
						type: "POST",
						url: address + "insurance_save.php",
						data: data,
						success: function(data) {
						  console.log(data);
						  alert("Record Added Successfully!!!");
						  ResetForm();
						  window.location.href = 'InsuranceList.html';
						},
					   error		: function (msg) 
											{
											//   alert("Error");
											}
				  });
		  
		  }
	 
	}
	
	 function ResetForm() {
	    $('#insurance_company').val('');
		$('#insurance_scheme').val('');
		$('#insurance_premium').val('');
		$('#insurance_scheme_start_date').val('');
		$('#insurance_scheme_expiry_date').val('');
		$('#insurance_no').val('');
		$('#insurance_department').val('');
			
}

function showinsuranceDetails(a){
	console.log(a);
	
	$.ajax({
						type: "POST",
						url: address + "insurance_view.php",
						data: {insurance_id : a},
						success: function(data) {
						 
						  
						   var responce = JSON.parse(data);
				           console.log(responce);
						    $('#insurance_company').val(responce.message.insurance_company);
							$('#insurance_scheme').val(responce.message.insurance_scheme);
							$('#insurance_premium').val(responce.message.insurance_premium);
							$('#insurance_scheme_start_date').val(responce.message.insurance_scheme_start_date);
							$('#insurance_scheme_expiry_date').val(responce.message.insurance_scheme_expiry_date);
							$('#insurance_no').val(responce.message.insurance_no);
							$('#insurance_department').val(responce.message.insurance_department);
							
						},
					   error		: function (msg) 
											{
											//   alert("Error");
											}
				  });
				  
				  
				  
				  
	 $("#updateInsuranceDetails").click(function () {	
	   
	      
			  updateInsuranceDetails(a);
        });
		
	
}


function updateInsuranceDetails(a){
	
	    console.log(a);
	    document.getElementById("insurance_id").value = a;
		
		var insurance_company = $("#insurance_company").val();
		var insurance_scheme = $("#insurance_scheme").val();
		var insurance_premium = $("#insurance_premium").val()
		var insurance_scheme_start_date = $("#insurance_scheme_start_date").val();
		var insurance_scheme_start_date = $("#insurance_scheme_start_date").val();
		var insurance_no = $("#insurance_no").val();
		var insurance_department = $("#insurance_department").val();
	
		if(insurance_company == "") {
                alert("Please Enter Client Name")
				setTimeout(function(){
					$("#insurance_company").focus();
					
				},500)
                
                return false;
            }
			else if(insurance_scheme == "") {
                alert("Please Enter Scheme Name")
				setTimeout(function(){
					$("#insurance_scheme").focus();
					
				},500)
                
                return false;
            }
			else if(insurance_premium == ""){
				 alert("Please Enter insurance_premium")
				 setTimeout(function(){
				  $("#insurance_premium").focus();
				  },500)
                return false;
			}
			else if(insurance_scheme_start_date == ""){
				 alert("Please Select Scheme Start Date")
				 setTimeout(function(){
				  $("#insurance_scheme_start_date").focus();
				  },500)
                return false;
			}
			else if(insurance_scheme_start_date == ""){
				 alert("Please Select Scheme Expiry Date")
				 setTimeout(function(){
				  $("#insurance_scheme_start_date").focus();
				  },500)
                return false;
			}
			else if (insurance_no == "") {
                alert("Please Enter Insurance No")
				setTimeout(function(){
                $("#insurance_no").focus();
				},500)
                return false;
            }
			else if (insurance_department == "") {
                alert("Please Enter Selected Departments")
				setTimeout(function(){
                $("#insurance_department").focus();
				},500)
                return false;
            }
		else{
			debugger;
		
				var data = $("#Insurance-form").serialize();
				
				$.ajax({
						type: "POST",
						url: address + "insurance_update.php",
						data: data,
						success: function(data) {
						  console.log(data);
						  alert("Record Updated Successfully!!!");
						  ResetForm();
						  window.location.href = 'InsuranceList.html';
						},
					   error		: function (msg) 
											{
											//   alert("Error");
											}
				  });
		  
		  }
	 
	
}