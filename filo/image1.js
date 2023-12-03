console.log("image1.js loaded");

document.addEventListener("DOMContentLoaded", function () {
    // Get the header, image, and other elements
    const header = document.querySelector(".header");
    const fixedBackground = document.getElementById("fixed-background");
    const sections = document.querySelectorAll('#mission');
    const contactSection = document.querySelector('#contact');
    const downloadButton = document.getElementById('download');
    const windowHeight = window.innerHeight;

    window.addEventListener("scroll", () => {
        revealImage();
    });

    function revealImage() {
        const scrollPosition = window.scrollY;

        // Calculate the opacity for the image
        const imageOpacity = 1 - scrollPosition / windowHeight;

        // Set the image opacity
        fixedBackground.style.opacity = imageOpacity;

        // Calculate the opacity for the header
        const headerOpacity = Math.min(1, scrollPosition / (windowHeight * 0.5));
        header.style.backgroundColor = `rgba(255, 255, 255, ${headerOpacity})`;

        // Calculate the opacity for the button
        const buttonOpacity = 1 - scrollPosition / (windowHeight * 4);
        downloadButton.style.opacity = buttonOpacity;

        // Reveal other sections when in view
        sections.forEach(function (section) {
            const sectionOffset = section.offsetTop;

            if (scrollPosition > sectionOffset - windowHeight) {
                section.classList.add('active');
            }
        });

        // Check if the contact section is in view
        const contactRect = contactSection.getBoundingClientRect();

        if (contactRect.top < windowHeight && contactRect.bottom >= 0) {
            // Calculate the opacity based on the position of the contact section
            const opacity = 2 - (contactRect.bottom / windowHeight);
            const backgroundColor = `rgba(50, 106, 176, ${opacity})`;

            // Set the background color of the body
            document.body.style.backgroundColor = backgroundColor;
        } else {
            // Set the background color to white
            document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        }
    }
});
