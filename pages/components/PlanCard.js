import React from 'react';

const PlanCard = () => {
    return (
        <>
            <h1 className="mantine-Text-root mantine-Title-root text-3xl text-center font-bold mb-8 text-darkBlue mt-16 mantine-166d07m">
                Planes de nuestra I.A
            </h1>
            <div className="manstine-Container-root max-w-6xl mx-auto px-4 mantine-d9zk78">
                <div className="mantine-Grid-root mantine-16fdnqw flex justify-center space-x-4">
                    <div className="mantine-Grid-col mantine-qjx5ze">
                        <div className="mantine-Paper-root mantine-Card-root shadow-md p-4 rounded-md border hover:shadow-2xl mantine-othpma">

                            <div className="mantine-Text-root mantine-Title-root text-2xl font-bold text-darkBlue mantine-166d07m">Gratuito</div>
                            <div className="mantine-Text-root mantine-Text-root text-sm text-darkGray mantine-1j4zq1d">Acceso limitado a todas las funcionalidades básicas. 3 Cotizaciones GRATIS</div>
                            <div className="mantine-Text-root mantine-Text-root text-lg font-bold text-darkBlue mantine-1j4zq1d mt-4">0€/mes</div>
                            <button className="mantine-Button-root mantine-Button-root--outline mt-4 mantine-1j4zq1d">Suscribirse</button>
                        </div>
                    </div>
                    <div className="mantine-Grid-col mantine-qjx5ze">
                        <div className="mantine-Paper-root mantine-Card-root shadow-md p-4 rounded-md border hover:shadow-2xl mantine-othpma">

                            <div className="mantine-Text-root mantine-Title-root text-2xl font-bold text-darkBlue mantine-166d07m">Básico</div>
                            <div className="mantine-Text-root mantine-Text-root text-sm text-darkGray mantine-1j4zq1d">Acceso ilimitado. Funcionalidades básicas ilimitadas. Ideal para usuarios ocasionales</div>
                            <div className="mantine-Text-root mantine-Text-root text-lg font-bold text-darkBlue mantine-1j4zq1d mt-4">20€/mes</div>
                            <button className="mantine-Button-root mantine-Button-root--outline mt-4 mantine-1j4zq1d">Suscribirse</button>
                        </div>
                    </div>
                    <div className="mantine-Grid-col mantine-qjx5ze">
                        <div className="mantine-Paper-root mantine-Card-root shadow-md p-4 rounded-md border hover:shadow-2xl mantine-othpma">

                            <div className="mantine-Text-root mantine-Title-root text-2xl font-bold text-darkBlue mantine-166d07m">Premium</div>
                            <div className="mantine-Text-root mantine-Text-root text-sm text-darkGray mantine-1j4zq1d">Acceso completo a todas las funcionalidades. Ideal para usuarios frecuentes.o</div>
                            <div className="mantine-Text-root mantine-Text-root text-lg font-bold text-darkBlue mantine-1j4zq1d mt-4">120€/mes</div>
                            <button className="mantine-Button-root mantine-Button-root--outline mt-4 mantine-1j4zq1d">Suscribirse</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default PlanCard;
