document.addEventListener('DOMContentLoaded', function() {
    const logregBox = document.querySelector('.logreg-box');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        logregBox.classList.add('active');
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        logregBox.classList.remove('active');
    });
});
