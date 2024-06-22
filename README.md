# Chat App

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for real-time communication.

## Features

- User authentication and authorization
- Real-time messaging with Socket.IO
- Chat notifications using react-toastify
- User avatars and profile pictures
- Message persistence with MongoDB

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Real-Time Communication:** Socket.IO
- **Notifications:** react-toastify

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chat-app.git
    cd chat-app
    ```

2. Install dependencies for the backend:
    ```sh
    cd backend
    npm install
    ```

3. Install dependencies for the frontend:
    ```sh
    cd ../frontend/vite-project
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the `backend` directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Run the application:
    ```sh
    cd ../backend
    npm run build
    npm run server
    ```

The backend server will start on port 5000 and the frontend development server will start on port 3000.

## Usage

1. Register a new user or log in with existing credentials.
2. Start a new conversation by selecting a user from the list.
3. Send messages in real-time and receive notifications for new messages.

## Project Structure

- `backend`: Contains the Node.js/Express backend
  - `models`: Mongoose models
  - `routes`: Express routes
  - `controllers`: Request handlers
  - `middlewares`: Custom middleware functions
  - `server.js`: Entry point for the backend server

- `frontend/vite-project`: Contains the React frontend
  - `src/components`: React components
  - `src/context`: Context providers for authentication and socket
  - `src/zustand`: Zustand store for managing conversation state
  - `src/pages`: Application pages (e.g., Login, Signup, Chat)
  - `src/App.jsx`: Main application component
  - `src/index.css`: Global styles

## Scripts

- `npm run server`: Start the backend server with nodemon for development
- `npm run start`: Start the backend server
- `npm run build`: Install dependencies and build the frontend
- `npm run test`: Run tests (if applicable)

## Dependencies

### Backend

- bcrypt
- cookie-parser
- dotenv
- express
- jsonwebtoken
- mongodb
- mongoose
- nodemon
- socket.io

### Frontend

- react
- react-dom
- react-router-dom
- react-toastify
- zustand

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.IO](https://socket.io/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)

## Contact

For any questions or feedback, please contact me at [manabupadhyay123@gmail.com].
