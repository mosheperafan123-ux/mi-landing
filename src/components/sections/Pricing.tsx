import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

const plans = [
    {
        name: "Enterprise",
        price: "A Medida",
        description: "Cada clínica es única. Diseñamos la solución exacta para tu volumen de pacientes y especialistas.",
        features: [
            "Integración total con tu software actual",
            "IA entrenada con tus protocolos",
            "Soporte prioritario 24/7",
            "Dashboard de Retención de Pacientes",
            "Campañas de reactivación incluidas"
        ],
        highlight: true
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Plan simple, resultados masivos</h2>
                    <p className="text-gray-500">Elige el plan que mejor se adapte a tu etapa actual.</p>
                </div>

                <div className="flex justify-center max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`w-full max-w-md p-8 rounded-2xl border ${plan.highlight ? 'border-primary shadow-xl shadow-primary/10 relative' : 'border-gray-200'} transition-all hover:-translate-y-1 duration-300 bg-white hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/50 group`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                                        Más popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                            <p className="text-gray-500 mb-6 h-10">{plan.description}</p>

                            <div className="text-3xl font-bold text-dark mb-8">
                                {plan.price}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-400'}`}>
                                            <Check size={12} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? 'primary' : 'outline'}
                                fullWidth
                                size="lg"
                                onClick={() => window.open('https://wa.link/u93xj7', '_blank')}
                            >
                                Agendar cita con nuestro equipo
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
