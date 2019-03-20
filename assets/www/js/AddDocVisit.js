


//var u_id =  2;
function viewdoc(){
	
	var doc_id = localStorage.getItem('doc_id');
	var u_id =  localStorage.getItem('u_id');
	var data = $("#doctor-form").serialize();
	

	$.ajax({
              type: "POST",
			  url:"https://www.manoramahealthcare.com/health_record_organizer/consulting_doctor_list.php",
              data: 'user_id=' + u_id,        
              success: function(data) {
                 
                                     var parseJson = JSON.parse(data);
									 var option="";
                                   if(parseJson.result == false){
									   option += '<option value="">Please Add Consulting Doctor</option>';
									   
								   }  else{
									 //alert(parseJson[1].role_name)
									  option += '<option value="" >--Select--</option>';
									 for(var i =0;i < parseJson.message.length;i++)
									 {
										
option += '<option value="'+ parseJson.message[i].consulting_doctor_id + '"data-value="'+ parseJson.message[i].consulting_doctor_name +'"class="btnEmp">'+parseJson.message[i].consulting_doctor_name +'</option>';
										  
									 }
							}
								$('#visit_doctor_id').append(option);
			  }
        });
	
}

	function DoctorVisitForm() {
		//alert()
		var u_id =  localStorage.getItem('u_id');
		var docname = $( "#visit_doctor_id option:selected" ).val();
		var visitdate = $("#visit_datetime").val();
		var diagnosis = $("#visit_diagnosis_details").val();
		var medication = $("#visit_medication").val()
		var ins = document.getElementById('file').files.length;										
		var followdate = $("#visit_followup_date").val();
		var ext = $('#file').val().split('.').pop().toLowerCase();
		
		
		//alert(docname);
		if(docname == "") {
                alert("Please Select Doctor")
				setTimeout(function(){
					$("#visit_doctor_id").focus();
					
				},500)
                
                return false;
            }
			else if(visitdate == ""){
				 alert("Please Select Date")
				 setTimeout(function(){
				  $("#visit_datetime").focus();
				  },500)
                return false;
			}
			else if (diagnosis == "") {
                alert("Please Enter Diagnosis")
				setTimeout(function(){
                $("#visit_diagnosis_details").focus();
				},500)
                return false;
            }
			else if(medication == ""){
				 alert("Please Enter Medication")
				 setTimeout(function(){
				  $("#visit_medication").focus();
				  },500)
                return false;
			}else if(ins == 0){
					
					alert("Please Select at least one Image");
					}
			else if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
				alert('invalid extension!');
				return false;
			}
			else if(followdate == ""){
				 alert("Please Select FollowUp Date")
				 setTimeout(function(){
				  $("#visit_followup_date").focus();
				  },500)
                return false;
			}
			else {
	var form1 = $('#doctor-form')[0];		
	var data = new FormData(form1);//$("#doctor-form").serialize();
	 $('#loading_img').css('display','block');
	$.ajax({
              type: "POST",
			  enctype: 'multipart/form-data',
			  url: "https://www.manoramahealthcare.com/health_record_organizer/visit_save.php",
              data: data,
			  processData: false,
              contentType: false,
              cache: false,    			  
              success: function(data) {
				  
				  alert("Visit Saved Successfully!!!");
				  $('#loading_img').css('display','none');
				  window.location.href="VisitList.html";
				ResetForm();	
			  }
	 });	
				
			}	
    }
	

	
	 function ResetForm() {
	   
        $('#visit_doctor_id').val('');
        $('#visit_medication').val('');
		$('#visit_followup_date').val('');
		$('#visit_diagnosis_details').val('');
        $('#visit_datetime').val('');
		$('#file').val('');
		$('#fileName').val('');
		
		
     }