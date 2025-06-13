const API_KEY = 'tu-api-key'; // Regístrate en openweathermap.org para obtenerla

document.getElementById('search-btn').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    document.getElementById('weather-result').innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>🌈 ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    `;
  } catch (error) {
    document.getElementById('weather-result').innerHTML = "⚠️ Ciudad no encontrada";
  }
});
4️⃣ Probar la App Localmente
