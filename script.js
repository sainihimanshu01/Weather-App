const userLocation = document.getElementById("userLocation"),
converter = document.getElementById("converter"),
weatherIcon = document.querySelector(".weatherIcon"),
temperature = document.querySelector(".temperature"),
feelsLike = document.querySelector(".feelslike"),
description = document.querySelector(".description"),
date = document.querySelector(".date"),
city = document.querySelector(".city");

HValue = document.getElementById("HValue");
WValue = document.getElementById("WValue");
SRValue = document.getElementById("SRValue");
SSValue = document.getElementById("SSValue");
CValue = document.getElementById("CValue");
WDValue = document.getElementById("WDValue");
PValue = document.getElementById("PValue");
Forecast = document.querySelector(".Forecast");

// -------------------------
// DEFINE API ENDPOINTS FIRST
// -------------------------
const API_KEY = "e9f94cef31a1e35e5984dc509db49b89";

const WEATHER_API_ENDPOINT =
    `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

const WEATHER_FORECAST_ENDPOINT =
    `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&`;

// -------------------------
// MAIN FUNCTION
// -------------------------

function getWindDirection(deg) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
}


function findUserLocation() {

    fetch(WEATHER_API_ENDPOINT + userLocation.value)
    .then(response => response.json())
    .then(data => {

        if (data.cod != 200) {
            alert(data.message);
            return;
        }

        console.log("Current Weather:", data);
        city.innerHTML=data.name+","+data.sys.country
        weatherIcon.style.background = `url('https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png')`;

        fetch(WEATHER_FORECAST_ENDPOINT +
            `lat=${data.coord.lat}&lon=${data.coord.lon}`
        )
        .then(response => response.json())
        .then(forecast => {
            console.log("Forecast Data:", forecast);

            temperature.innerHTML = data.main.temp + "°C";
            feelsLike.innerHTML = "Feels like: " + data.main.feels_like + "°C";
            description.innerHTML = `<i class="fa-solid fa-cloud"></i>&nbsp;` + data.weather[0].description;

            const options={
                weekday:"long",
                month:"long",
                day:"numeric",
                hour:"numeric",
                minute:"numeric",
                hour12:true,
            };

             date.innerHTML=getLongFormateDateTime(
                data.dt,
                data.timezone,
                options
            );

            HValue.innerHTML=Math.round(data.main.humidity)+"<span>%</span>";
            WValue.innerHTML =data.wind.speed + " m/s";
           
            const options1={
                hour:"numeric",
                minute:"numeric",
                hour12:true,
            };
            SRValue.innerHTML=getLongFormateDateTime(
                data.sys.sunrise,
                data.timezone,
                options1
            );
            SSValue.innerHTML=getLongFormateDateTime(
                data.sys.sunset,
                data.timezone,
                options1
            );

            CValue.innerHTML = data.clouds.all + "%";
             PValue.innerHTML=data.main.pressure+"<span>hPa</span>";
           
            WDValue.innerHTML = getWindDirection(data.wind.deg);
           

         });

    });
}


function formatUnixTime(dtValue,offSet,options={}) {
    const date = new Date((dtValue+offSet) * 1000);
    return date.toLocaleString([], { timeZone: "UTC", ...options });
}

function getLongFormateDateTime(dtValue,offSet,options){
    return formatUnixTime(dtValue,offSet,options);
}