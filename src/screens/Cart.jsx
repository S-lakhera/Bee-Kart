import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useCart();
  
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
 
  return (
    <div className="bg-[#121116] min-h-screen p-8 text-white">
      <h1 className="text-4xl font-black mb-10">Your Hive <span className="text-yellow-500">({cart.length})</span></h1>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {cart.length > 0 ? (
          <>
            {cart.map(item => <CartItem key={item.id} item={item} />)}
            
            <div className="mt-10 p-6 border-t border-white/10 flex justify-between items-center">
               <span className="text-slate-400 font-bold uppercase tracking-widest">Total Honey</span>
               <span className="text-3xl font-black text-yellow-500">${subtotal.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <p className="text-center text-slate-500 py-20">The hive is empty. Go gather some products!</p>
        )}
      </div>
    </div>
  );
};

export default Cart
