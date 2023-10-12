import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const getLocationData=location=>{
        let locationWeather=weatherApp.fetchData(location);
        displayWeatherInfo(locationWeather);
    };
    const displayWeatherInfo=weatherInfo=>{
        let mainContainer=document.getElementById("weather-info-container");
        mainContainer.innerHTML="";
        if (mainContainer.classList.contains("empty-container")){
            mainContainer.classList.remove("empty-container");
        }
        if (!mainContainer.classList.contains("populated-container")){
            mainContainer.classList.add("populated-container");
        }
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
            let warningMessageBox=document.getElementById("warning-message");
            warningMessageBox.textContent="Input field is empty. Please enter the location.";
        }
        else{
            displayController.getLocationData(inputLocation);
        }       
    });
}