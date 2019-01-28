localStorage.setItem('address','https://www.manoramahealthcare.com/health_record_organizer/');

var address = localStorage.getItem('address');

	function ValidateForm() {
		//alert()
		var uname = $("#user_name").val();
		var bdate = $("#user_dob").val();
		var gender = $("#user_gender").val()
		var bloodgroup = $("#user_blood_group").val();
		var mobile = $("#user_mobile").val();
		var email = $("#user_email").val();
		var weight = $("#user_weight").val();
		var height = $("#user_height").val();
		var occupat = $("#user_occupation").val();
		var allergi = $("#user_allergies").val();
		var mhistory = $("#user_medical_history").val();
		var shistory = $("#user_surgical_history").val();
		var loginname = $("#user_username").val();	
		var Password = $("#user_password").val();
		var cpass = $("#cpass").val();
		
		//alert(bdate);
		if(uname == "") {
                alert("Please Enter Your Name")
				setTimeout(function(){
					$("#user_name").focus();
					
				},500)
                
                return false;
            }
			else if(bdate == ""){
				 alert("Please Select DOB")
				 setTimeout(function(){
				  $("#user_dob").focus();
				  },500)
                return false;
			}
			else if(gender == ""){
				 alert("Please Select Gender")
				 setTimeout(function(){
				  $("#user_gender").focus();
				  },500)
                return false;
			}
			else if(bloodgroup == ""){
				 alert("Please Select Bloodgroup")
				 setTimeout(function(){
				  $("#user_blood_group").focus();
				  },500)
                return false;
			}
			else if (mobile == "") {
				
				if(mobile.length!=10){
					 alert("Please Enter 10 Digit Number");
					 return false;
				}
				else{
					
				
                alert("Please Enter Mobile Number")
				setTimeout(function(){
                $("#user_mobile").focus();
				},500)
                return false;
				}
            }
			else if (occupat == "") {
                alert("Please Enter Occupation")
				setTimeout(function(){
                  $("#user_occupation").focus();
				},500)
                return false;
            }else if(loginname == ""){
				alert("Please Enter Username")
				setTimeout(function(){
                $("#user_username").focus();
				},500)
				
				return false;
			}
			else if(Password == ""){
				alert("Please Enter Password")
				setTimeout(function(){
                $("#user_password").focus();
				},500)
                return false;
			}	
			else if(cpass == ""){
				alert("Please Enter Confirm Password")
				setTimeout(function(){
                $("#cpass").focus();
				},500)
                return false;
			}
			else if(Password != cpass) {
					   alert("Passwords do not match.");
				       return false;
			}
			else if(email!="") {
               
					if(!ValidateEmail(email)) {
					alert("Invalid Email Address!");
					setTimeout(function(){
					$("#user_email").focus();
					},500)
					return false;
				   }
			}
			else {
				
		var data = $("#register-form").serialize();
	
	//console.log(data);
	
	$.ajax({
              type: "POST",
			  url: address + "user_registration.php",
              data: data,		    
              success: function(data) {
				  console.log(data);
				  alert("User Registered Successfully!!!");	
					window.location.href="Login.html";				  
				  ResetForm();	
			  }
	 });	
				
			}
			
    }
	
	function ValidateEmail(email) {
        // Validate email format
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };
	
	 function ResetForm() {
	   
        $('#user_name').val('');
        $('#user_username').val('');
		$('#user_dob').val('');
		$('#user_gender').val('');
		$('#user_email').val('');
        $('#user_mobile').val('');
		$('#user_password').val('');
		$('#cpass').val('');
		$('#user_height').val('');
		$('#user_weight').val('');
		$('#user_allergies').val('');
		$('#user_medical_history').val('');
		$('#user_occupation').val('');
		$('#user_blood_group').val('');
		
     }