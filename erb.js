function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (username === 'admin' && password === 'adminpass') {
        message.textContent = 'Welcome, Administrator!';
        // Ridrejtohemi në faqen e administratorit pasi të bëjmë login
        window.location.href = 'admin_home.html';
    } else if (username === 'user' && password === 'userpass') {
        message.textContent = 'Welcome, User!';
        // Ridrejtohemi në faqen e përdoruesit pasi të bëjmë login
        window.location.href = 'user_home.html';
    } else {
        message.textContent = 'Invalid credentials. Please try again.';
    }
}
