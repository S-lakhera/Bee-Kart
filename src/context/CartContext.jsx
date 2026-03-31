import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : []
    })

    const addToCart = (product) => {
        setCart((prevCart) => {
            let existing = prevCart.find((item) => item.id === product.id)
            if(existing) return prevCart;
            return [...cart, {...product,quantity:1}]
        })
    }

    const removeFromCart = (id) => {
        let filteredCart = cart.filter((elem) => elem.id !== id)
        setCart(filteredCart)
    }

    const updateCart = (id, change) => {
        setCart((prevCart) => {
            // 1. Create the new array by mapping
            const updatedCart = prevCart.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + change };
                }
                return item;
            });

            const finalCart = updatedCart.filter((item) => item.quantity > 0);

            return finalCart;
        });
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCart }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("usecart must be used within the CartProvider")
    }
    return context;
}