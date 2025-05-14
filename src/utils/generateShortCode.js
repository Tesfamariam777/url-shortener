const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateShortCode(length = 6) {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

module.exports = generateShortCode;

// This function generates a random string of characters to be used as a short code for URLs.
// The default length is set to 6 characters, but this can be adjusted as needed.   