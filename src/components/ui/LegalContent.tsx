import React, { useState } from 'react';

export const LegalContent = ({ type }: { type: 'privacy' | 'terms' }) => {
    const isPrivacy = type === 'privacy';

    return (
        <div className="prose prose-sm max-w-none text-gray-600">
            {isPrivacy ? (
                <>
                    <h4 className="font-bold text-dark text-lg mb-4">Política de Privacidad</h4>
                    <p>En Tutink, valoramos su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información.</p>

                    <h5 className="font-bold text-dark mt-4 mb-2">1. Información que recopilamos</h5>
                    <p>Recopilamos información que usted nos proporciona directamente, como nombre, correo electrónico y número de teléfono al solicitar una demo. También recopilamos datos de uso técnicos para mejorar nuestra plataforma.</p>

                    <h5 className="font-bold text-dark mt-4 mb-2">2. Uso de la información</h5>
                    <p>Utilizamos su información para proveer y mejorar nuestros servicios, comunicarnos con usted sobre su cuenta y actualizaciones, y para fines de marketing directo (si ha dado su consentimiento).</p>

                    <h5 className="font-bold text-dark mt-4 mb-2">3. Protección de datos</h5>
                    <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida o alteración.</p>
                </>
            ) : (
                <>
                    <h4 className="font-bold text-dark text-lg mb-4">Términos y Condiciones</h4>
                    <p>Bienvenido a Tutink. Al utilizar nuestros servicios, usted acepta estos términos.</p>

                    <h5 className="font-bold text-dark mt-4 mb-2">1. Uso del Servicio</h5>
                    <p>Tutink proporciona un software de gestión de reservas. Usted se compromete a utilizar el servicio de acuerdo con las leyes aplicables y no para fines ilegales.</p>

                    <h5 className="font-bold text-dark mt-4 mb-2">2. Cuentas y Seguridad</h5>
                    <p>Usted es responsable de mantener la confidencialidad de su cuenta y contraseña. Tutink no se hace responsable de pérdidas causadas por el uso no autorizado de su cuenta.</p>

                    <h5 className="font-bold text-dark mt-4 mb-2">3. Cancelación</h5>
                    <p>Puede cancelar su suscripción en cualquier momento. Tutink se reserva el derecho de suspender cuentas que violen estos términos.</p>
                </>
            )}
        </div>
    );
};
