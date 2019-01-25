/**
 * @author User
 */
function logout()
 {
    localStorage.setItem('u_id','');
	window.localStorage.clear();
	window.location.href = "Login.html";
}