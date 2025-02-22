document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    elements.forEach((el) => observer.observe(el));
});
let currentSlide = 1;
const totalSlides = 5;

function showSlide(slideNumber) {
  document.getElementById(`btn-${slideNumber}`).checked = true;
}

function prevSlide() {
  currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
  showSlide(currentSlide);
}

