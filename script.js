// Get elements
const learnMoreButton = document.getElementById('learn-more');
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit');

// Add event listeners
learnMoreButton.addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  aboutSection.classList.add('fade-in');
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  // Handle form data submission
  console.log(formData);
  submitButton.disabled = true;
  submitButton.textContent = 'Submitting...';
  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = 'Submit';
  }, 2000);
});

// Initialize fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.getElementById('home');
  homeSection.classList.add('fade-in');
});