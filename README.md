# To-Do App ✅

This is a simple to-do application built using Express.js and MongoDB. The app allows users to create, update, and delete tasks via a simple web interface.

---

## Features ✨

-   ➕ Add new tasks to your to-do list
-   ✏️ Edit existing tasks
-   ❌ Delete tasks
-   👀 View all tasks in a simple user-friendly interface

---

## Prerequisites 📋

Ensure you have the following installed before running the project:

-   [Node.js](https://nodejs.org/) (v14 or later recommended)
-   [MongoDB](https://www.mongodb.com/) (running locally or via a cloud provider)
-   [Git](https://git-scm.com/)

---

## Installation ⚙️

Follow these steps to set up the project:

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd to-do-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    - Create a `.env` file in the root of the project
    - Add the following environment variables:
        ```env
        MONGO_DB_URI=mongodb://localhost:27017/todoapp
        ```

5. **Start the application:**

    ```bash
    npm start
    ```

6. **Open the application in your browser:**
    ```
    http://localhost:3000
    ```

---

## Project Structure 🏗️

```
.
├── public/              # Static files (CSS, JS, images)
├── views/               # HTML templates (EJS files)
├── router/              # Application routes
├── models/              # Database models
├── .env                 # Environment variables
├── index.js             # Entry point of the application
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

---

## Usage 📝

-   Open the web app and start adding tasks.
-   Edit or delete tasks using the respective buttons.

---

## Dependencies 📦

-   **Express.js** - Web framework for Node.js
-   **MongoDB** - NoSQL database
-   **Mongoose** - ODM for MongoDB
-   **EJS** - Templating engine
-   **dotenv** - Manage environment variables
-   **Nodemon** (dev dependency) - Auto-restarts the server during development

---
