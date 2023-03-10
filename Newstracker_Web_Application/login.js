const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate user input
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password.');
    return;
  }

  // Check if username and password match stored values
  const users = parseUsers();
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    alert('Invalid username or password. Please try again or sign up if you haven\'t already.');
    return;
  }

  // Redirect user to the home page
  window.location.href = 'newstracker.html';
});

function parseUsers() {
  const usersText = localStorage.getItem('users');
  if (usersText) {
    return JSON.parse(usersText);
  } else {
    return [];
  }
}
