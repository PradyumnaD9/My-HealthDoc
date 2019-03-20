	function SaveReport(){
		
		var reportname =  $("#visit_report_name").val();
		var ins = document.getElementById('file').files.length;	
	var ext = $('#file').val().split('.').pop().toLowerCase();		
		if(reportname == "") {
                alert("Please Enter Report Name")
				setTimeout(function(){
					$("#visit_report_name").focus();
					return false;
				},500)
                
                return false;
            }else if(ins == 0){
					
					alert("Please Select at least one File");
					}
					
			else if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
				alert('invalid extension!');
				return false;
			}
		else {
			  var form1 = $('#report-form')[0];		
			  var data = new FormData(form1);
			  console.log(data);
			  $('#loading_img').css('display','block');
			  $.ajax({
              type: "POST",
			  enctype: 'multipart/form-data',
			  url: "https://www.manoramahealthcare.com/health_record_organizer/visit_report_save.php",
              data: data, 
			  processData: false,
              contentType: false,
              cache: false,    			  
              success: function(data) {
				  console.log(data);
				  alert("Report Added Successfully!!!");
				  $('#loading_img').css('display','none');
				  location.reload(true);
				  ResetForm();	
			  }
	 });	
				
			}	
		
	}

	 function ResetForm() {
	      
        $('#visit_report_name').val('');
		$('#file').val('');

     }