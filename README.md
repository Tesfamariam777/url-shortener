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
git clone https://github.com/Tesfamariam777/url-shortener.git
cd url-shortener
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root directory:
MONGO_URI=your_mongodb_connection_string
PORT=5000

### 4. Start The Server
```bash
npm run dev
```

---

## 📬 API Endpoints
POST /api/shorten
Create a new short URL.

Request Body:
```bash
{
  "longUrl": "https://example.com"
}
```
```bash
Response:
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

GET /:shortCode
Redirects the user to the original URL.

Example:
```bash
GET http://localhost:5000/abc123
→ Redirects to https://example.com
```
---

## 📌 Future Improvements
- Click analytics (tracking total clicks, timestamps)

- Custom short codes

- Expiration dates

- Rate limiting / IP throttling

- Frontend UI

---

## 📄 License
This project is licensed under the MIT License.




