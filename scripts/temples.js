document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    const lastModifiedSpan = document.getElementById("lastmodified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});
