import React from 'react';
import { useCart } from '../context/CartContext'; // Adjust path based on your folder

const ProductCard = ({ product }) => {
  const { addToCart, cart, updateCart } = useCart();

  const cartItem = cart.find((item) => item.id == product.id)
  const isInCart = !!cartItem
  
  return (
    <div className="group relative bg-white/[0.03] border border-white/10 rounded-3xl p-4 transition-all duration-500 hover:bg-white/[0.06] hover:border-yellow-500/30 hover:-translate-y-2 flex flex-col justify-between overflow-hidden">
      
      {/* 1. IMAGE CONTAINER */}
      <div className="relative w-full h-52 bg-white rounded-2xl p-6 overflow-hidden flex items-center justify-center">
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="h-full object-contain group-hover:scale-120 transition-transform duration-500" 
        />
        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-black/80 text-yellow-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-yellow-500/20 backdrop-blur-md">
          {product.category}
        </span>
      </div>

      {/* 2. PRODUCT INFO */}
      <div className="mt-5 px-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-white font-bold text-sm line-clamp-2 leading-snug">
            {product.title}
          </h3>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Price</p>
            <span className="text-xl font-black text-yellow-500">
              ${product.price}
            </span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg">
            <span className="text-yellow-500 text-xs font-bold">★</span>
            <span className="text-yellow-500 text-xs font-bold">{product.rating || '4.5'}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 h-12 flex items-center justify-center">
        {!isInCart ? (
          // OPTION A: Show "Add to Hive"
          <button 
            onClick={() => addToCart(product)}
            className="w-full h-full bg-yellow-500 text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-yellow-400 active:scale-95 transition-all"
          >
            Add to Hive
          </button>
        ) : (
          // OPTION B: Show Quantity Controls
          <div className="w-full h-full flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-2">
            <button 
              onClick={() => updateCart(product.id, -1)}
              className="w-10 h-8 flex items-center justify-center bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400"
            >
              -
            </button>
            
            <span className="text-white font-black text-lg">
              {cartItem.quantity}
            </span>

            <button 
              onClick={() => updateCart(product.id, 1)}
              className="w-10 h-8 flex items-center justify-center bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* Subtle Glow Background (only visible on hover) */}
      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-yellow-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProductCard;