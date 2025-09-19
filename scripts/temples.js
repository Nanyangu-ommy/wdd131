document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = document.lastModified;



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        if (hamburger.textContent === "☰") {
            hamburger.textContent = "✖";
        } else {
            hamburger.textContent = "☰";
        }
    });
}
