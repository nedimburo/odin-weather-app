import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const getLocationData=async (location)=>{
        document.getElementById("warning-message").style.display="none";
        let locationWeather=await weatherApp.fetchData(location);
        displayWeatherInfo(locationWeather); 
    };
    const displayWeatherInfo=(weatherInfo)=>{
        let mainContainer=document.getElementById("weather-info-container");
        mainContainer.innerHTML="";
        let temp=document.createElement("div");
        let location=document.createElement("div");
        temp.textContent=weatherInfo.temp_c;
        location.textContent=weatherInfo.location_name;
        mainContainer.appendChild(temp);
        mainContainer.appendChild(location);
        console.log(weatherInfo);
    };
    return{
        getLocationData
    }
})();

export default function initializeWebsite(){
    let submitButton=document.getElementById("submit-location-button");
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