const { createShortUrl, getOriginalUrl } = require('../services/urlService');

exports.shortenUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl || !/^https?:\/\/.+/.test(longUrl)) {
      return res.status(400).json({ error: 'Invalid or missing URL' });
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const shortUrl = await createShortUrl(longUrl, baseUrl);

    return res.status(201).json({ shortUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
exports.redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const originalUrl = await getOriginalUrl(shortCode);

    if (!originalUrl) {
      return res.status(404).json({ error: 'URL not found' });
    }

    return res.redirect(originalUrl);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
