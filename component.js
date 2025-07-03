// Create a reusable component for the contact form
class ContactForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.submitButton = formElement.querySelector('#submit');
    this.formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const formData = new FormData(this.formElement);
    // Handle form data submission
    console.log(formData);
    this.submitButton.disabled = true;
    this.submitButton.textContent = 'Submitting...';
    setTimeout(() => {
      this.submitButton.disabled = false;
      this.submitButton.textContent = 'Submit';
    }, 2000);
  }
}

// Create a new instance of the ContactForm component
const contactFormComponent = new ContactForm(document.getElementById('contact-form'));