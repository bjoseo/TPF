let APIKey = 'ec1b3008222649cf3762bef876c6ada0';

window.addEventListener('load',()=>{
   
    lat = '-34.56363'
        long = '-58.45654'
    lang= 'es'
    let tempValue = document.querySelector('#temp-value');
    let tempDescription = document.querySelector('#temp-description');
    let location = document.querySelector('#location');
    let animatedIcon = document.querySelector('#animated-icon');
   
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lat = position.coords.latitude
            long = position.coords.longitude
        const urlAPI =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKey}&lang=${lang}&units=metric`

        fetch(urlAPI)
        .then(response =>{return response.json()})
        .then(data => {
            tempValue.textContent = `${Math.round(data.main.temp)} °C`;
            tempDescription.textContent = `${data.weather[0].description}`;
            location.textContent = `${data.name}`;
            switch (data.weather[0].main) {
                case 'Thunderstorm':
                  animatedIcon.src='assets/weather_icons/animated/thunder.svg'
                  break;
                case 'Drizzle':
                  animatedIcon.src='assets/weather_icons/animated/rainy-2.svg'
                  break;
                case 'Rain':
                  animatedIcon.src='assets/weather_icons/animated/rainy-7.svg'
                  break;
                case 'Snow':
                  animatedIcon.src='assets/weather_icons/animated/snowy-6.svg'
                  break;                        
                case 'Clear':
                    animatedIcon.src='assets/weather_icons/animated/day.svg'
                  break;
                case 'Atmosphere':
                  animatedIcon.src='assets/weather_icons/animated/weather.svg'
                    break;  
                case 'Clouds':
                    animatedIcon.src='assets/weather_icons/animated/cloudy-day-1.svg'
                    break;  
                default:
                  animatedIcon.src='assets/weather_icons/animated/cloudy-day-1.svg'
              }
        }            
            )
        .catch( error =>{console.log(error)})
      })
    }
        
    const urlAPI =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKey}&lang=${lang}&units=metric`

    fetch(urlAPI)
    .then(response =>{return response.json()})
    .then(data => {
        tempValue.textContent = `${Math.round(data.main.temp)} °C`;
        tempDescription.textContent = `${data.weather[0].description}`;
        location.textContent = `${data.name}`;
        switch (data.weather[0].main) {
            case 'Thunderstorm':
              animatedIcon.src='assets/weather_icons/animated/thunder.svg'
              break;
            case 'Drizzle':
              animatedIcon.src='assets/weather_icons/animated/rainy-2.svg'
              break;
            case 'Rain':
              animatedIcon.src='assets/weather_icons/animated/rainy-7.svg'
              break;
            case 'Snow':
              animatedIcon.src='assets/weather_icons/animated/snowy-6.svg'
              break;                        
            case 'Clear':
                animatedIcon.src='assets/weather_icons/animated/day.svg'
              break;
            case 'Atmosphere':
              animatedIcon.src='assets/weather_icons/animated/weather.svg'
                break;  
            case 'Clouds':
                animatedIcon.src='assets/weather_icons/animated/cloudy-day-1.svg'
                break;  
            default:
              animatedIcon.src='assets/weather_icons/animated/cloudy-day-1.svg'
          }
    }            
        )
})
