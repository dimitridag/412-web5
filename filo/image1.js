console.log("image1.js loaded");

function revealImage() {
    var sections = document.querySelectorAll('#mission');
    var windowHeight = window.innerHeight;

    sections.forEach(function(section) {
        var sectionOffset = section.offsetTop;
        var windowScroll = window.scrollY;

        if (windowScroll > sectionOffset - windowHeight) {
            section.classList.add('active');
        }
    });
}

// Listen for the scroll event and call the revealImage function
window.addEventListener('scroll', revealImage);

// Call revealImage initially to check if the section is in view on page load
window.addEventListener('load', revealImage);
