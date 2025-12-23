import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Globe, ShieldCheck, Smartphone, Users, Zap } from 'lucide-react';

const benefits = [
    {
        title: "Your 24/7 Salesman",
        description: "Your shop closes at night, but your website never sleeps. Capture leads and inquiries even while you are resting.",
        icon: <Clock className="w-8 h-8 text-white" />,
        color: "bg-blue-500"
    },
    {
        title: "Instant Credibility",
        description: "In 2025, if you don't have a website, people think you aren't a serious business. A professional site builds trust instantly.",
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        color: "bg-indigo-500"
    },
    {
        title: "Expand Beyond Locals",
        description: "Stop relying only on walk-in customers. With Google SEO, clients from across the city (and country) can find you.",
        icon: <Globe className="w-8 h-8 text-white" />,
        color: "bg-purple-500"
    },
    {
        title: "Beat the Competition",
        description: "Your competitors are already going digital. Don't get left behind. Secure your brand's position online today.",
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        color: "bg-emerald-500"
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-white mb-6"
                    >
                        Why Your Business <span className="text-blue-400">Needs This</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        A website isn't an expense; it's an investment that pays for itself.
                        Here is what happens when you go online.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* THE "HARD TRUTHS" SECTION */}
                <div className="bg-slate-800/80 rounded-3xl p-8 md:p-12 border border-slate-700 flex flex-col md:flex-row gap-12 items-center">

                    {/* Left: The Graph (UPDATED ANIMATION) */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold text-white mb-6">The "Online" Advantage</h3>
                        <div className="bg-slate-900 rounded-xl p-6 border border-slate-700 h-64 relative flex items-end pb-8 px-4">

                            {/* Y-Axis Label */}
                            <div className="absolute left-4 top-4 text-xs text-slate-500 font-bold tracking-widest uppercase">Revenue Growth</div>

                            {/* Line 1: Without Website (Flat) */}
                            <div className="w-full h-full absolute top-0 left-0 flex items-end px-4 pb-8">
                                <div className="w-full h-[30%] border-t-2 border-dashed border-slate-600 relative">
                                    <span className="absolute -top-6 right-0 text-slate-500 text-xs">Without Website</span>
                                </div>
                            </div>

                            {/* Line 2: With Website (Growth Loop) */}
                            <motion.div
                                initial={{ height: "30%" }}
                                animate={{ height: ["30%", "85%", "85%"] }} // Start, Grow, Hold. No Down.
                                transition={{
                                    duration: 3,
                                    times: [0, 0.8, 1], // Grow for 80% of time, Hold for 20%
                                    ease: "easeOut",
                                    repeat: Infinity,
                                    repeatType: "loop" // Snaps back to start instantly
                                }}
                                className="w-full bg-gradient-to-t from-blue-900/20 to-blue-500/20 border-t-4 border-blue-500 relative rounded-tr-lg"
                            >
                                <span className="absolute -top-8 right-0 text-blue-400 font-bold text-sm bg-slate-900 px-2 py-1 rounded border border-blue-900">With TechFlow</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: The Stats */}
                    <div className="w-full md:w-1/2 space-y-8">

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">75% of Customers</h4>
                                <p className="text-slate-400 text-sm">Judge a company's credibility based on their website design alone.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">3 Seconds</h4>
                                <p className="text-slate-400 text-sm">That's all you have. If your site doesn't load fast, 53% of users leave immediately.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Local Search Dominance</h4>
                                <p className="text-slate-400 text-sm">46% of all Google searches are seeking local information. If you aren't there, you don't exist.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Benefits;