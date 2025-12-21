import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Settings, TrendingUp, Database, Bell, LayoutGrid, Calendar } from 'lucide-react';

const steps = [
    {
        icon: <LayoutGrid size={32} className="text-blue-500" />,
        title: "1. Conexión",
        description: "Sincronizamos nuestra IA con tu calendario actual (Google Calendar, Doctolib, etc.)",
        color: "bg-blue-50"
    },
    {
        icon: <Settings size={32} className="text-purple-500" />,
        title: "2. Configuración",
        description: "Carga tus servicios, precios y reglas de atención para que la IA sepa cómo actuar.",
        color: "bg-purple-50"
    },
    {
        icon: <TrendingUp size={32} className="text-green-500" />, // Changed from Calendar/Database to TrendingUp/Rocket metaphor
        title: "3. Piloto Automático",
        description: "La IA comienza a gestionar citas, confirmar pacientes y pedir reviews por ti.",
        color: "bg-green-50"
    }
];

export const HowItWorks = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">¿Cómo funciona?</h2>
                    <p className="text-gray-500">Tres pasos simples para recuperar el control de tu tiempo.</p>
                </div>

                <div className="relative">
                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-4 text-primary`}>
                                    {step.icon}
                                </div>

                                <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
