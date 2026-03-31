import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#121116] flex items-center justify-center">
      {/* This part STAYS on screen for both Login and Register */}
      <div className="bg-white/5 p-10 rounded-3xl border border-white/10 w-full max-w-md text-center">
        <h2 className="text-yellow-500 font-black text-3xl mb-6">BEE-KART AUTH</h2>
        
        {/* THIS is where <Login /> or <Register /> will appear! */}
        <Outlet />
        
        <p className="mt-6 text-slate-500 text-xs uppercase tracking-widest">
          Secured by the Hive
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;