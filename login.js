// Add event listener to admin login form
const adminForm = document.querySelector(".admin-login-btn");

adminForm.addEventListener("click", (event) => {
  event.preventDefault();
  
  // Get form inputs
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;
}

