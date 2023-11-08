console.log("image1.js loaded");

document.addEventListener("DOMContentLoaded", function () {
    // Get the header, image, and other elements
    const header = document.querySelector(".header");
    const fixedBackground = document.getElementById("fixed-background");
    const sections = document.querySelectorAll('#mission');
    const windowHeight = window.innerHeight;

    // Add a reference to the contact section
    const contactSection = document.querySelector('#contact');

    // Call revealImage initially to check if the section is in view on page load
    revealImage();
    handleContactIntersection();

    window.addEventListener("scroll", () => {
        revealImage();
        handleContactIntersection();
    });

    function revealImage() {
        const scrollPosition = window.scrollY;

        // Calculate the opacity for the image
        const imageOpacity = 1 - scrollPosition / windowHeight;

        // Set the image opacity
        fixedBackground.style.opacity = imageOpacity;

        // Calculate the opacity for the header
        const headerOpacity = Math.min(1, scrollPosition / windowHeight);

        // Set the header background opacity
        header.style.backgroundColor = `rgba(255, 255, 255, ${headerOpacity}`;

        // Add a box shadow to the header as it appears
        const boxShadowOpacity = headerOpacity * 0.2; // Adjust the opacity as needed
        header.style.boxShadow = `0 2px 4px rgba(0, 0, 0, ${boxShadowOpacity})`;

        // Reveal other sections when in view
        sections.forEach(function (section) {
            const sectionOffset = section.offsetTop;

            if (scrollPosition > sectionOffset - windowHeight) {
                section.classList.add('active');
            }
        });
    }

    function handleContactIntersection() {
        // Get the bounding rectangle of the contact section
        const contactRect = contactSection.getBoundingClientRect();

        // Check if the contact section is in the viewport
        if (contactRect.top < windowHeight && contactRect.bottom >= 0) {
            // Calculate the opacity based on the position of the contact section
            const opacity = 1 - (contactRect.bottom / windowHeight);
            const backgroundColor = `rgba(50, 106, 176, ${opacity})`;

            // Set the background color of the body
            document.body.style.backgroundColor = backgroundColor;
        }
    }
});
