import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const testing=()=>{
        console.log("Display controller test")
    };
    const getLocationData=location=>{
        weatherApp.fetchData(location);
    };
    return{
        testing,
        getLocationData
    }
})();

export default function initializeWebsite(){
    let submitButton=document.getElementById("submit-location-button");
    submitButton.addEventListener("click", ()=>{
        let inputLocation=document.getElementById("location-input").value;
        displayController.getLocationData(inputLocation);
    });
    displayController.testing();
}