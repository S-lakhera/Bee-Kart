import React from 'react';
import { useProduct } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Destructure loading and error from your context
  const { products, loading, error } = useProduct();

  // 1. Handle Loading State (Skeleton or Spinner)
  if (loading) {
    return (
      <div className="min-h-screen bg-[#121116] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-yellow-500/20 border-t-yellow-500 rounded-full animate-spin"></div>
          <p className="text-yellow-500 font-bold tracking-widest animate-pulse">SCOUTING THE HIVE...</p>
        </div>
      </div>
    );
  }

  // 2. Handle Error State (API Failure)
  if (error) {
    return (
      <div className="min-h-screen bg-[#121116] flex items-center justify-center px-6 text-center">
        <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl">
          <h2 className="text-2xl font-black text-red-500 mb-2">Oops! Something went wrong</h2>
          <p className="text-slate-400">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121116] min-h-screen px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-4xl font-black text-white">The Hive <span className="text-yellow-500 italic">Inventory</span></h1>
            <p className="text-slate-500 mt-2">Premium products curated for your lifestyle.</p>
          </div>
          <span className="text-xs font-bold text-slate-600 uppercase tracking-[0.2em]">
            {products?.length || 0} Items Found
          </span>
        </div>

        {/* 3. Handle Corner Case: No Products Available */}
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
            <span className="text-6xl mb-6 block">🐝</span>
            <h2 className="text-2xl font-bold text-white">The Hive is currently empty</h2>
            <p className="text-slate-500 mt-2">Check back later for new honey drops!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;