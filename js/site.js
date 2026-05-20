function openModal(modalId, caption, imgSrc, event) {
  const modal = document.getElementById(modalId);
  const img = document.getElementById("modalImg");
  img.src = imgSrc;
  modal.querySelector(".caption").innerText = caption;
  modal.classList.add("show");
}
function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("show");
}
async function getDresdenWetter() {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=51.0504&longitude=13.7373&current=temperature_2m,weather_code&timezone=Europe%2FBerlin";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const temp = Math.round(data.current.temperature_2m);
        document.getElementById('dresden-temp').innerText = `${temp}°C`;
        const code = data.current.weather_code;
        console.log(data)
        let wetterText = "Klar";
        if (code === 0) wetterText = "☀️ Sonnig";
        else if (code >= 1 && code <= 2) wetterText = "⛅ leicht bewölkt";
        else if (code >= 3) wetterText = "☁️ Bewölkt";
        else if (code >= 45 && code <= 48) wetterText = "🌫️ Nebel";
        else if (code >= 61) wetterText = "🌧️ leichter Regen";
        else if (code >= 63) wetterText = "🌧️ Regen";
        else if (code >= 65) wetterText = "🌧️ starker Regen";
        else if (code >= 71 && code <= 77) wetterText = "❄️ Schnee";
        else if (code >= 80 && code <= 82) wetterText = "🌦️ Regenschauer";
        else if (code >= 95) wetterText = "⛈️ Gewitter";
        document.getElementById('dresden-status').innerText = wetterText;
    } catch (error) {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
        document.getElementById('dresden-status').innerText = "Fehler beim Laden";
    }
}
getDresdenWetter();
