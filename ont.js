document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const use = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+[com]/;
    if (use === '' || pass === '') {
        document.getElementById('errorText').innerText = 'Nhap du ';

    } else if (!email.test(use)) {
        document.getElementById('errorText').innerText = 'thieu duoi mail';
    } else {
        alert('ok');
        document.getElementById('loginForm').reset();
        document.getElementById('errorText').innerText = '';
    };
});