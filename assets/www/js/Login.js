localStorage.setItem('address', 'https://www.manoramahealthcare.com/health_record_organizer/');


	   var today = new Date();//"2018/03/30";
       var day = ("0" + today.getDate()).slice(-2);
       var month = ("0" + (today.getMonth() + 1)).slice(-2);
       var today = today.getFullYear()+"/"+month+"/"+day;
	//alert(today);
       localStorage.setItem('today',today);
	   var now = new Date();
	   var day1 = ("0" + now.getDate()+1).slice(-2);
       var month1 = ("0" + (now.getMonth() + 1)).slice(-2);
       var today1 = "2019/02/20";
	

function handleLogin() 
{
	
	var address = localStorage.getItem('address');
    var unm = document.getElementById('user_username').value;
    var psd = document.getElementById('user_password').value;
	
	
	 if(unm == '')
    {	
		alert("Enter Username");
        $("#user_username").css("border","1px solid red");
		return false;
    }
	
	else{
	  $("input#user_username").css('border','1px solid #ccc');	  
	}
     if(psd == '')
    {    
    	alert("Enter Password");
    	$("#user_password").css("border","1px solid red");
    	return false;
    } 
	else{
	  $("input#user_password").css('border','1px solid #ccc');
	  
	}
	if(today >= today1){
	   
	   alert("Login Expired");
   }else{	
	$("#user_username").css("border","1px solid white");
    $("#user_password").css("border","1px solid white");
   //var data = $("#login-form").serialize();
    //alert(regid);
   $.ajax({
    
   type : 'POST',
   url:address+"user_login.php",
   data: { user_username : unm, 
		   user_password : psd,//put user id here
		},
   success :  function(data)
      {
var parseJson = JSON.parse(data);
console.log(parseJson.message);

if(parseJson.message == "user or password incorrect"){
	$("#user_password").css("border","1px solid red");
	$("#user_username").css("border","1px solid red");
	alert("Incorrect username or password. Try again.")
	
}
else{
	$("#user_username").css("border","1px solid white");
    $("#user_password").css("border","1px solid white");
	//console.log(response); 	
    
      //$("#btn-login").html('<img src="img/btn-ajax-loader.gif" /> &nbsp; Signing In ...');

	 		  
window.location.href = "Menu.html";

	  localStorage.setItem('u_id',parseJson.message.user_id);
	  localStorage.setItem('user_name',parseJson.message.user_name);
    }
	  } 
     
   });
    return false;
  }
 
}