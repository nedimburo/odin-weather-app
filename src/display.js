import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const getLocationData=async (location)=>{
        document.getElementById("warning-message").style.display="none";
        let locationWeather=await weatherApp.fetchData(location);
        displayWeatherInfo(locationWeather); 
    };
    const displayWeatherInfo=(weatherInfo)=>{
        // Basic info
        document.getElementById("location-name").textContent=weatherInfo.location_name;
        document.getElementById("temperature").textContent=weatherInfo.temp_c+` °C`;
        document.getElementById("condition").textContent=weatherInfo.condition;
        document.getElementById("feelslike").textContent=weatherInfo.feelslike_c+` °C`;
        // Weather icon
        // Day or night display
        let dayNightContainer=document.getElementById("day-night-container");
        dayNightContainer.innerHTML="";
        let dayNightImg=document.createElement("img");
        let dayNightText=document.createElement("span");
        dayNightImg.classList.add("day-night-img");
        if (weatherInfo.is_day==1){
            dayNightImg.src="../dist/icons/sun.svg";
            dayNightText.textContent="Day";
        }
        else{
            dayNightImg.src="../dist/icons/moon.svg";
            dayNightText.textContent="Night";
        }
        dayNightContainer.appendChild(dayNightImg);
        dayNightContainer.appendChild(dayNightText);
        // Additional info
        document.getElementById("wind-speed").textContent=weatherInfo.wind_kph;
        document.getElementById("wind-direction").textContent=weatherInfo.wind_dir;
        document.getElementById("humidity").textContent=weatherInfo.humidity+" %";
        document.getElementById("uv-index").textContent=weatherInfo.uv;
        console.log(weatherInfo);
    };
    return{
        getLocationData
    }
})();

export default function initializeWebsite(){
    let submitButton=document.getElementById("submit-location-button");
    displayController.getLocationData("London");
    submitButton.addEventListener("click", ()=>{
        let inputLocation=document.getElementById("location-input").value;
        if (inputLocation==""){
            return;
        }
        else{
            displayController.getLocationData(inputLocation);
        }       
    });
}