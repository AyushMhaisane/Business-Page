import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Megaphone, MapPin, Settings, BarChart, Search, CheckCircle2, ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Custom Business Websites",
        description: "Tailored websites for coaching institutes and local businesses. We focus on clear information and trust.",
        icon: <Layout className="w-6 h-6 text-white" />, // Icon is white now
        features: ["Mobile Responsive", "Modern UI/UX", "Fast Loading"]
    },
    {
        title: "High-Converting Landing Pages",
        description: "Specific pages designed to capture leads for new batches or offers. Perfect for running ads.",
        icon: <Megaphone className="w-6 h-6 text-white" />,
        features: ["Lead Capture Forms", "A/B Tested Design", "Strong CTA"]
    },
    {
        title: "Local SEO & Google Maps",
        description: "Get found when people search for 'coaching near me'. We optimize your Google Business Profile.",
        icon: <MapPin className="w-6 h-6 text-white" />,
        features: ["GMB Optimization", "Keyword Ranking", "Local Citations"]
    },
    {
        title: "Performance Optimization",
        description: "A slow website loses customers. We ensure your site loads in under 2 seconds on mobile devices.",
        icon: <Settings className="w-6 h-6 text-white" />,
        features: ["90+ Speed Score", "Image Compression", "Code Minification"]
    },
    {
        title: "Analytics & Monthly Reports",
        description: "Don't guess what's working. We provide simple monthly reports showing your visitors and growth.",
        icon: <BarChart className="w-6 h-6 text-white" />,
        features: ["Visitor Insights", "Conversion Tracking", "PDF Reports"]
    },
    {
        title: "Social Media Integration",
        description: "Connect your WhatsApp, Instagram, and Facebook directly to your website for easy communication.",
        icon: <Search className="w-6 h-6 text-white" />,
        features: ["WhatsApp Chat", "Instagram Feed", "Social Sharing"]
    }
];

const Services = () => {
    return (
        // CHANGE 1: Section bg is now slate-50 (Light Gray) to create contrast
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-extrabold text-slate-900"
                    >
                        Everything You Need to <span className="text-blue-600">Scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        From design to lead generation, we provide end-to-end digital solutions for your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            // CHANGE 2: Card is now White (bg-white) with a stronger Shadow
                            // Added 'group' and 'hover:-translate-y-2' for lift effect
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            {/* Decorative Top Border on Hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            {/* CHANGE 3: Vibrant Icon Box (Blue Gradient) */}
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                                {service.description}
                            </p>

                            {/* Feature List */}
                            <div className="pt-6 border-t border-slate-100">
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-slate-500 font-medium">
                                            {/* Green Checkmark */}
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;