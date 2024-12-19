export const validateInput = ({ email, username, password }) => {
  const errors = {};

  // Email Validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log("Email being validated:", email); // Debugging: Log the email value
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Username Validation
  const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
  if (!username || !usernameRegex.test(username)) {
    errors.username = 'Username must be 3-15 characters long and alphanumeric.';
  }

  // Password Validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  if (!password || !passwordRegex.test(password)) {
    errors.password =
      'Password must be 8-20 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.';
  }

  // Log errors for debugging
  console.log('Validation Errors:', errors);

  return errors; // Return the error object
};
