import WeatherApp from "./WeatherApp";

let weatherApp=new WeatherApp();

const displayController=(()=>{
    const testing=()=>{
        console.log("Display controller test")
    };
    const getLocationData=()=>{
        let location="Dallas";
        weatherApp.fetchData(location);
    };
    return{
        testing,
        getLocationData
    }
})();

export default function initializeWebsite(){
    displayController.testing();
    displayController.getLocationData();
}