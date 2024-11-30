document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('sign-up-btn');
    const signInButton = document.getElementById('sign-in-btn');
    const container = document.querySelector('.container');
    const signUpForm = document.querySelector('.sign-up-form');
    const signInForm = document.querySelector('.sign-in-form');

    signUpButton.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
    });

    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const user = { username, email, password };
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'false');
        alert('Sign up successful! Please log in to authenticate.');
        container.classList.remove('sign-up-mode');
    });

    signInForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signin-username').value;
        const password = document.getElementById('signin-password').value;

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (currentUser && currentUser.username === username && currentUser.password === password) {
            localStorage.setItem('isAuthenticated', 'true');
            window.location.href = 'auth.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
















document.addEventListener('DOMContentLoaded', function() {
    // Existing code remains unchanged

    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const user = {
            username,
            email,
            password,
            registrationId: generateUUID(), // Generate a unique ID for registration
            profilePicture: '/placeholder.svg?height=128&width=128' // Default profile picture
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'false');
        alert('Sign up successful! Please log in to authenticate.');
        container.classList.remove('sign-up-mode');
    });

    // Existing code remains unchanged

    // Function to generate a UUID
    function generateUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
});