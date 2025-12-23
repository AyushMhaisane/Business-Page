import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-block px-4 py-1 mb-6 bg-blue-50 border border-blue-100 rounded-full">
                        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                            Web Development for Business
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        id="hero-heading"
                        className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
                    >
                        Turn your <span className="text-blue-600">Business</span> into a Trusted Brand.
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        We build clean, high-performance websites for industries, institutes,
                        and small businesses. No clutter—just a professional online presence
                        that gets you more calls.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#process"
                            className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg shadow-lg
                         hover:bg-blue-700 transition transform hover:-translate-y-1
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            aria-label="View portfolio work"
                        >
                            How We Work
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200
                         font-bold rounded-lg hover:bg-slate-50 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                            aria-label="Book a free consultation call"
                        >
                            Book a Free Call
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div
                        className="mt-10 flex items-center justify-center md:justify-start space-x-6
                       text-sm text-slate-500 font-medium"
                        aria-label="Website features"
                    >
                        <span className="flex items-center">
                            <span className="text-green-500 text-xl mr-2" aria-hidden="true">✓</span>
                            Mobile Friendly
                        </span>
                        <span className="flex items-center">
                            <span className="text-green-500 text-xl mr-2" aria-hidden="true">✓</span>
                            Fast Loading
                        </span>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    className="md:w-1/2 mt-12 md:mt-0 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Optimized Image Container */}
                    <div className="relative z-10 bg-white rounded-xl shadow-2xl border border-slate-200 p-2">
                        <img
                            src="/images/website-mockup.png"
                            alt="Professional business website design preview"
                            loading="lazy"
                            decoding="async"
                            className="h-64 md:h-96 w-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Decorative Blob */}
                    <div
                        className="absolute top-1/2 left-1/2 transform
                       -translate-x-1/2 -translate-y-1/2
                       w-full h-full bg-blue-100 rounded-full blur-3xl
                       -z-10 opacity-60"
                        aria-hidden="true"
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
