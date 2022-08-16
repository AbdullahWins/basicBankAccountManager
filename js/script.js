document.getElementById('btn-submit').addEventListener('click' , function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'a' && password === '1') {
        window.location.href = '../html/basicBank.html';
    }
    else {
        alert('Wrong Info');
    }
})