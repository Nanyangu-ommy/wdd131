lastModified.js

// Get the current year
const currentYear = new Date().getFullYear();
// Insert current year into the first footer paragraph
document.querySelector("footer p").innerHTML = `&copy; ${currentYear} 🌸 Omega Ommy Nanseta 🌸 Malawi`;
// Get last modified date
const lastModified = document.lastModified;
// Insert last modified into the second footer paragraph
document.getElementById("last-modified").textContent = lastModified;


