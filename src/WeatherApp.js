export default class WeatherApp{
    fetchData(location){
        let shortData={};
        fetch(`https://api.weatherapi.com/v1/current.json?key=accc068634d04769b09171233231010&q=${location}`)
            .then(response=>{
                return response.json();
            })
            .then(response=>{
                console.log(response);
                shortData.location_name=response.location.name;
                shortData.temp_c=response.current.temp_c;
                shortData.temp_f=response.current.temp_f;
                shortData.feelslike_c=response.current.feelslike_c;
                shortData.feelslike_f=response.current.feelslike_f;
                shortData.humidity=response.current.humidity;
                shortData.condition=response.current.condition.text;
                shortData.wind_kph=response.current.wind_kph;
                shortData.wind_mph=response.current.wind_mph;
                shortData.wind_dir=response.current.wind_dir;
                shortData.is_day=response.current.is_day;
                shortData.last_updated=response.current.last_updated;
                shortData.uv=response.current.uv;
            });
        return shortData;
    }
}