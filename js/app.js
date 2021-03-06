// Api key 
const api_Key =``;

// load weather details function
const loadDetails = () => {
    const cityName = document.getElementById('city-name').value; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_Key}&units=metric`)
    .then(res => res.json())
    .then(data => setDetails(data))

    document.getElementById('city-name').value = '';

};

const getFeilds =(id, input)=>{
    document.getElementById(id).innerText = input ; 
};

const setDetails = details => {
    console.log(details);

    getFeilds('city', details.name)
    getFeilds('temperature', details.main.temp)
    getFeilds('condition', details.weather[0].main)

    const url = `https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`;
    const ico = document.getElementById('weather-icon');

    ico.setAttribute('src', url);
};
