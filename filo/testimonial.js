console.log("testimonial.js loaded");

document.addEventListener("DOMContentLoaded", function() {
  const testimonials = document.querySelector(".testimonials");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const testimonialWidth = testimonials.offsetWidth / 3;
  const totalTestimonials = 5; // The total number of testimonials you have
  let currentIndex = 0;

  function updateTestimonials() {
    testimonials.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
  }

  prevButton.addEventListener("click", function() {
    if (currentIndex === 0) {
      currentIndex = totalTestimonials - 3;
    } else {
      currentIndex--;
    }
    updateTestimonials();
  });

  nextButton.addEventListener("click", function() {
    if (currentIndex === totalTestimonials - 3) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateTestimonials();
  });

  function autoRotateTestimonials() {
    if (currentIndex === totalTestimonials - 3) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateTestimonials();
  }

  // Rotate testimonials automatically every 5 seconds
  setInterval(autoRotateTestimonials, 5000);
});
