(()=>{"use strict";let e=new class{async fetchData(e){let t={};try{const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=accc068634d04769b09171233231010&q=${e}`,{mode:"cors"});if(!n.ok)throw new Error("Something went wrong.");const c=await n.json();t.location_name=c.location.name,t.local_time=c.location.localtime,t.temp_c=c.current.temp_c,t.temp_f=c.current.temp_f,t.feelslike_c=c.current.feelslike_c,t.feelslike_f=c.current.feelslike_f,t.humidity=c.current.humidity,t.condition=c.current.condition.text,t.wind_kph=c.current.wind_kph,t.wind_mph=c.current.wind_mph,t.wind_dir=c.current.wind_dir,t.is_day=c.current.is_day,t.last_updated=c.current.last_updated,t.uv=c.current.uv}catch(e){console.log(e),document.getElementById("warning-message").style.display="flex"}return t}};const t={getLocationData:async t=>{document.getElementById("warning-message").style.display="none",(e=>{let t=document.getElementById("weather-info-container");t.innerHTML="";let n=document.createElement("div"),c=document.createElement("div");n.textContent=e.temp_c,c.textContent=e.location_name,t.appendChild(n),t.appendChild(c),console.log(e)})(await e.fetchData(t))}};document.getElementById("submit-location-button").addEventListener("click",(()=>{let e=document.getElementById("location-input").value;""!=e&&t.getLocationData(e)}))})();