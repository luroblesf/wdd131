
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

localStorage.setItem('name', name);
localStorage.setItem('email', email);
localStorage.setItem('message', message);

    window.location.href = 'result.html';
}



const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
const message = localStorage.getItem('message');


document.getElementById('displayName').textContent = name;
document.getElementById('displayEmail').textContent = email;
document.getElementById('displayMessage').textContent = message;