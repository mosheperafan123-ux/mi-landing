import React from 'react';
import { Button } from '../../ui/Button';
import { Counter } from '../../ui/Counter';

export const HeroMetrics = () => {
    // Note: The ROI Calculator modal logic will be implemented later.
    return (
        <section className="py-20 bg-dark text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid md:grid-cols-3 gap-12 text-center mb-12">
                    <div className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-2">
                            <Counter value={40} prefix="-" suffix="%" />
                        </div>
                        <p className="text-gray-400 font-medium">Cancelaciones y No-shows</p>
                    </div>

                    <div className="p-6 border-l border-r border-white/5 mx-6 md:mx-0">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            <Counter value={50} prefix="+" suffix=" /mes" />
                        </div>
                        <p className="text-gray-400 font-medium">Reseñas positivas en Google</p>
                    </div>

                    <div className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 mb-2">
                            <Counter value={100} prefix="+" suffix="" />
                        </div>
                        <p className="text-gray-400 font-medium">Pacientes atendidos simultáneamente</p>
                    </div>
                </div>

                <div className="text-center">
                    {/* Logic for modal to be added later */}

                    <p className="text-xs text-gray-500 mt-4">
                        Basado en datos promedio de negocios que usan automatización de reservas.
                    </p>
                </div>
            </div>
        </section>
    );
};
