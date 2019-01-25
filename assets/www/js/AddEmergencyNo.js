localStorage.setItem('address','https://www.manoramahealthcare.com/health_record_organizer/');

var address = localStorage.getItem('address');
var user_id = localStorage.getItem('u_id');


$(document).ready(function () {
	
	 $("#addemeno").hide();
	 $("#updateemeno").hide();
});


	function findNumber(){
		
		
		
		$.ajax({
              type: "POST",
			
			    url: address + "emergency_contact_flag.php",
				data: {user_id: user_id},
			    success: function(data) {
				  
				  var responce = JSON.parse(data);
				  
				  
				  
				  
				  var emergency_contact_id = responce.message.emergency_contact_id;
				 
				
				   if(responce.result==true){
					   
					   $("#addemeno").hide();
					   $("#updateemeno").show();
					   showNumber(emergency_contact_id);
				   }
				   else{
					     $("#addemeno").show();
					   $("#updateemeno").hide();
					   showNumber(emergency_contact_id);
					   
				   }
				  
				  
			  },
			   error		: function (msg) 
	                  				{
	                  				//   alert("Error");
	                  				}
	 });
	 
	}
	
	
	function showNumber(emergency_contact_id){
		
		
		$.ajax({
              type: "POST",
			
			    url: address + "emergency_contact_view.php",
				data: {emergency_contact_id: emergency_contact_id},
			    success: function(data) {
				  
				  var responce = JSON.parse(data);
				  
				
				  
				  var emergency_contact_id = responce.message.emergency_contact_id;
				   localStorage.setItem('emergency_contact_id',emergency_contact_id);
				 
				  var emergency_contact_primary = responce.message.emergency_contact_primary;
				   
				   var emergency_contact_secondary = responce.message.emergency_contact_secondary;
				    
				  
				  
				   $("#pri_no").val(responce.message.emergency_contact_primary);
				   $("#sec_no").val(responce.message.emergency_contact_secondary);
				  
				  
				  
				  
				  
			  },
			   error		: function (msg) 
	                  				{
	                  				//   alert("Error");
	                  				}
	 });
		
	}
	
	

	
	
	
	function AddEmergencyNo() {
		//alert()
		debugger;
		var pri_no = $("#pri_no").val();
		var sec_no = $("#sec_no").val();
		
		
		//alert(bdate);
		 if (pri_no == "") {
			
                alert("Please Enter Primary Mobile Number")
				setTimeout(function(){
                $("#pri_no").focus();
				},500)
                return false;
            }
			else if (sec_no == "") {
				
                alert("Please Enter Secondary Mobile Number")
				setTimeout(function(){
                  $("#sec_no").focus();
				},500)
                return false;
            }
			
			else {
				
				$.ajax({
				type: 'POST',
				url: address +"emergency_contact_save.php",
				
                data: {user_id : user_id,
				       emergency_contact_primary : pri_no,
					   emergency_contact_secondary : sec_no,
				     },
				success: function(data) {
				
				  alert("Numbers Added Successfully!!!");
				  ResetForm();
				   window.location.href="AddEmergencyNoList.html";
				}
				});	
				
				
		   }
    }
	
	function UpdateEmergencyNo(){
		
		
		var emergency_contact_id = localStorage.getItem('emergency_contact_id');
		var pri_no = $("#pri_no").val();
		var sec_no = $("#sec_no").val();
		
		//alert(bdate);
		 if (pri_no == "") {
			
                alert("Please Enter Primary Mobile Number")
				setTimeout(function(){
                $("#pri_no").focus();
				},500)
                return false;
            }
			else if (sec_no == "") {
				
                alert("Please Enter Secondary Mobile Number")
				setTimeout(function(){
                  $("#sec_no").focus();
				},500)
                return false;
            }
			
			else {
				
				$.ajax({
				type: 'POST',
				url: address +"emergency_contact_update.php",
				
		
                data: {emergency_contact_id : emergency_contact_id,
				       emergency_contact_primary : pri_no,
					   emergency_contact_secondary : sec_no,
				     },
				success: function(data) {
				console.log(data);
				  alert("Numbers Updated Successfully!!!");
				  ResetForm();
				  window.location.href="AddEmergencyNoList.html";
				},
				
				error		: function(response)
							  {   
									console.log(response);                         
							  }
				});	
				
				
		   }
	}
	
	
 function ResetForm() {
	    $('#pri_no').val('');
		$('#sec_no').val('');
	
}