document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');

    });
});

const cakes = [
    {
        cakeName: "Jule's Wedding Cake",
        cakeImage: "images/jules-wedding.webp",
        cakeDescription: "A delicious cake made with the finest ingredients.",
        cakePrice: 29.99
    },
    {
        cakeName: "Chocolate Delight",
        cakeImage: "images/chocolate-delight.webp",
        cakeDescription: "Rich chocolate cake with a creamy chocolate frosting.",
        cakePrice: 34.99
    },
    {
        cakeName: "Vanilla Dream Wedding",
        cakeImage: "images/vanilla-dream.webp",
        cakeDescription: "Classic vanilla cake with a light and fluffy texture.",
        cakePrice: 27.99
    },
    {
        cakeName: "Red Velvet Bliss",
        cakeImage: "images/red-velvet-bliss.webp",
        cakeDescription: "Decadent red velvet cake with cream cheese frosting.",
        cakePrice: 32.99
    },
    {
        cakeName: "Lemon Zest",
        cakeImage: "images/lemon-zest.webp",
        cakeDescription: "Refreshing lemon cake with a zesty lemon glaze.",
        cakePrice: 30.99
    },
    {
        cakeName: "Carrot Cake",
        cakeImage: "images/carrot-cake.webp",
        cakeDescription: "Moist carrot cake with walnuts and cream cheese frosting.",
        cakePrice: 28.99
    },
    {
        cakeName: "Mousse Birthday Cupcakes",
        cakeImage: "images/chocolate-mousse.webp",
        cakeDescription: "Rich and creamy chocolate mousse topped with whipped cream.",
        cakePrice: 7.99
    },
    {
        cakeName: "Fruit Tart Birthday",
        cakeImage: "images/fruit-tart.webp",
        cakeDescription: "A delightful tart filled with fresh seasonal fruits and a creamy custard.",
        cakePrice: 9.99
    }
];

createCakesCard(cakes);

const allLink = document.querySelector("#allcake");
const weddingLink = document.querySelector("#weddingcake");
const birthLink = document.querySelector("#birthdaycake");



allLink.addEventListener('click', () => {
    createCakesCard(cakes);
});

weddingLink.addEventListener('click', () => {
    createCakesCard(cakes.filter(cake => cake.cakeName.includes("Wedding")));
});

birthLink.addEventListener('click', () => {
    createCakesCard(cakes.filter(cake => cake.cakeName.includes("Birthday")));
});


function createCakesCard(filteredCakes) {
    document.querySelector(".prod-grid").innerHTML="";
    filteredCakes.forEach(cake => {
        let img = document.createElement("img");
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let price = document.createElement("p");


        name.textContent = cake.cakeName;
        description.innerHTML = `<span class="label"></span> ${cake.cakeDescription}`;
        price.innerHTML = `<span class="label">Price:</span> $${cake.cakePrice.toFixed(2)}`;
        img.setAttribute("src", cake.cakeImage);
        img.setAttribute("alt", `${cake.cakeName}`);
        img.setAttribute("loading", "lazy");
        card.appendChild(name);
        card.appendChild(description);  
        card.appendChild(price);
        card.appendChild(img);
        document.querySelector(".prod-grid").appendChild(card);
});
}

