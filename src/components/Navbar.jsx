import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const {cart} = useCart()

    const navLinkClasses = ({ isActive }) =>
        `relative pb-1 transition-all duration-300 hover:text-yellow-500 ${isActive ? "text-yellow-500 after:w-full" : "text-slate-400 after:w-0"
        } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300`;

    // Function to close menu when a link is clicked
    const closeMenu = () => setMobileMenuVisible(false);

    return (
        <header className="sticky top-0 z-[100]">
            <nav className='flex justify-between items-center px-6 md:px-8 py-4 bg-[#121116]/90 backdrop-blur-md border-b border-white/5'>

                {/* Logo Section */}
                <div
                    onClick={() => { navigate("/"); closeMenu(); }}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <span className="text-black font-black text-xl">B</span>
                    </div>
                    <h1 className='text-lg md:text-2xl font-black tracking-tighter text-white uppercase'>
                        BEE<span className="text-yellow-500">-</span>KART
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <ol className='hidden md:flex gap-10 font-medium tracking-wide'>
                    <NavLink to="/" className={navLinkClasses}>Home</NavLink>
                    <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
                    <NavLink to="/about" className={navLinkClasses}>About</NavLink>
                </ol>

                {/* Desktop Actions */}
                <div className='hidden md:flex gap-4 items-center'>
                    <Link to="/cart" className='px-5 py-1.5 bg-white/5 border border-white/10 text-slate-200 rounded-full hover:bg-white/10 transition relative'>
                    Hive
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-yellow-500 text-[10px] text-black font-bold w-5 h-5 rounded-full flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                    </Link>
                    <Link to="/auth" className='px-6 py-1.5 bg-yellow-500 text-black font-bold rounded-full hover:bg-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)] transition'>Login</Link>
                </div>

                {/* Mobile Icons */}
                <div className="flex items-center gap-5 md:hidden">
                    {location.pathname === "/cart" ? (
                <Link to="/" onClick={closeMenu} className="relative">
                    <i className="ri-home-3-line text-2xl text-yellow-500 animate-in fade-in zoom-in duration-300"></i>
                </Link>
            ) : (
                <Link to="/cart" onClick={closeMenu} className="relative">
                    <i className="ri-shopping-bag-line text-2xl text-yellow-500 animate-in fade-in zoom-in duration-300"></i>
                    {/* Optional: Add a small badge if the cart has items */}
                    {cart.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-yellow-500 text-[10px] text-black font-bold w-4 h-4 rounded-full flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                </Link>
            )}

                    <button
                        onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
                        className="text-yellow-500 text-2xl focus:outline-none"
                    >
                        <i className={mobileMenuVisible ? "ri-close-line" : "ri-menu-4-line"}></i>
                    </button>
                </div>
            </nav>

            {/* Improved Mobile Menu Overlay */}
            <div className={`fixed inset-0 top-16.25 bg-[#121116] z-[-1] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${mobileMenuVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                }`}>
                <NavLink to="/" onClick={closeMenu} className="text-3xl font-bold text-white hover:text-yellow-500 transition">Home</NavLink>
                <NavLink to="/products" onClick={closeMenu} className="text-3xl font-bold text-white hover:text-yellow-500 transition">Products</NavLink>
                <NavLink to="/about" onClick={closeMenu} className="text-3xl font-bold text-white hover:text-yellow-500 transition">About</NavLink>

                <div className="w-2/3 h-px bg-white/10 my-4"></div>

                <Link to="/auth" onClick={closeMenu} className="w-2/3 py-4 bg-yellow-500 text-black font-black text-center rounded-2xl shadow-lg">
                    LOGIN TO HIVE
                </Link>
            </div>
        </header>
    );
}

export default Navbar;