export default class WeatherApp{
    fetchData(location){
        fetch(`https://api.weatherapi.com/v1/current.json?key=accc068634d04769b09171233231010&q=${location}`)
            .then(response=>{
                return response.json();
            })
            .then(response=>{
                console.log(response)
            });
    }
}