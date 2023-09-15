var locationInp = document.getElementById("searchcity");
var searchButton = document.getElementById("searchButton");
var timeINFO = document.getElementById("timeINFO");
var infoTitle = document.getElementById("infoTitle");
var cloudCeil = document.getElementById("cloudCeiling");
var cloudBase = document.getElementById("cloudBase");

// api stuff
const apikey = "bkUnmDLbrQUaKLN6wTU1CTM85VNdG9CL";

function manageClick() {
    var locStr = locationInp.value; // Get the user's input when the button is clicked
    var url = `https://api.tomorrow.io/v4/weather/realtime?location=${locStr}&apikey=${apikey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            timeINFO.textContent = `Time: ${data.data.time}`
            cloudCeil.textContent = `Cloud Ceiling: ${data.data.values.cloudCeiling}`
            cloudBase.textContent = `Cloud Base: ${data.data.values.cloudBase}`
            console.log(data);
        });

    infoTitle.textContent = `Weather info for ${locationInp.value}`;
}

searchButton.addEventListener("click", manageClick);
