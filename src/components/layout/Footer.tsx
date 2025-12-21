import React from 'react';

export const Footer = ({ onOpenLegal }: { onOpenLegal: (type: 'privacy' | 'terms') => void }) => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo-v3.png" alt="Tutink Logo" className="h-12 w-auto object-contain" />
                            <span className="text-xl font-bold text-dark tracking-tight">TUTINK</span>
                            {/* Text is now in the logo image itself, so we can remove the span or keep it if logo is just icon */}
                        </div>
                        <p className="text-gray-500 text-sm mb-6 max-w-sm">
                            Automatiza reservas, reduce el ausentismo y maximiza tus ingresos.
                            El sistema inteligente para negocios modernos.
                        </p>
                        <div className="flex flex-col gap-2 mb-6 text-sm text-gray-500">
                            <a href="mailto:rmtutink@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                                ✉️ rmtutink@gmail.com
                            </a>
                            <a href="https://wa.link/u93xj7" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                                📱 +57 315 3611499
                            </a>
                        </div>
                        <div className="flex gap-4">
                            {/* Social placeholders - Hidden for now as requested or keep if valid */}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-semibold text-dark mb-4">Producto</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#features" className="hover:text-primary transition-colors">Características</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors">Precios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-dark mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Sobre nosotros</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); window.open('https://wa.link/u93xj7', '_blank'); }} className="hover:text-primary transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-dark mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><button onClick={() => onOpenLegal('privacy')} className="hover:text-primary transition-colors text-left">Privacidad</button></li>
                            <li><button onClick={() => onOpenLegal('terms')} className="hover:text-primary transition-colors text-left">Términos</button></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} Tutink. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
