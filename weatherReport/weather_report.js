function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'eb5a2f89ab5c7d22baf582c47d43311f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            
            if (data.cod === "404") {
                weatherInfo.innerHTML = "<p>Not a valid city.</p>";
                return;
            }
            
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(err => {
            console.log('fuked up: ' + err)
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );