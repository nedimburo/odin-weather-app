import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const getLocationData=location=>{
        let locationWeather=weatherApp.fetchData(location);
        console.log(locationWeather);
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