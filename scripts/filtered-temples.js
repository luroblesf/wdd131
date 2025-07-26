const currentYear = document.getElementById("currentyear");
currentYear.innerText = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;



document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');

    });
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Coban Guatemala",
        location: "Coban, Guatemala",
        dedicated: "2024, June, 9",
        area: 8772,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "1993, April, 30",
        area: 72000,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-62134.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah",
        dedicated: "1853, February, 14",
        area: 382207,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Kirtland Ohio",
        location: "Kirtland, Ohio",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-59480.jpg"
    }
];

createTempleCard(temples);

const allLink = document.querySelector("#alltemple")
const oldLink = document.querySelector("#oldtemple");
const newLink = document.querySelector("#newtemple");
const largeLink = document.querySelector("#largetemple");
const smallLink = document.querySelector("#smalltemple");


allLink.addEventListener('click', () => {
    createTempleCard(temples)
    displayTemples(alltemple)
});

oldLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
    displayTemples(oldtemple);
});

newLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
    displayTemples(newtemple);
});

largeLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
    displayTemples(newtemple);
});

smallLink.addEventListener('click', () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));
    displayTemples(newtemple);
});


function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });

}

