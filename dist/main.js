(()=>{"use strict";let t=new class{async fetchData(t){let e={};try{const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=accc068634d04769b09171233231010&q=${t}`,{mode:"cors"});if(!n.ok)throw new Error("Something went wrong.");const o=await n.json();e.location_name=o.location.name,e.local_time=o.location.localtime,e.temp_c=o.current.temp_c,e.temp_f=o.current.temp_f,e.feelslike_c=o.current.feelslike_c,e.feelslike_f=o.current.feelslike_f,e.humidity=o.current.humidity,e.condition=o.current.condition.text,e.condition_code=o.current.condition.code,e.wind_kph=o.current.wind_kph,e.wind_dir=o.current.wind_dir,e.is_day=o.current.is_day,e.last_updated=o.current.last_updated,e.uv=o.current.uv}catch(t){console.log(t),document.getElementById("warning-message").style.display="flex"}return e}async fetchConditions(){return(await fetch("https://api.jsonbin.io/v3/b/652bea4554105e766fc293db/latest",{headers:{"X-Master-Key":"$2a$10$SqSRVBshJYfvVRh87pS9ieG5XRZkm5s0eB7jmgsjdOM1TYf/7knky"}})).json()}async getImgPath(t,e){const n=await this.fetchConditions();let o;for(let e=0;e<n.record.length;e++)t==n.record[e].code&&(o=n.record[e].icon);return 1==e?`../dist/weather/64x64/day/${o}.png`:`../dist/weather/64x64/night/${o}.png`}};const e=(()=>{const e=(t,e)=>{t.classList.add("selected-button"),t.classList.remove("not-selected-button"),e.classList.add("not-selected-button"),e.classList.remove("selected-button")};return{getLocationData:async n=>{document.getElementById("warning-message").style.display="none";let o=await t.fetchData(n);((t,n)=>{document.getElementById("location-name").textContent=t.location_name,document.getElementById("temperature").textContent=t.temp_c+" °C",document.getElementById("condition").textContent=t.condition,document.getElementById("feelslike").textContent=t.feelslike_c+" °C",document.getElementById("weather-icon").src=n;let o=document.getElementById("day-night-container");o.innerHTML="";let d=document.createElement("img"),c=document.createElement("span");d.classList.add("day-night-img"),1==t.is_day?(d.src="../dist/icons/sun.svg",c.textContent="Day"):(d.src="../dist/icons/moon.svg",c.textContent="Night"),o.appendChild(d),o.appendChild(c),document.getElementById("wind-speed").textContent=t.wind_kph,document.getElementById("wind-direction").textContent=t.wind_dir,document.getElementById("humidity").textContent=t.humidity+" %",document.getElementById("uv-index").textContent=t.uv,document.getElementById("local-time").textContent="Local time: "+t.local_time,document.getElementById("last-updated").textContent="Last updated: "+t.last_updated,console.log(t);let i=document.getElementById("celsius-button"),a=document.getElementById("fahrenheit-button");i.classList.add("selected-button"),a.classList.add("not-selected-button"),i.addEventListener("click",(()=>{e(i,a),document.getElementById("temperature").textContent=t.temp_c+" °C",document.getElementById("feelslike").textContent=t.feelslike_c+" °C"})),a.addEventListener("click",(()=>{e(a,i),document.getElementById("temperature").textContent=t.temp_f+" °F",document.getElementById("feelslike").textContent=t.feelslike_f+" °F"}))})(o,await t.getImgPath(o.condition_code,o.is_day))}}})();!function(){let t=document.getElementById("submit-location-button");e.getLocationData("London"),t.addEventListener("click",(()=>{let t=document.getElementById("location-input").value;""!=t&&e.getLocationData(t)}))}()})();