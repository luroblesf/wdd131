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
var temperatureCelsiusValue = 10;
var temperatureCelsiusElement = document.getElementById("temperature");
temperatureCelsiusElement.textContent = temperatureCelsiusValue + "°C";
var windSpeedKmhValue = 5;
var windSpeedKmhElement = document.getElementById("wind");
windSpeedKmhElement.textContent = windSpeedKmhValue + " km/h";
function calculateWindchill(temperatureCelsius, windSpeedKmh) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKmh, 0.16);
}
var temperatureCelsius = 10;
var windSpeedKmh = 5;
var windChill = calculateWindchill(temperatureCelsius, windSpeedKmh);
var windchillElement = document.getElementById("windChill");
windchillElement.textContent = windChill.toFixed(1) + "°C";
