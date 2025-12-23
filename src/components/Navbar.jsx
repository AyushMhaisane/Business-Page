import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo / Brand Name */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        {/* You can also make the logo clickable to go Home */}
                        <a href="#home" className="font-bold text-2xl text-slate-800 tracking-tighter">
                            TechFlow<span className="text-blue-600">.</span>
                        </a>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {/* Added HOME Link */}
                        <a href="#home" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</a>

                        <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition">Services</a>
                        <a href="#process" className="text-slate-600 hover:text-blue-600 font-medium transition">Process</a>
                        <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition">About</a>
                        <a href="#contact">
                            <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition">
                                Contact Me
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {/* Added HOME Link for Mobile */}
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Home</a>

                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Services</a>
                        <a href="#process" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Process</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">About</a>

                        <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-blue-600 font-bold">Contact Me</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;