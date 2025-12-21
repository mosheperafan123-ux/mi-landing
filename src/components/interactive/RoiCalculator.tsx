import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const RoiCalculator = () => {
    const [ticket, setTicket] = useState<number>(35); // Promedio ticket default
    const [citas, setCitas] = useState<number>(10);   // Citas diarias
    const [noShows, setNoShows] = useState<number>(15); // % Absentismo

    const [result, setResult] = useState<{ recovered: number; increase: number } | null>(null);

    const calculate = () => {
        // Logic:
        // Lost revenue per day = (Citas * NoShows%) * Ticket
        // Recovered (conservative 60% reduction in no-shows)

        const dailyAppointments = citas;
        const lostPerDay = dailyAppointments * (noShows / 100) * ticket;
        const recoveredPerDay = lostPerDay * 0.60;

        // Monthly (24 days)
        const recoveredMonthly = recoveredPerDay * 24;

        // Increase in confirmed bookings (upsell + filled slots) - Estimate 20%
        const increaseMonthly = (dailyAppointments * ticket * 24) * 0.20;

        setResult({
            recovered: Math.round(recoveredMonthly),
            increase: Math.round(increaseMonthly)
        });
    };

    return (
        <div className="space-y-6">
            {!result ? (
                <>
                    <p className="text-gray-600 mb-4">
                        Descubre cuánto dinero estás dejando sobre la mesa por citas canceladas y huecos en tu agenda.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">Ticket Promedio ($)</label>
                            <input
                                type="number"
                                value={ticket}
                                onChange={(e) => setTicket(Number(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">Citas reservadas al día</label>
                            <input
                                type="number"
                                value={citas}
                                onChange={(e) => setCitas(Number(e.target.value))}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark mb-1">% de No-Shows (estimado)</label>
                            <input
                                type="range"
                                min="0"
                                max="50"
                                value={noShows}
                                onChange={(e) => setNoShows(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="text-right text-xs text-gray-500 mt-1">{noShows}%</div>
                        </div>
                    </div>

                    <Button fullWidth onClick={calculate}>
                        Calcular mi potencial
                    </Button>
                </>
            ) : (
                <div className="text-center animate-fade-in">
                    <div className="py-4">
                        <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-2">Podrías recuperar</h4>
                        <div className="text-4xl font-bold text-primary mb-1">
                            ${result.recovered.toLocaleString()}
                        </div>
                        <p className="text-xs text-gray-400 mb-6">al mes reduciendo ausencias</p>

                        <h4 className="text-gray-500 font-medium text-sm uppercase tracking-wide mb-2">Ingresos adicionales</h4>
                        <div className="text-4xl font-bold text-green-500 mb-1">
                            ${result.increase.toLocaleString()}
                        </div>
                        <p className="text-xs text-gray-400 mb-8">al mes llenando huecos y upsells</p>
                    </div>

                    <Button fullWidth onClick={() => window.location.href = '#contact'}>
                        ¡Quiero estos resultados!
                    </Button>

                    <button
                        onClick={() => setResult(null)}
                        className="mt-4 text-sm text-gray-400 hover:text-dark underline"
                    >
                        Calcular de nuevo
                    </button>
                </div>
            )}
        </div>
    );
};
