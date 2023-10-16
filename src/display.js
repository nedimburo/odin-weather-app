import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const getLocationData=async (location)=>{
        document.getElementById("warning-message").style.display="none";
        document.getElementById("load-screen").style.display="flex";
        let locationWeather=await weatherApp.fetchData(location);
        if (JSON.stringify(locationWeather)=="{}"){
            document.getElementById("load-screen").style.display="none";
            return;
        }
        else{
            let imgPath=await weatherApp.getImgPath(locationWeather.condition_code, locationWeather.is_day);
            document.getElementById("load-screen").style.display="none";
            displayWeatherInfo(locationWeather, imgPath); 
        }        
    };
    const displayWeatherInfo=(weatherInfo, imgPath)=>{
        // Basic info
        document.getElementById("location-name").textContent=weatherInfo.location_name;
        document.getElementById("temperature").textContent=weatherInfo.temp_c+` °C`;
        document.getElementById("condition").textContent=weatherInfo.condition;
        document.getElementById("feelslike").textContent="Feels like: "+weatherInfo.feelslike_c+` °C`;
        // Weather icon
        let weatherImg=document.getElementById("weather-icon")
        weatherImg.src=imgPath;
        weatherImg.classList.add("weather-image");
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
        document.getElementById("wind-speed").textContent=weatherInfo.wind_kph+" kph";
        document.getElementById("wind-direction").textContent=weatherInfo.wind_dir;
        document.getElementById("humidity").textContent=weatherInfo.humidity+" %";
        document.getElementById("uv-index").textContent="UV: "+weatherInfo.uv;
        // Time info
        document.getElementById("local-time").textContent="Local time: "+weatherInfo.local_time;
        document.getElementById("last-updated").textContent="Last updated: "+weatherInfo.last_updated;
        console.log(weatherInfo);
        // Temperature buttons
        let celsiusButton=document.getElementById("celsius-button");
        let fahrentheitButton=document.getElementById("fahrenheit-button");
        celsiusButton.classList.add("selected-button");
        fahrentheitButton.classList.add("not-selected-button");
        celsiusButton.addEventListener("click", ()=>{
            toggleButtonClass(celsiusButton, fahrentheitButton);
            document.getElementById("temperature").textContent=weatherInfo.temp_c+` °C`;
            document.getElementById("feelslike").textContent="Feels like: "+weatherInfo.feelslike_c+` °C`;
        });
        fahrentheitButton.addEventListener("click", ()=>{
            toggleButtonClass(fahrentheitButton, celsiusButton);
            document.getElementById("temperature").textContent=weatherInfo.temp_f+` °F`;
            document.getElementById("feelslike").textContent="Feels like: "+weatherInfo.feelslike_f+` °F`;
        });
    };
    const toggleButtonClass=(selected, notSelected)=>{
        selected.classList.add("selected-button");
        selected.classList.remove("not-selected-button");
        notSelected.classList.add("not-selected-button");
        notSelected.classList.remove("selected-button");
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