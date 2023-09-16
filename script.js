var locationInp = document.getElementById("searchcity");
var searchButton = document.getElementById("searchButton");
var timeINFO = document.getElementById("timeINFO");
var infoTitle = document.getElementById("infoTitle");
var cloudCeil = document.getElementById("cloudCeiling");
var cloudBase = document.getElementById("cloudBase");
var cloudCeiling = document.getElementById("cloudCeiling");
var cloudCover = document.getElementById("cloudCover")
var dewPoint = document.getElementById("dewPoint");
var freezingRainIntensity = document.getElementById("freezingRainIntensity");
var humidity = document.getElementById("humidity");
var uvIndex = document.getElementById("uvIndex");
var windSpeed = document.getElementById("windSpeed");
var visibility = document.getElementById("visibility");
var splashtxt = document.getElementById("splashtxt")
// api stuff
const apikey = "bkUnmDLbrQUaKLN6wTU1CTM85VNdG9CL";

function returnRand(min, max) {
    return Math.round(Math.random() * (max - min))
}


function manageClick() {
    var locStr = locationInp.value; // Get the user's input when the button is clicked
    var url = `https://api.tomorrow.io/v4/weather/realtime?location=${locStr}&apikey=${apikey}`;
    const randIntGened = returnRand(0, 3)
    console.log(randIntGened)

    switch (randIntGened) {
        case 0:
            splashtxt.textContent = "Lufthor was here!"
            break;
        case 1:
            splashtxt.textContent = "Made in HTML!"
            break;
        case 2:
            splashtxt.textContent = "Made in 4 days, im extra lazy!"
            break;
        case 3:
            splashtxt.textContent = "I dunno what to put here :)"
            break;
        default:
            break;
    }
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            infoTitle.textContent = `Weather info for ${data.location.name}`
            timeINFO.textContent = `Time: ${data.data.time}`
            cloudCeil.textContent = `Cloud Ceiling: ${data.data.values.cloudCeiling}`
            cloudBase.textContent = `Cloud Base: ${data.data.values.cloudBase}`
            cloudCover.textContent = `Cloud Cover: ${data.data.values.cloudCover}`
            dewPoint.textContent = `Dew Point: ${data.data.values.dewPoint}`
            freezingRainIntensity.textContent = `Freezing Rain Instensity: ${data.data.values.freezingRainIntensity}`
            humidity.textContent = `Humidity: ${data.data.values.humidity}`
            uvIndex.textContent = `UV Index: ${data.data.values.uvIndex}`
            windSpeed.textContent = `Wind Speed ${data.data.values.windSpeed}`
            visibility.textContent = `Visiblity: ${data.data.values.visibility}`
            console.log(data);
        });

    infoTitle.textContent = `Weather info for ${locationInp.value}`;
}

searchButton.addEventListener("click", manageClick);
