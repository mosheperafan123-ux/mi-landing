import React from 'react';
import { Button } from '../ui/Button';

const cases = [
    {
        name: "Clínica Dental Dr. Martí",
        result: "+42%",
        metric: "pacientes reactivados",
        time: "en 30 días",
        quote: "Teníamos una base de datos enorme de pacientes que no volvían. La IA los contactó y llenó nuestra agenda de limpiezas.",
        author: "Dr. Carlos M., Ortodoncista",
        image: "bg-blue-100" // Placeholder for image
    },
    {
        name: "Dental Premium Center",
        result: "-80%",
        metric: "reducción de no-shows",
        time: "primer trimestre",
        quote: "Antes perdíamos mucho dinero con gente que no llegaba. Ahora el sistema confirma y reagenda automáticamente.",
        author: "Dra. Lucía R., Directora",
        image: "bg-green-100"
    }
];

export const Testimonials = () => {
    return (
        <section id="cases" className="py-24 bg-white">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Clínicas que optimizaron su gestión</h2>
                        <p className="text-gray-500 max-w-xl">
                            Negocios como el tuyo ya están facturando más gracias a la automatización.
                        </p>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {cases.map((caseStudy, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className={`w-full md:w-1/3 min-h-[200px] ${caseStudy.image === 'bg-gray-200' ? 'bg-gradient-to-br from-gray-100 to-gray-300' : 'bg-gradient-to-br from-blue-50 to-blue-200'} flex items-center justify-center`}>
                                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl font-bold text-gray-400">
                                    {caseStudy.author.charAt(0)}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">
                                    {caseStudy.name}
                                </div>
                                <div className="text-3xl font-bold text-dark mb-1">
                                    {caseStudy.result}
                                </div>
                                <div className="text-sm text-gray-400 font-medium mb-4">
                                    {caseStudy.metric} {caseStudy.time}
                                </div>
                                <p className="text-gray-600 italic mb-4">"{caseStudy.quote}"</p>
                                <div className="text-sm font-semibold text-dark">
                                    — {caseStudy.author}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
