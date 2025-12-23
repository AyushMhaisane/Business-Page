import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* LEFT SIDE: Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 relative"
                    >
                        {/* Main Image */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Our Team working"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>
                    </motion.div>

                    {/* RIGHT SIDE: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="inline-block px-4 py-1 mb-4 bg-blue-50 border border-blue-100 rounded-full">
                            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                                About TechFlow
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                            Not Just Developers, But Your <span className="text-blue-600">Growth Partners</span>.
                        </h2>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            We started with a simple mission: to help Indian businesses and coaching institutes go online without the headache.
                            We don't just write code; we understand how your business works and build tools that solve your actual problems.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-slate-700"><strong>Local Expertise:</strong> We understand the Indian market and customer behavior.</p>
                            </div>
                            <div className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                <p className="text-slate-700"><strong>100% Transparency:</strong> No hidden costs, no technical jargon.</p>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="flex gap-8 border-t border-slate-100 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900">10+</h4>
                                <p className="text-sm text-slate-500">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                                <p className="text-sm text-slate-500">Client Satisfaction</p>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;