import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">¿Quiénes somos?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            En <span className="font-bold text-primary">Tutink</span>, entendemos que una clínica dental no es solo un negocio, es un centro de salud que requiere eficiencia absoluta. Nos especializamos en inteligencia artificial para el sector odontológico, ayudando a doctores y gerentes a eliminar el caos administrativo. Nuestro objetivo es simple: que tú te dediques a tus pacientes, mientras nuestra tecnología se encarga de que tu agenda esté siempre llena y organizada.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
