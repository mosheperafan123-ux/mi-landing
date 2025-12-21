import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Smartphone, Calendar, Star, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
    return (
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full blur-3xl opacity-50" />

            <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-6 border border-red-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Detectamos fugas en tu facturación
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-dark tracking-tight">
                        ¿Hay agujeros de efectivo en tu agenda? <span className="text-primary">Citas vacías son dinero perdido.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
                        Deja de perder pacientes por falta de seguimiento. Automatiza tu recepción y cierra cada grieta por donde se escapan tus ingresos.
                    </p>

                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                            Menos cancelaciones (recordatorios automáticos)
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <Star className="w-4 h-4" />
                            </div>
                            Más reseñas en Google (envío automático)
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <Users className="w-4 h-4" />
                            </div>
                            Equipo administrativo más eficiente
                        </li>
                        <li className="flex items-center gap-3 text-gray-700 font-medium">
                            <div className="p-1 rounded-full bg-green-100 text-green-600">
                                <Smartphone className="w-4 h-4" />
                            </div>
                            Mejor experiencia del paciente
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <Button
                            size="lg"
                            className="shadow-xl shadow-primary/20 group"
                            onClick={() => window.open('https://wa.link/u93xj7', '_blank')}
                        >
                            Agendar cita con nosotros
                            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <p className="text-sm text-gray-400 flex items-center gap-4">
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-success" /> Análisis gratuito</span>
                        <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-success" /> Sin compromiso</span>
                    </p>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Visual Container */}
                    <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
                        {/* URL Bar Mock */}
                        <div className="flex items-center gap-2 mb-6 bg-gray-50 p-2 rounded-lg border border-gray-100">
                            <div className="flex gap-1.5 ml-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <span className="bg-white px-3 py-1 rounded-md text-[10px] text-gray-400 border border-gray-100 shadow-sm font-mono">clinic-manager.ai/dashboard</span>
                            </div>
                        </div>

                        {/* Title Row */}
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Estado de la Clínica</h3>
                                <p className="text-sm text-gray-500">Hoy, 20 Diciembre</p>
                            </div>
                            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center h-fit">
                                Agenda al 98%
                            </span>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                <p className="text-xs font-semibold text-blue-600 mb-1">Citas Confirmadas</p>
                                <p className="text-3xl font-bold text-gray-900">42</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                <p className="text-xs font-semibold text-purple-600 mb-1">Reviews Nuevas</p>
                                <p className="text-3xl font-bold text-gray-900">+8</p>
                            </div>
                        </div>

                        {/* Activity List */}
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs shrink-0">W</div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Paciente re-agendado</p>
                                    <p className="text-xs text-gray-500">"Hola, quiero cambiar mi cita..." • Resuelto</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-xs shrink-0">G</div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Nueva reseña 5 estrellas</p>
                                    <p className="text-xs text-gray-500">Enviada solicitud automática post-cita</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shrink-0">R</div>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Recordatorios enviados</p>
                                    <p className="text-xs text-gray-500">15 pacientes notificados para mañana</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background circles */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
};
