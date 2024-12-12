// Form Validation
function validateContactForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  let isValid = true;

  // Name Validation
  if (name.value.trim() === '') {
      displayError(name, 'Name is required');
      isValid = false;
  } else if (name.value.trim().length < 2) {
      displayError(name, 'Name must be at least 2 characters');
      isValid = false;
  } else {
      clearError(name);
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
      displayError(email, 'Please enter a valid email address');
      isValid = false;
  } else {
      clearError(email);
  }

  // Message Validation
  if (message.value.trim() === '') {
      displayError(message, 'Message is required');
      isValid = false;
  } else if (message.value.trim().length < 10) {
      displayError(message, 'Message must be at least 10 characters');
      isValid = false;
  } else {
      clearError(message);
  }

  return isValid;
}

// Error Display Function
function displayError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  input.classList.add('error');
}

// Clear Error Function
function clearError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = '';
  input.classList.remove('error');
}

// Add Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          if (!validateContactForm()) {
              e.preventDefault();
          } else {
              alert('Form submitted successfully!');
          }
      });
  }
});
