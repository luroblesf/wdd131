const currentYear = document.getElementById("currentyear");
currentYear.innerText = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
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


document.addEventListener("DOMContentLoaded", function () {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
        yearSpan.textContent = getCurrentYear();
    }

    var lastModifiedDate = document.lastModified;
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }


    const form = document.querySelector('form.wf');
    form.addEventListener('submit', function (event) {
        event.preventDefault();  

        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem('reviewCount', reviewCount);

        alert(`Thank you for your review! You have submitted ${reviewCount} reviews.`);

        form.reset();
    });
});