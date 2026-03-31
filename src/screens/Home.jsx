import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="bg-[#121116] text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-5 pb-32 px-6 overflow-hidden">
        {/* Ambient Glow background */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/5 backdrop-blur-md">
            <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">
              ✨ The Hive is Now Open
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            STAY <span className="text-yellow-500 italic">SHARP.</span> <br />
            SHOP <span className="underline underline-offset-8 decoration-yellow-500/40">SMART.</span>
          </h1> 
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
            Experience the next generation of digital commerce. Premium curated products 
            delivered at the speed of a bee's wing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={"/products"} className="cursor-pointer px-10 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Explore Collection
            </Link>
            <Link to={"/products"} className="cursor-pointer px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl font-bold hover:bg-white/10 transition-all">
              View Deals
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS / FEATURES SECTION */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", val: "50k+" },
            { label: "Products", val: "12k+" },
            { label: "Fast Delivery", val: "24h" },
            { label: "Satisfaction", val: "99%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-3xl font-black text-yellow-500">{stat.val}</h3>
              <p className="text-slate-500 text-sm uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BENTO GRID CATEGORIES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black mb-2">The Hive Categories</h2>
            <p className="text-slate-500">Pick your niche and start exploring.</p>
          </div>
          <button className="hidden md:block text-yellow-500 font-bold hover:underline">View All &rarr;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[500px]">
          <div className="md:col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 group cursor-pointer overflow-hidden relative">
            <h3 className="text-3xl font-bold z-10 relative">Elite Electronics</h3>
            <p className="text-slate-400 z-10 relative">Upgrade your setup.</p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl group-hover:bg-yellow-500/40 transition duration-500" />
          </div>

          <div className="md:col-span-3 bg-[#1e1d23] border border-white/5 rounded-3xl p-8 group cursor-pointer hover:border-yellow-500/50 transition">
            <h3 className="text-3xl font-bold">Streetwear</h3>
            <p className="text-slate-400">Bee stylish, bee bold.</p>
          </div>

          <div className="md:col-span-2 bg-yellow-500 text-black rounded-3xl p-8 group cursor-pointer">
            <h3 className="text-2xl font-black">Flash Sales</h3>
            <p className="font-medium">Ends in 02:45:00</p>
          </div>

          <div className="md:col-span-4 bg-white/5 border border-white/5 rounded-3xl p-8 flex items-center justify-between group cursor-pointer">
            <div>
              <h3 className="text-2xl font-bold">Home Essentials</h3>
              <p className="text-slate-400">Minimalist & Modern.</p>
            </div>
            <div className="text-4xl group-hover:translate-x-2 transition tracking-tighter">🚀</div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION (CTA) SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-yellow-500 to-orange-400 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3" />

          <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-8">
            Ready to join the <br /> fastest growing hive?
          </h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto font-medium">
            Subscribe now for early access to "Honeycomb Drops" and 20% off your first order.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-2xl bg-black text-white outline-none focus:ring-2 focus:ring-white/50 transition"
            />
            <button className="px-8 py-4 bg-black text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition">
              Join Now
            </button>
          </form>
        </div>
      </section>
      
    </div>
  );
};

export default Home;