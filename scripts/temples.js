function getCurrentYear() {
    return new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", function () {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
        yearSpan.textContent = getCurrentYear();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var lastModifiedDate = document.lastModified;

    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');

    });
});

