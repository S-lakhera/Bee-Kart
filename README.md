# 🐝 Bee-Kart | Premium E-Commerce Platform

Bee-Kart is a modern, stylish e-commerce application designed with a focus on seamless user experience, advanced React patterns, and sleek UI. This project demonstrates robust state management, asynchronous data handling, and a sophisticated dark-themed design.

![Bee-Kart Preview](https://via.placeholder.com/800x400/121116/EAB308?text=Bee-Kart+Dark+Mode+UI)

## ✨ Key Features

- **Storefront & Navigation:** Smooth, multi-page routing via `react-router` (Home, Products, About, Cart/Hive, Auth).
- **Global Cart Management:** Built using the **React Context API** (`CartContext`) to handle adding, updating, and removing items globally, with persistent storage via `localStorage`.
- **Async Product Fetching:** Seamless integration with `dummyjson.com` using **Axios** and a dedicated `ProductContext` wrapper, complete with loading states.
- **Sleek Dark UI:** A custom-designed, premium interface using **Tailwind CSS v4** featuring a `#121116` background and vibrant "Honey" (Yellow-500) accents.
- **Interactive Animations:** Uses backdrop blurring, glassmorphism, advanced CSS transitions, dynamic hover effects, and pseudo-element (`::after`) underline animations.
- **Authentication Pages:** Includes dedicated UI flows for Login and Registration.

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 (via Vite)
- **Routing:** React Router v7
- **State Management:** React Context API
- **Styling:** Tailwind CSS v4
- **API Client:** Axios
- **Code Quality:** ESLint

## 📂 Project Structure

```text
bee-kart/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable UI components (Navbar, Footer, ProductCard, CartItem)
│   ├── context/         # React Contexts (CartContext, ProductContext)
│   ├── routes/          # Application routing configuration (AppRoute)
│   ├── screens/         # Page level components (Home, Products, About, Cart, AuthLayout)
│   ├── App.jsx          # Main App wrapper
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # React application entry point
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd Bee-kart
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

- `npm run dev` - Starts the Vite development server.
- `npm run build` - Builds the application for production.
- `npm run preview` - Locally previews the production build.
- `npm run lint` - Runs ESLint to check for code quality and styling issues.

## 🎨 UI Highlights

- **The Hive:** The shopping cart is uniquely branded as the "Hive", accessible directly from the interactive Navbar.
- **Glassmorphism Navbar:** Features a sticky, frosted-glass header (`backdrop-blur-md bg-[#121116]/80`) that ensures content gracefully slides underneath while scrolling.
- **Custom Highlights:** Buttons with custom shadow glowing effects `shadow-[0_0_15px_rgba(234,179,8,0.2)]` to reinforce the premium feel.

---
*Built with React and Tailwind CSS.*