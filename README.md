
# LinkUp Chat Application

Welcome to **LinkUp**! A modern, real-time chat application where users can create rooms and connect with others. Built with the **MERN stack** and **Socket.IO**, LinkUp provides a seamless chat experience with dynamic online user tracking and a sleek interface powered by **DaisyUI** and **Tailwind CSS**.

---

## Features

- **Real-Time Messaging**: Messages are delivered instantly using **Socket.IO**.
- **Dynamic Online Users**: Displays the list of users currently active in each room.
- **User-Friendly Interface**: Designed with **Tailwind CSS** and **DaisyUI** for a clean and responsive UI.
- **Cloudinary Integration**: Allows for media uploads in real time.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.IO
- **Database**: MongoDB
- **Media Storage**: Cloudinary

---

## Getting Started

Follow these steps to set up the LinkUp Chat Application locally:

### Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/durvesh7k/LinkUp.git
   cd LinkUp
   ```

2. Set up the `.env` file:
In the `server` directory, create a `.env` file with the following contents:

     ```env
     MONGODB_URI=your-mongodb-uri
     PORT=5001
     JWT_SECRET=your-secret-key

     CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
     CLOUDINARY_API_KEY=your-cloudinary-api-key
     CLOUDINARY_API_SECRET=your-cloudinary-api-secret

     NODE_ENV=development
     ```

3. Build the app:
   ```bash
   npm run build
   ```

5. Start the backend server:
   ```bash
   npm run start
   ```

6. Open `http://localhost:5173` in your browser to start using LinkUp.

---

## Screenshots

### Dashboard
![Dashboard](assets/screenshots/dashboard.png)

### Room Creation
![Room Creation](assets/screenshots/room_creation.png)

### Chat Interface
![Chat Interface](assets/screenshots/chat_interface.png)

---

## Future Enhancements

- **Room Creation**: Introduce options for creating and customizing rooms, such as setting access levels, themes, or moderators.
- **Room Moderation**: Allow room creators to moderate discussions and manage participants.
- **Typing Indicators**: Show real-time typing notifications for a better user experience.
- **Media Sharing**: Enable users to share videos, and files within the chat.
- **Push Notifications**: Notify users about new messages even when they’re offline.

## License

This project is licensed under the [MIT License](LICENSE).