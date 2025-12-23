import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "We discuss your business goals and target audience in a brief 15-minute call.",
    icon: <PhoneCall className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Design & Strategy",
    description: "I create a clean structure and wireframe tailored to your specific needs.",
    icon: <PenTool className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Development",
    description: "I build your site using modern tech (React/Tailwind) ensuring it's fast and mobile-ready.",
    icon: <Code className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We go live! I also provide a guide on how to manage your new digital asset.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Simple 4-Step <span className="text-blue-600">Process</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            No complex jargon or surprises. Here is exactly how we will work together.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg mb-6 border-4 border-white relative z-10">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed px-2">
                {step.description}
              </p>

              {/* Mobile Connector (Vertical Line) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden absolute bottom-[-32px] left-1/2 w-0.5 h-8 bg-slate-300 -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;