document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("section").forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, index * 500);
    });
});