const API_KEY = `bd3e8980cccca9f7102382e54e2b309c`;
const searchtemperature = () => {
const city =document.getElementById('city-name').value;
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayTemperature(data));
}
const setInnerText = (id,text) =>{
    document.getElementById(id).innerText=text;
}

const displayTemperature= temperature =>{
    console.log(temperature);
setInnerText('country',temperature.sys.country);
setInnerText('city',temperature.name);
setInnerText('temp',temperature.main.temp);
setInnerText('condition',temperature.weather[0].description);
// Set weather icon 
const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
const imageIcon =document.getElementById('weather-icon');
imageIcon.setAttribute('src',url);
// console.log(temperature);
}