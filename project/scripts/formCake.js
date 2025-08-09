
const products = [
    {
        id: "A10025",
        name: "Fruit Tart Birthday",
    },
    {
        id: "F1248",
        name: "Mousse Birthday Cupcakes",
    },
    {
        name: "Carrot Cake",
        id: "X2658",
    },
    {
        name: "Lemon Zest",
        id: "B97312",
    },
    {
        name: "Red Velvet Bliss",
        id: "A8462",
    },
    {
        id: "G5975",
        name: "Jule's Wedding Cake",
    },
    {
        id: "C2610",
        name: "Chocolate Delight",

    },
    {
        id: "B54130",
        name: "Vanilla Dream Wedding",
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.querySelector('select[name="product"]');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const form = document.querySelector('form.wf');
    form.addEventListener('submit', function (event) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
    });

});

function submitForm() {
    let namec = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let product = document.getElementById('product').value;
    let cakeEvent = document.querySelector('input[name="cakeEvent"]:checked').value;

    localStorage.setItem('name', namec);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('product', product);
    localStorage.setItem('cakeEvent', cakeEvent);


    window.location.href = 'review.html';
}

let namec = localStorage.getItem('name');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let cakeEvent = localStorage.getItem('cakeEvent');
let message = localStorage.getItem('message');

document.getElementById('displayName').textContent = namec;
document.getElementById('displayPhone').textContent = phone;
document.getElementById('displayEmail').textContent = email;
document.getElementById('displayProduct').textContent = products.find(p => p.id === localStorage.getItem('product')).name;
document.getElementById('displayCakeEvent').textContent = cakeEvent;
document.getElementById('displayMessage').textContent = message;


function showNumberVisits() {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById("reviewCount").textContent = reviewCount;
}

window.onload = showNumberVisits;