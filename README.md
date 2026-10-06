# 📱 Mobile Store - MEAN Stack Application

An elegant, full-stack web application for managing and purchasing mobile devices. Built with the **MEAN** stack (MongoDB, Express.js, Angular, Node.js), featuring a modern, vibrant UI design.

## ✨ Features

- **Storefront:** Browse a beautifully designed catalog of mobile devices.
- **Admin Panel:** Easily add new mobile phones to the database via an interactive modal form.
- **Responsive Design:** A fully responsive UI leveraging CSS grid, flexbox, and modern aesthetic principles.
- **REST API:** Robust backend providing CRUD operations for mobile devices.
- **Database:** MongoDB integration for persistent storage of product data.

## 🚀 Tech Stack

- **Frontend:** Angular 17+ (Standalone Components)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Styling:** Vanilla CSS 

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (Running locally or MongoDB Atlas)
- Angular CLI

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/mobile-store.git
cd mobile-store
```

### 2. Backend Setup
```bash
cd backend
npm install

# Start the backend server (runs on http://localhost:3000)
node server.js
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Start the Angular development server (runs on http://localhost:4200)
npm start
```

## 📂 Project Structure

```text
mobile-store/
├── backend/               # Node.js + Express API
│   ├── models/            # Mongoose models (Mobile.js)
│   ├── server.js          # Entry point and route definitions
│   └── seed.js            # Database seeding script
│
└── frontend/              # Angular application
    ├── src/
    │   ├── app/           # Components and Services
    │   ├── assets/        # Static assets (images, etc.)
    │   └── styles.css     # Global styles
    └── angular.json       # Angular configuration
```

## 🤝 Contributing
Contributions, issues and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
