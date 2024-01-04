const apikey = "6e4c13a5d13e186a90d6ca407ca12d85"

const weatherDataEl = document.getElementById("weather-data")

const cittyInputEl = document.getElementById("city-input");


const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getweatherData(cityvalue);
});

