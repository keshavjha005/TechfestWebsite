// Admin Login
function adminLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "admin" && password == "admin") {
		window.location.href = "admin.html";
	} else {
		alert("Invalid username or password");
	}
}

// User Login
function userLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "user" && password == "user") {
		window.location.href = "user.html";
	} else {
		alert("Invalid username or password");
	}
}
