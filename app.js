document.querySelector('button').addEventListener('click', () => {
    const place = document.getElementById('locationInput').value;

    function updateWeatherInfo(data) {
        const weatherInfo = document.getElementById('weather-info');

        if (data.error) { 
            weatherInfo.innerHTML = `<p style="color: red;">Error: ${data.error.message}</p>`;
            return; 
        }

        const location = document.getElementById('location');
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');

        location.textContent = data.location.name + ", " + data.location.region + ", " + data.location.country;
        temperature.textContent = `Temperature: ${data.current.temp_c}°C`; 
        description.textContent = `Condition: ${data.current.condition.text}`; 

        weatherInfo.style.display = 'block';
    }

    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=00e50d99a5fd47b4bfe71108251902&q=${place}&aqi=no`);

    promise
        .then(response => {
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => updateWeatherInfo(data))
        .catch(error => { 
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
            console.error("Error fetching weather data:", error); 
        });
});