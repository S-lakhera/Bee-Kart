import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-black text-white mb-2">Join the Hive</h2>
      <p className="text-slate-500 mb-8">Start your premium shopping journey today.</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="text-left">
          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 ml-1">Full Name</label>
          <input 
            type="text" 
            placeholder="Shashank Lakhera" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50 transition"
          />
        </div>

        <div className="text-left">
          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Address</label>
          <input 
            type="email" 
            placeholder="bee@kart.com" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50 transition"
          />
        </div>

        <div className="text-left">
          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 ml-1">Create Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50 transition"
          />
        </div>

        <div className="flex items-center gap-2 py-2">
          <input type="checkbox" className="accent-yellow-500" id="terms" />
          <label htmlFor="terms" className="text-xs text-slate-500">I agree to the Terms & Conditions</label>
        </div>

        <button className="w-full py-4 bg-white text-black font-black rounded-xl hover:bg-slate-200 transition transform active:scale-95">
          CREATE ACCOUNT
        </button>
      </form>

      <p className="mt-8 text-slate-400 text-sm">
        Already a member? {' '}
        <Link to="/auth" className="text-yellow-500 font-bold hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default Register;