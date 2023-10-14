import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const getLocationData=async (location)=>{
        document.getElementById("warning-message").style.display="none";
        let locationWeather=await weatherApp.fetchData(location);
        displayWeatherInfo(locationWeather); 
    };
    const displayWeatherInfo=(weatherInfo)=>{
        document.getElementById("location-name").textContent=weatherInfo.location_name;
        document.getElementById("temperature").textContent=weatherInfo.temp_c+` °C`;
        document.getElementById("condition").textContent=weatherInfo.condition;
        document.getElementById("feelslike").textContent=weatherInfo.feelslike_c+` °C`;
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