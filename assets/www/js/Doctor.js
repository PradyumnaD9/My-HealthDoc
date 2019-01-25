


//var u_id =  2;
function viewdoc(){
	
	var doc_id = localStorage.getItem('doc_id');
		//alert(doc_id);
	var data = $("#doctor-form").serialize();
	$("#save").css('display','none');
	$("#up").css('display','block');
	$(".screen-title").html('Update Consulting Doctor');
	$.ajax({
              type: "POST",
              data: '&consulting_doctor_id=' + doc_id  ,
              url:"https://www.manoramahealthcare.com/health_record_organizer/consulting_doctor_view.php",
              success: function(data) {
                  //console.log(data);	
				  //debugger;
				   //alert("username is "+unm+"password is   "+psd);
				  //window.location.href = 'index.html';
				  var parseJson = JSON.parse(data);
				  var docname= parseJson.message.consulting_doctor_name;
				  var hospname= parseJson.message.consulting_doctor_hospital_name;
				  var docphone= parseJson.message.consulting_doctor_phone;
				  var docmob= parseJson.message.consulting_doctor_mobile;
				  var docemail= parseJson.message.consulting_doctor_email;
				  var docspecial= parseJson.message.consulting_doctor_specialty;
				  var docadd= parseJson.message.consulting_doctor_address;
				 
					if(docphone == undefined){

					docphone = "-";
					}
					if(docemail == undefined){

					docemail = "-";
					}
				 
				 $('#consulting_doctor_name').val(docname);
				 $('#consulting_doctor_hospital_name').val(hospname);
				 $('#consulting_doctor_phone').val(docphone);
				 $('#consulting_doctor_mobile').val(docmob);
				 $('#consulting_doctor_email').val(docemail);
				 $('#consulting_doctor_specialty').val(docspecial);
			     $('#consulting_doctor_address').val(docadd);
	
	  }
        });
	
}

	function UpDoctorForm(){
		
		var uname = $("#consulting_doctor_name").val();
		var hospname = $("#consulting_doctor_hospital_name").val();
		var phone = $("#consulting_doctor_phone").val()
		var mobile = $("#consulting_doctor_mobile").val();
		var email = $("#consulting_doctor_email").val();
		var speciality = $("#consulting_doctor_specialty").val();
		var docaddress = $("#consulting_doctor_address").val();		
		
		
		//alert(bdate);
		if(uname == "") {
                alert("Please Enter Doctor Name")
				setTimeout(function(){
					$("#consulting_doctor_name").focus();
					
				},500)
                
                return false;
            }
			else if(hospname == ""){
				 alert("Please Enter Hospital Name")
				 setTimeout(function(){
				  $("#consulting_doctor_hospital_name").focus();
				  },500)
                return false;
			}
			else if (mobile == "") {
                alert("Please Enter Mobile Number")
				setTimeout(function(){
                $("#consulting_doctor_mobile").focus();
				},500)
                return false;
            }
			else if(speciality == ""){
				 alert("Please Enter Speciality")
				 setTimeout(function(){
				  $("#consulting_doctor_specialty").focus();
				  },500)
                return false;
			}
			else if(docaddress == ""){
				 alert("Please Enter Address")
				 setTimeout(function(){
				  $("#consulting_doctor_address").focus();
				  },500)
                return false;
			}
			else {
				
	var data = $("#doctor-form").serialize();
	console.log(data);
	$.ajax({
              type: "POST",
			  url: "https://www.manoramahealthcare.com/health_record_organizer/consulting_doctor_update.php",
              data: data,		    
              success: function(data) {
				  console.log(data);
				  alert("Doctor Saved Successfully!!!");
				  window.location.href="DoctorList.html";
				ResetForm();	
			  }
	 });	
				
			}	
		
	}

	function DoctorForm() {
		//alert()
		var uname = $("#consulting_doctor_name").val();
		var hospname = $("#consulting_doctor_hospital_name").val();
		var phone = $("#consulting_doctor_phone").val()
		var mobile = $("#consulting_doctor_mobile").val();
		var email = $("#consulting_doctor_email").val();
		var speciality = $("#consulting_doctor_specialty").val();
		var docaddress = $("#consulting_doctor_address").val();		
		
		
		//alert(bdate);
		if(uname == "") {
                alert("Please Enter Doctor Name")
				setTimeout(function(){
					$("#consulting_doctor_name").focus();
					
				},500)
                
                return false;
            }
			else if(hospname == ""){
				 alert("Please Enter Hospital Name")
				 setTimeout(function(){
				  $("#consulting_doctor_hospital_name").focus();
				  },500)
                return false;
			}
			else if (mobile == "") {
                alert("Please Enter Mobile Number")
				setTimeout(function(){
                $("#consulting_doctor_mobile").focus();
				},500)
                return false;
            }
			else if(speciality == ""){
				 alert("Please Enter Speciality")
				 setTimeout(function(){
				  $("#consulting_doctor_specialty").focus();
				  },500)
                return false;
			}
			else if(docaddress == ""){
				 alert("Please Enter Address")
				 setTimeout(function(){
				  $("#consulting_doctor_address").focus();
				  },500)
                return false;
			}
			else {
				
	var data = $("#doctor-form").serialize();
	console.log(data);
	$.ajax({
              type: "POST",
			  url: "https://www.manoramahealthcare.com/health_record_organizer/consulting_doctor_save.php",
              data: data,		    
              success: function(data) {
				  console.log(data);
				  alert("Doctor Saved Successfully!!!");
				  window.location.href="DoctorList.html";
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
	   
        $('#consulting_doctor_name').val('');
        $('#consulting_doctor_hospital_name').val('');
		$('#consulting_doctor_phone').val('');
		$('#consulting_doctor_mobile').val('');
		$('#consulting_doctor_email').val('');
        $('#consulting_doctor_specialty').val('');
		$('#consulting_doctor_address').val('');
		
     }