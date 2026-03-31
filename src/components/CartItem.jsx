import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 bg-white/3 border border-white/10 p-4 rounded-2xl hover:border-yellow-500/20 transition-all duration-300">
      
      {/* 1. Product Image */}
      <div className="w-24 h-24 bg-white rounded-xl p-2 shrink-0">
        <img 
          src={item.images[0]} 
          alt={item.title} 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* 2. Product Details */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-white font-bold text-sm md:text-base line-clamp-1">
          {item.title}
        </h3>
        <p className="text-yellow-500 font-black mt-1 text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <p className="text-slate-500 text-[10px] uppercase mt-1">
          Unit Price: ${item.price}
        </p>
      </div>

      {/* 3. Quantity Controls */}
      <div className="flex items-center gap-4 bg-black/40 px-3 py-2 rounded-xl border border-white/5">
        <button onClick={() => updateCart(item.id, -1)}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-yellow-500 hover:text-black transition-colors text-white font-bold"
        >
          -
        </button>
        
        <span className="text-white font-black w-4 text-center">
          {item.quantity}
        </span>

        <button 
          onClick={() => updateCart(item.id, 1)}
          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-yellow-500 hover:text-black transition-colors text-white font-bold"
        >
          +
        </button>
      </div>

      {/* 4. Remove Button */}
      <button 
        onClick={() => removeFromCart(item.id)}
        className="p-2 text-slate-500 hover:text-red-500 transition-colors"
        title="Remove from Hive"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </button>

    </div>
  );
};

export default CartItem;