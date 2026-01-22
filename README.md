# 📝 Simple Note Taking App (MERN)

A lightweight and modern Note Taking App built with the MERN stack (MongoDB, Express, React, Node.js). It supports full CRUD operations for managing notes, includes rate limiting via Upstash Redis, and is deployed on Render's free tier.

🌐 **Live Demo:** [https://simple-note-taking-app-mern.onrender.com](https://simple-note-taking-app-mern.onrender.com)

---

## 🚀 Features

- ✏️ Create, Read, Update, Delete notes easily
- ⚡ Rate limiting powered by Upstash Redis to prevent abuse
- 🔐 Environment-based configuration (development / production)
- 🌈 Built with Vite for a fast and optimized React frontend
- 🧠 RESTful API built with Express and Node.js
- ☁️ Deployed on Render (Free Plan)
- 💾 MongoDB for data persistence

---

## 🧩 Tech Stack

| Layer          | Technology                    |
|----------------|-------------------------------|
| Frontend       | React + Vite + Axios          |
| Backend        | Node.js + Express             |
| Database       | MongoDB Atlas                 |
| Rate Limiting  | Upstash Redis                 |
| Deployment     | Render                        |
| Dev Tools      | Nodemon, dotenv, CORS         |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/note-taking-app.git
cd note-taking-app
```

### 2️⃣ Install dependencies
```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3️⃣ Set up environment variables

Create a `.env` file inside the `backend` folder:
```env
PORT=3000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### 4️⃣ Build frontend
```bash
npm run build
```

This runs:
```bash
npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend
```

### 5️⃣ Start the server
```bash
npm run start
```

The backend will run on `http://localhost:3000`, and in production mode, it will serve the Vite frontend automatically.

---

## 🧠 API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/api/notes`      | Fetch all notes          |
| POST   | `/api/notes`      | Create a new note        |
| PUT    | `/api/notes/:id`  | Update an existing note  |
| DELETE | `/api/notes/:id`  | Delete a note            |

All routes are rate-limited via Upstash middleware.

---

## 🧱 Project Structure
```
note-taking-app/
├── backend/
│   ├── src/
│   │   ├── server.js         # Main Express app
│   │   ├── routes/notes.js   # Notes API routes
│   │   ├── models/Note.js    # Mongoose model
│   │   ├── middleware/       # Rate limiter, error handler
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── vite.config.js
│   └── dist/                 # Production build (auto-created)
├── package.json
└── README.md
```

---

## ⚡ Deployment

This project is deployed on **Render** (free plan).

To deploy:

1. Push your code to GitHub
2. Connect the repository to Render
3. Set your environment variables in Render Dashboard
4. Render will build and serve both frontend and backend automatically

---

## 🧰 Development Commands

| Command                          | Description                                      |
|----------------------------------|--------------------------------------------------|
| `npm run dev --prefix backend`   | Start backend with nodemon                       |
| `npm run dev --prefix frontend`  | Start frontend with Vite                         |
| `npm run build`                  | Build frontend for production                    |
| `npm run start`                  | Start backend and serve frontend (production)    |

---

## 🛡️ Security & Rate Limiting

This project integrates **Upstash Redis** for rate limiting:

- Prevents excessive API calls
- Protects against DoS attacks
- Dynamically configured with environment variables

---

## 📸 Preview

You can try the live version here:  
👉 [https://simple-note-taking-app-mern.onrender.com](https://simple-note-taking-app-mern.onrender.com)

---

## 🧑‍💻 Author

**Deneth Rajapaksha**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).