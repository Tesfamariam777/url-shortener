const Url = require('../models/Url');
const generateShortCode = require('../utils/generateShortCode');

const createShortUrl = async (originalUrl, baseUrl) => {
  // Check if URL already exists
  const existing = await Url.findOne({ originalUrl });
  if (existing) {
    return `${baseUrl}/${existing.shortCode}`;
  }

  // Generate unique short code
  let shortCode;
  let exists = true;
  while (exists) {
    shortCode = generateShortCode();
    exists = await Url.findOne({ shortCode });
  }

  // Save new URL mapping
  const newUrl = new Url({ originalUrl, shortCode });
  await newUrl.save();

  return `${baseUrl}/${shortCode}`;
};

const getOriginalUrl = async (shortCode) => {
  // Find the original URL by short code
  const url = await Url.findOne({ shortCode });
  if (!url) {
    throw new Error('URL not found');
  }   
  // Redirect to the original URL
  return url.originalUrl; 
}

module.exports = { createShortUrl, getOriginalUrl };
