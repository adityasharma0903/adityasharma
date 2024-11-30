document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.sign-up-form');
    const signInForm = document.querySelector('.sign-in-form');
    const signUpBtn = document.getElementById('sign-up-btn');
    const signInBtn = document.getElementById('sign-in-btn');
    const container = document.querySelector('.container');
  
    // Function to switch between sign-up and sign-in forms
    function toggleForms() {
      container.classList.toggle('sign-up-mode');
    }
  
    signUpBtn.addEventListener('click', toggleForms);
    signInBtn.addEventListener('click', toggleForms);
  
    // Initialize users array from localStorage or empty array if not exists
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Handle sign-up form submission
    signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const password = this.querySelector('input[type="password"]').value;
  
      // Check if email already exists
      if (users.some(user => user.email === email)) {
        alert('This email is already registered. Please sign in.');
        return;
      }
  
      // Add new user
      users.push({ username, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created successfully! You can now sign in.');
      toggleForms(); // Switch to sign-in form
      this.reset(); // Clear the form
    });
  
    // Handle sign-in form submission
    signInForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="text"]').value; // Assuming this is for email
      const password = this.querySelector('input[type="password"]').value;
  
      // Check if user exists and password is correct
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        alert('Signed in successfully!');
        // Here you can redirect to another page or perform other actions
      } else {
        alert('Invalid email or password.');
      }
    });
  
    // Handle Google Sign-In (placeholder function)
    function handleGoogleSignIn() {
      alert('Google Sign-In functionality needs to be implemented.');
    }
  
    // Handle Apple Sign-In (placeholder function)
    function handleAppleSignIn() {
      alert('Apple Sign-In functionality needs to be implemented.');
    }
  
    // Add event listeners for Google and Apple sign-in buttons
    const googleButtons = document.querySelectorAll('#google');
    const appleButtons = document.querySelectorAll('#apple');
  
    googleButtons.forEach(button => {
      button.addEventListener('click', handleGoogleSignIn);
    });
  
    appleButtons.forEach(button => {
      button.addEventListener('click', handleAppleSignIn);
    });
  });