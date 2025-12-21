import React from 'react';
import { motion } from 'framer-motion';

import { Smile, Activity, ShieldCheck, Stethoscope, Star } from 'lucide-react';

const logos = [
    { name: 'DentalCare', icon: <Smile size={24} /> },
    { name: 'OrtoPlus', icon: <Activity size={24} /> },
    { name: 'MaxiloCenter', icon: <ShieldCheck size={24} /> },
    { name: 'Clínica San José', icon: <Stethoscope size={24} /> },
    { name: 'Implantes360', icon: <Star size={24} /> }
];

export const TrustLogos = () => {
    return (
        <section className="bg-gray-50 py-10 border-b border-gray-100">
            <div className="container-custom">
                <p className="text-center text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
                    Clínicas líderes que confían en Tutink
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-xl font-bold font-sans text-gray-400 flex items-center gap-2"
                        >
                            {/* Logo icon */}
                            <div className="text-gray-300">
                                {logo.icon}
                            </div>
                            {logo.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
