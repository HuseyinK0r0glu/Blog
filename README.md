# Blog App

A **React Native** application to create, edit, and delete blog posts. Built using **React Navigation**, **Axios**, and **json-server** for API mocking.

## 🚀 Features
- 📚 Create, edit, and delete blog posts
- 🌍 Fetch and display a list of blog posts from the server
- 🔥 Easy-to-use interface for adding, editing, and removing blog posts
- ⚡ Fast and responsive UI with optimized API calls

---

## 🏗 Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/HuseyinK0r0glu/Blog.git
cd Blog
```
2️⃣ Install Dependencies 

npm install or yarn install

3️⃣ Start the Development Server 

expo start 

4️⃣ Run the json-server (API)

npm run db

5️⃣ Optionally Tunnel with Ngrok

npm run tunnel

📂 Folder Structure

Blog/
│── src/
│   ├── components/       # Reusable UI components (e.g., buttons, inputs)
│   ├── screens/          # Application screens (e.g., Home, CreatePost)
│   ├── api/              # API calls (Axios for interacting with json-server)
│   ├── navigation/       # Navigation setup (React Navigation)
│── assets/               # Static assets (images, icons)
│── App.js                # Entry point of the app
│── package.json          # Project dependencies and scripts
│── db.json               # Mocked database for json-server
│── README.md             # Project documentation

🛠 Technologies Used
- React Native
- Expo
- React Navigation
- Axios
- json-server (Mock API)
- Ngrok (Optional: for tunneling)

📄 API Endpoints
The backend API is mocked using json-server, and here are the available endpoints:

- GET /blogposts: Fetch all blog posts
- POST /blogposts: Create a new blog post
- PUT /blogposts/:id: Edit a specific blog post
- DELETE /blogposts/:id: Delete a specific blog post
