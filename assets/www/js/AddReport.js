	function SaveReport(){
		
		var reportname =  $("#visit_report_name").val();
		var ins = document.getElementById('file').files.length;		
		if(reportname == "") {
                alert("Please Enter ReportName")
				setTimeout(function(){
					$("#visit_report_name").focus();
					
				},500)
                
                return false;
            }else if(ins == 0){
					
					alert("Please Select at least one File");
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