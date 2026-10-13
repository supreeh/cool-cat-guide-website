var Ladescreen = document.querySelector(".Ladescreen");
window.addEventListener('load', function() {
  Ladescreen.style.display = 'none';
})

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

document.getElementById("tab1").addEventListener("change", function() {
    setTimeout(() => {
    window.location.href = "index.html";
    },300);
});

document.getElementById("tab2").addEventListener("change", function() {
    setTimeout(() => {
    window.location.href = "themen.html";
    },300);
});

document.getElementById("tab3").addEventListener("change", function() {
    setTimeout(() => {
    window.location.href = "katzen.html";
    },300);
});

document.getElementById("tab4").addEventListener("change", function() {
    setTimeout(() => {
    window.location.href = "isaac.html";
    },300);
});
document.getElementById("tab5").addEventListener("change", function() {
    setTimeout(() => {
    window.location.href = "katzendex.html";
    },300);
});


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

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})