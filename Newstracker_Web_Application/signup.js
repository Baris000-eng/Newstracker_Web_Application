const signupForm = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Validate user input
  if (username.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password.');
    return;
  }

  // Check if username already exists
  const users = parseUsers();
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert('Username and password already exists. Please log in.');
    window.location.href = 'login.html';
    return;
  }

  // Store new user
  users.push({ username: username, password: password });
  localStorage.setItem('users', JSON.stringify(users));

  // Display success message and redirect user to the index page
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
