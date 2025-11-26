import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">
              LifeGage
            </div>
            <h1 className="text-gray-900">
              Conectamos tu Capital con Oportunidades Hipotecarias
            </h1>
            <p className="text-gray-600">
              La plataforma que une inversores que buscan rentabilidad con 
              personas que necesitan financiación hipotecaria. Invierte tu dinero 
              de forma segura y obtén mayores rendimientos, o financia tu hogar 
              con condiciones competitivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                Empezar a Invertir
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
                Solicitar Financiación
              </button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="House investment"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}