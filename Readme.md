Explore Blog 🌍✍️

A blogging platform where users can share their travel experiences, explore posts about various places, and interact with the community. Built using the MERN stack.

Features 🚀

User registration and login

Create and upload blog posts with images

View, like, and explore other users' posts

Search posts by location

User profile with their uploaded posts

Secure authentication using access tokens

Cloud image storage for post images

Technologies Used 🛠️

Frontend:

React.js

Tailwind CSS

Backend:

Node.js

Express.js

MongoDB (local database)

Additional Tools:

Cloudinary (for image uploads)

Axios (for API requests)

Installation & Setup 🛠️

Prerequisites:

Node.js installed

MongoDB installed locally

A Cloudinary account for image storage

Steps:

Clone the Repository:

git clone https://github.com/yourusername/explore-blog.git
cd explore-blog

Backend Setup:

cd backend
npm install

Create a .env file in the backend directory and add:

PORT=8080
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

Start the backend server:

npm run dev

Frontend Setup:

cd ../frontend
npm install

Start the frontend server:

npm start

Usage 👨‍💻

Open the frontend in your browser at http://localhost:3000.

Register a new user account.

Log in to access the dashboard.

Create, view, and explore posts.

Search for posts by location.

Project Structure 📂

explore-blog/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
├── README.md
└── .gitignore

Contributing 🤝

Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions.

License 📜

This project is licensed under the MIT License.

Acknowledgments 🌟

Inspiration: The travel blogging community

Tools: MERN stack, Cloudinary, Tailwind CSS

Happy Blogging! 🎉

