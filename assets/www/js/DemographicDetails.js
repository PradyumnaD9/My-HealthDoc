localStorage.setItem('address','https://www.manoramahealthcare.com/health_record_organizer/');

var address = localStorage.getItem('address');
var user_id = localStorage.getItem('u_id');


console.log(user_id);


	function showDemographic(){
		
		onLoad();
		document.getElementById("user_id").value = user_id;
		
		$.ajax({
              type: "POST",
			
			    url: address + "user_demographic_detail_view.php",
				data: {user_id: user_id},
			    success: function(data) {
				  console.log(data);
				  var responce = JSON.parse(data);
				  
				  
				//  {"user_id":"1","user_name":"test","user_mobile":"","user_email":null,"user_dob":"2019-01-23","user_age":null,"user_gender":"M","user_blood_group":"AB+","user_weight":"90","user_height":"177CM","user_occupation":"TEST","user_allergies":"TEST","user_medical_history":"TEST","user_surgical_history":"TEST"}}
				  
				  
		            $("#user_name").val(responce.message.user_name);
				    $("#user_dob").val(responce.message.user_dob);
					$("#user_gender").val(responce.message.user_gender)
					$("#user_blood_group").val(responce.message.user_blood_group);
					$("#user_mobile").val(responce.message.user_mobile);
					$("#user_email").val(responce.message.user_email);
					$("#user_weight").val(responce.message.user_weight);
					$("#user_height").val(responce.message.user_height);
					$("#user_occupation").val(responce.message.user_occupation);
					$("#user_allergies").val(responce.message.user_allergies);
					$("#user_medical_history").val(responce.message.user_medical_history);
					
					$("#user_age").val(responce.message.user_age);
					
					
				  
				  
			  },
			   error		: function (msg) 
	                  				{
	                  				//   alert("Error");
	                  				}
	 });
	 
	}
	
	function ValidateForm() {
		//alert()
		debugger;
		var mobile = $("#user_mobile").val();
		var email = $("#user_email").val();
		var occupat = $("#user_occupation").val();
		
		
		
		//alert(bdate);
		 if (mobile == "") {
			 
			 if(mobile.length!=10){
					 alert("Please Enter 10 Digit Number");
					 return false;
				}
				else{
			 console.log("mobile");
                alert("Please Enter Mobile Number")
				setTimeout(function(){
                $("#user_mobile").focus();
				},500)
                return false;
            }
		 }
			else if (occupat == "") {
				 console.log("occupat");
                alert("Please Enter Occupation")
				setTimeout(function(){
                  $("#user_occupation").focus();
				},500)
                return false;
            }
			else if(!ValidateEmail(email)) {
                
				
					alert("Invalid Email Address!");
					setTimeout(function(){
					$("#user_email").focus();
					},500)
					return false;
				   
			}
			else {
				
				
		        var data = $("#demographic-form").serialize();
				console.log(data);
	

				$.ajax({
				type: "POST",
				url: address + "user_demographic_detail_update.php",
                data: data,		    
				success: function(data) {
				console.log(data);
				
				}
				});	
				alert("Record Updated Successfully!!!");
				showDemographic();	
		   }
    }
	

	
	function ValidateEmail(email) {
        // Validate email format
		if(email!="")
		{
		 var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
         return expr.test(email);
		}
		else{
			return true;
		}
    };
	
	 function ResetForm() {
	    $('#user_mobile').val('');
		$('#user_height').val('');
		$('#user_weight').val('');
		$('#user_allergies').val('');
		$('#user_medical_history').val('');
		$('#user_occupation').val('');
		
}

  function onLoad()
     {
        document.addEventListener("deviceready", onDeviceReady, false);
     }
     function onDeviceReady() 
     {
      document.addEventListener("backbutton", onBackKeyDown, false);
     }
     function onBackKeyDown()
     {
         window.location.href = 'Menu.html';
    }
	