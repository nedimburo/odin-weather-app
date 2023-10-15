export default class WeatherApp{
    async fetchData(location){
        let shortData={};
        try{
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=accc068634d04769b09171233231010&q=${location}`, {mode: 'cors'});
            if (!response.ok){
                throw new Error("Something went wrong.");
            }
            const locationData = await response.json();
            shortData.location_name=locationData.location.name;
            shortData.local_time=locationData.location.localtime;
            shortData.temp_c=locationData.current.temp_c;
            shortData.temp_f=locationData.current.temp_f;
            shortData.feelslike_c=locationData.current.feelslike_c;
            shortData.feelslike_f=locationData.current.feelslike_f;
            shortData.humidity=locationData.current.humidity;
            shortData.condition=locationData.current.condition.text;
            shortData.condition_code=locationData.current.condition.code;
            shortData.wind_kph=locationData.current.wind_kph;
            shortData.wind_dir=locationData.current.wind_dir;
            shortData.is_day=locationData.current.is_day;
            shortData.last_updated=locationData.current.last_updated;
            shortData.uv=locationData.current.uv;
        }catch(error){
            console.log(error);
            document.getElementById("warning-message").style.display="flex";
        }
        return shortData;
    }
}