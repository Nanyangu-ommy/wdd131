// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather data 
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

// Wind Chill Calculation 
function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

// Apply conditions for valid windchill
let windChill = "N/A";
if (temp <= 10 && wind > 4.8) {
  windChill = calculateWindChill(temp, wind) + "°C";
}

document.getElementById("windchill").textContent = windChill;
