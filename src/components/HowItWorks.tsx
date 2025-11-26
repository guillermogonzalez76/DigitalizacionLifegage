import { TrendingUp, Home } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const investorSteps = [
  {
    number: "1",
    title: "Regístrate",
    description: "Crea tu cuenta de inversor en minutos"
  },
  {
    number: "2",
    title: "Elige Proyectos",
    description: "Selecciona las hipotecas en las que quieres invertir"
  },
  {
    number: "3",
    title: "Invierte",
    description: "Diversifica tu capital desde €500"
  },
  {
    number: "4",
    title: "Recibe Rentabilidad",
    description: "Obtén pagos mensuales de forma automática"
  }
];

const borrowerSteps = [
  {
    number: "1",
    title: "Solicita",
    description: "Completa tu solicitud de financiación"
  },
  {
    number: "2",
    title: "Evaluación",
    description: "Analizamos tu perfil y la propiedad"
  },
  {
    number: "3",
    title: "Financiación",
    description: "Los inversores financian tu hipoteca"
  },
  {
    number: "4",
    title: "Tu Hogar",
    description: "Recibe el dinero y compra tu casa"
  }
];

export function HowItWorks() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proceso simple y transparente para inversores y solicitantes
          </p>
        </div>

        {/* Para Inversores */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-gray-900">Para Inversores</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investorSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < investorSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-emerald-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Para Solicitantes */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-gray-900">Para Solicitantes de Hipoteca</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {borrowerSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < borrowerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-teal-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
