import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-black text-white mb-2">Welcome Back</h2>
      <p className="text-slate-500 mb-8">Enter your details to enter the hive.</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="text-left">
          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 ml-1">Email Address</label>
          <input 
            type="email" 
            placeholder="bee@kart.com" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50 transition"
          />
        </div>

        <div className="text-left">
          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 ml-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-yellow-500/50 transition"
          />
        </div>

        <div className="flex justify-end">
          <button className="text-xs text-yellow-500 hover:underline">Forgot Password?</button>
        </div>

        <button className="w-full py-4 bg-yellow-500 text-black font-black rounded-xl hover:bg-yellow-400 transition transform active:scale-95 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
          SIGN IN
        </button>
      </form>

      <p className="mt-8 text-slate-400 text-sm">
        Don't have an account? {' '}
        <Link to="/auth/register" className="text-yellow-500 font-bold hover:underline">Create one</Link>
      </p>
    </div>
  );
};

export default Login;