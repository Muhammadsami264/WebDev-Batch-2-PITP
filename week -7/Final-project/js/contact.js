// contact.js - Contact form validation and functionality

// Form validation
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea');

  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    input.addEventListener('input', function() {
      if (this.classList.contains('is-invalid')) {
        validateField(this);
      }
    });
  });

  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isFormValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Simulate form submission
      showAlert('Message sent successfully! We will get back to you soon.', 'success');
      form.reset();
      inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
      });
    } else {
      showAlert('Please check the form for errors.', 'danger');
    }
  });
}

// Validate individual field
function validateField(field) {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';

  field.classList.remove('is-valid', 'is-invalid');

  switch (field.id) {
    case 'name':
      if (value === '') {
        isValid = false;
        errorMessage = 'Name is required.';
      }
      break;
    case 'email':
      if (value === '') {
        isValid = false;
        errorMessage = 'Email is required.';
      } else if (!value.includes('@') || !value.includes('.')) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
      }
      break;
    case 'subject':
      if (value === '') {
        isValid = false;
        errorMessage = 'Subject is required.';
      }
      break;
    case 'message':
      if (value.length < 10) {
        isValid = false;
        errorMessage = 'Message must be at least 10 characters long.';
      }
      break;
  }

  if (isValid) {
    field.classList.add('is-valid');
  } else {
    field.classList.add('is-invalid');
    field.setAttribute('title', errorMessage);
  }

  return isValid;
}

// Initialize contact form
document.addEventListener('DOMContentLoaded', function() {
  setupContactForm();
});