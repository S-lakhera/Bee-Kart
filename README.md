# 🐝 Bee-Kart | Premium E-Commerce Platform

Bee-Kart is a modern, dark-themed e-commerce application designed to demonstrate advanced React patterns. This project focuses on seamless navigation, global state management for a shopping cart, and asynchronous data handling.

![Bee-Kart Preview](https://via.placeholder.com/800x400/121116/EAB308?text=Bee-Kart+Dark+Mode+UI)

## 🚀 Key Features

- **Dynamic Routing:** Implemented using `react-router-dom` for smooth, multi-page navigation (Home, Products, About, Cart).
- **Global Cart Management:** Built with **React Context API** to manage cart state (add/remove/update) globally without prop drilling.
- **Async Data Fetching:** Utilizes **Axios** to fetch product data from a REST API, featuring loading states and error handling.
- **Sleek Dark UI:** A custom-designed interface using **Tailwind CSS** with a `#121116` background and "Honey" (Yellow-500) accents.
- **Interactive Animations:** Advanced CSS transitions and pseudo-element (`::after`) animations for a premium user experience.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Routing:** React Router v6
- **State Management:** React Context API
- **Styling:** Tailwind CSS
- **API Client:** Axios
- **Icons:** Lucide React / React Icons

## 📂 Project Structure

```text
src/
├── context/         # CartContext & Provider
├── components/      # Reusable UI (Navbar, ProductCard)
├── pages/           # Home, Products, Cart, About
├── services/        # Axios API configurations
└── App.js           # Router configuration