import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
    // Shared class logic for NavLinks to keep code clean
    const navigate = useNavigate();

    const navLinkClasses = ({ isActive }) =>
        `relative pb-1 transition-all duration-300 hover:text-yellow-500 hover:scale-105 ${isActive ? "text-yellow-500 after:w-full" : "text-slate-400 after:w-0"
        } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300`;

    return (
        <div className='sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#121116]/80 backdrop-blur-md border-b border-white/5'>

            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <div
                    onClick={() => navigate("/")}
                    className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="cursor-pointer text-black font-black text-xl">B</span>
                </div>
                <h1 className='text-2xl font-black tracking-tighter text-white'>
                    BEE<span className="text-yellow-500">-</span>KART
                </h1>
            </div>

            {/* Navigation Links */}
            <ol className='hidden md:flex gap-10 font-medium tracking-wide'>
                <NavLink to="/" className={navLinkClasses}>
                    Home
                </NavLink>
                <NavLink to="/products" className={navLinkClasses}>
                    Products
                </NavLink>
                <NavLink to="/about" className={navLinkClasses}>
                    About
                </NavLink>
            </ol>

            {/* Action Buttons */}
            <div className='flex gap-4 items-center'>
                <Link
                    to="/cart"
                    className='px-5 py-1.5 bg-white/5 border border-white/10 text-slate-200 rounded-full cursor-pointer active:scale-90 transition duration-200 hover:bg-white/10 hover:border-yellow-500/50'>
                    Hive
                </Link>

                <Link
                    to="/auth"
                    className='px-6 py-1.5 bg-yellow-500 text-black font-bold rounded-full cursor-pointer active:scale-90 transition duration-200 hover:bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]'>
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Navbar;