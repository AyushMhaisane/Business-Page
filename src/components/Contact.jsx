import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import PolicyModal from './PolicyModal';

// --- LEGAL CONTENT DEFINITIONS ---
const privacyContent = (
    <>
        <p><strong>Last Updated:</strong> December 2025</p>
        <p>At TechFlow, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.</p>
        <h4 className="font-bold text-slate-900 mt-4">1. Information We Collect</h4>
        <p>We collect personal information that you voluntarily provide to us when you fill out our contact form. This includes your <strong>Name</strong>, <strong>Email Address</strong>, and <strong>Message content</strong>.</p>
        <h4 className="font-bold text-slate-900 mt-4">2. How We Use Your Data</h4>
        <p>We use your data solely to respond to your inquiries and project requests. We do not sell or share your data with unauthorized third parties.</p>
    </>
);

const termsContent = (
    <>
        <p><strong>Last Updated:</strong> December 2025</p>
        <p>By using our website or hiring TechFlow for web development services, you agree to the following terms.</p>
        <h4 className="font-bold text-slate-900 mt-4">1. Services</h4>
        <p>TechFlow provides web design, development, and maintenance services. The scope of work is defined in the specific proposal sent to each client.</p>
        <h4 className="font-bold text-slate-900 mt-4">2. Payments</h4>
        <p>Projects typically require a <strong>50% deposit</strong> upfront to commence work, with the remaining 50% due upon project completion.</p>
        <h4 className="font-bold text-slate-900 mt-4">3. Limitation of Liability</h4>
        <p>TechFlow is not liable for any direct, indirect, or consequential damages arising from the use or inability to use the website delivered.</p>
    </>
);

const Contact = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    // NEW: State for Modal
    const [openPolicy, setOpenPolicy] = useState(null); // 'privacy', 'terms', or null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                setStatus('success');
                setIsSubmitting(false);
                e.target.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <footer id="contact" className="bg-slate-900 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    {/* LEFT SIDE: Contact Information */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
                        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                            Ready to take your business online? I'm currently accepting new projects.
                            Drop me a message or call me directly.
                        </p>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-blue-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Email Me</h4>
                                    <a href="mailto:contact@techflow.com" className="text-slate-400 hover:text-blue-400 transition">
                                        contact@techflow.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-blue-500">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Call / WhatsApp</h4>
                                    <p className="text-slate-400">+91 98765 43210</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center mr-4 text-blue-500">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Location</h4>
                                    <p className="text-slate-400">Remote / Nagpur, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Working Form */}
                    <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    placeholder="your@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center">
                                    Message sent successfully! we'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                                    Something went wrong. Please try again later.
                                </div>
                            )}

                        </form>
                    </div>
                </div>

                {/* --- MODAL INJECTION --- */}
                <PolicyModal
                    isOpen={!!openPolicy}
                    onClose={() => setOpenPolicy(null)}
                    title={openPolicy === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                    content={openPolicy === 'privacy' ? privacyContent : termsContent}
                />

                {/* Footer Bottom */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>© 2025 TechFlow. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* UPDATED: Buttons instead of <a> tags */}
                        <button onClick={() => setOpenPolicy('privacy')} className="hover:text-white transition">
                            Privacy Policy
                        </button>
                        <button onClick={() => setOpenPolicy('terms')} className="hover:text-white transition">
                            Terms of Service
                        </button>
                        <a href="#" className="hover:text-white transition">LinkedIn</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Contact;