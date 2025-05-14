# 📎 URL Shortener API

A simple Node.js + Express.js + MongoDB based URL shortening service. It allows users to shorten long URLs and redirect back to the original URL using the generated short code.

---

## 🚀 Features

- Shorten any valid HTTP/HTTPS URL
- Automatically redirects when short URL is visited
- Prevents duplicate entries
- Generates unique short codes
- RESTful API design

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- nodemon (for development)

---

## 📁 Core Project Structure

# 📎 URL Shortener API

A simple Node.js + Express.js + MongoDB based URL shortening service. It allows users to shorten long URLs and redirect back to the original URL using the generated short code.

---

## 🚀 Features

- Shorten any valid HTTP/HTTPS URL
- Automatically redirects when short URL is visited
- Prevents duplicate entries
- Generates unique short codes
- RESTful API design

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- nodemon (for development)

---

## 📁 Core Project Structure
# 📎 URL Shortener API

A simple Node.js + Express.js + MongoDB based URL shortening service. It allows users to shorten long URLs and redirect back to the original URL using the generated short code.

---

## 🚀 Features

- Shorten any valid HTTPS URL
- Automatically redirects when short URL is visited
- Prevents duplicate entries
- Generates unique short codes
- RESTful API design

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv
- nodemon (for development)

---

## 📁 Core Project Structure

url-shortener/
src/
├── config/
│ └── db.js
├── controllers/
│ └── urlController.js
├── models/
│ └── Url.js
├── routes/
│ └── urlRoutes.js
├── services/
│ └── urlService.js
├── utils/
│ └── generateShortCode.js
├── server.js


---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

npm install

3. Setup Environment Variables
Create a .env file in the root directory:
MONGO_URI=your_mongodb_connection_string
PORT=5000

npm run dev

📬 API Endpoints
POST /api/shorten
Create a new short URL.

Request Body:

{
  "longUrl": "https://example.com"
}
Response:
{
  "shortUrl": "http://localhost:5000/abc123"
}

GET /:shortCode
Redirects the user to the original URL.

Example:

GET http://localhost:5000/abc123
→ Redirects to https://example.com


📌 Future Improvements
- Click analytics (tracking total clicks, timestamps)

- Custom short codes

- Expiration dates

- Rate limiting / IP throttling

- Frontend UI

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgments
Made with ❤️ using Node.js and MongoDB.



