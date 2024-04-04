function validateForm() {
  // Get form elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  const subject = document.getElementById('subject');

  // Check if name is empty
  if (name.value.trim() === '') {
    alert('Please enter your name.');
    name.focus();
    return false;
  }

  // Check if email is valid format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert('Please enter a valid email address.');
    email.focus();
    return false;
  }

  // Check if phone number is in the format XXX-XXX-XXXX (optional validation)
  if (phone.value !== '' && !/^\d{3}-\d{3}-\d{4}$/.test(phone.value)) {
    alert('Please enter a valid phone number in the format XXX-XXX-XXXX.');
    phone.focus();
    return false;
  }

  // Check if message is empty
  if (message.value.trim() === '') {
    alert('Please enter a message.');
    message.focus();
    return false;
  }

  // Check if subject is selected
  if (subject.value === '') {
    alert('Please select a subject.');
    subject.focus();
    return false;
  }

  // If all validations pass, submit the form
  return true;
}