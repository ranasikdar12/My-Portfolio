/* ==========================
   Scroll Fade-Up Animation
========================== */
const faders = document.querySelectorAll('.fade-up');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


/* ==========================
   Hero Slideshow
========================== */
const slides = document.querySelectorAll('#hero img.slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000); // Change slide every 5 seconds


/* ==========================
   Gallery Lightbox
========================== */
const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox-overlay');

    const lightboxImage = document.createElement('img');
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    overlay.appendChild(lightboxImage);

    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});


/* ==========================
   Profile Glow Animation
========================== */
const profile = document.querySelector(".profile-light");
const colors = ["#ff4c60", "#4caf50", "#2196f3", "#ff9800", "#9c27b0"];
let colorIndex = 0;

setInterval(() => {
  profile.style.boxShadow = `
    0 0 15px ${colors[colorIndex]},
    0 0 30px ${colors[colorIndex]},
    0 0 45px ${colors[colorIndex]}
  `;
  profile.style.border = `4px solid ${colors[colorIndex]}`;
  colorIndex = (colorIndex + 1) % colors.length;
}, 800);


/* ==========================
   Floating Lights Effect
========================== */
const numLights = 5;

for (let i = 0; i < numLights; i++) {
  const light = document.createElement("div");
  light.classList.add("light");

  // Random position
  light.style.top = Math.random() * window.innerHeight + "px";
  light.style.left = Math.random() * window.innerWidth + "px";

  // Random animation duration
  light.style.animationDuration = 10 + Math.random() * 10 + "s";

  // Random size
  const size = 50 + Math.random() * 150;
  light.style.width = size + "px";
  light.style.height = size + "px";

  document.body.appendChild(light);
}


/* ==========================
   Skills Progress Animation
========================== */
const progressBars = document.querySelectorAll('.progress');

const animateSkills = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.getAttribute('data-width');
      observer.unobserve(entry.target);
    }
  });
};

const skillObserver = new IntersectionObserver(animateSkills, { threshold: 0.3 });
progressBars.forEach(bar => skillObserver.observe(bar));


/* ==========================
   Reviews Progress Animation
========================== */
const reviewBars = document.querySelectorAll('.review-progress');

const reviewObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.getAttribute('data-width');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

reviewBars.forEach(bar => reviewObserver.observe(bar));
