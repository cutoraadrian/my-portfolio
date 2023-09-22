// Get references to the elements
const hamburgerButton = document.getElementById('hamburger');
const navLinks = document.querySelector('.navlinks');

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
    // Toggle the "active" class on the navlinks element
    navLinks.classList.toggle('active');
});
// Get references to the button and the resume section
const resumeButton = document.getElementById('resume-button');
const resumeSection = document.querySelector('.resume');

// Add a click event listener to the button
resumeButton.addEventListener('click', () => {
    // Toggle the display style of the resume section
    if (resumeSection.style.display === 'none' || resumeSection.style.display === '') {
        resumeSection.style.display = 'block';
    } else {
        resumeSection.style.display = 'none';
    }
});
const contactButton = document.getElementById('contactButton');
const contactSection = document.getElementById('contactSection');

// Add a click event listener to the button
contactButton.addEventListener('click', () => {
    // Toggle the visibility of the contact section
    if (contactSection.style.display === 'block') {
        contactSection.style.display = 'none';
    } else {
        contactSection.style.display = 'block';
    }
});