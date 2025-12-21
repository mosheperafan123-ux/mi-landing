import React from 'react';
import { Calendar, CheckSquare, BarChart3, ArrowRight, Cpu, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Calendar />,
        title: "Gestión de Citas Automatizada",
        description: "Agendamiento, confirmaciones, cancelaciones y reagendamiento automático. Tu agenda siempre optimizada.",
        color: "bg-blue-500"
    },
    {
        icon: <CheckSquare />,
        title: "Adiós a los No-Shows",
        description: "Recordatorios inteligentes y manejo proactivo de confirmaciones para asegurar que tus pacientes lleguen.",
        color: "bg-red-500"
    },
    {
        icon: <Star />, // Using Star for reviews
        title: "Gestión de Reputación",
        description: "Envío automático de encuestas y solicitud de reviews en Google post-cita para posicionar tu clínica.",
        color: "bg-yellow-500"
    },
    {
        icon: <Cpu />, // Metaphor for 'Massive Capacity' / AI.
        title: "Capacidad Masiva",
        description: "Atiende a más de 100 pacientes simultáneamente, 24/7, sin esperas ni líneas ocupadas.",
        color: "bg-purple-500"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
                        Tecnología diseñada para Odontología Moderna
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Tutink no es solo una agenda. Es el motor de crecimiento que tu clínica dental necesita para operar sin fricción.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${feature.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                                <div className={`absolute inset-0 ${feature.color} opacity-20`}></div>
                                <div className={`z-10 ${feature.color.replace('bg-', 'text-')}`}>
                                    {React.cloneElement(feature.icon as React.ReactElement<React.HTMLAttributes<SVGElement>>, { className: "w-7 h-7" })}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {feature.description}
                            </p>


                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
