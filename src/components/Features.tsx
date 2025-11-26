import { Shield, BarChart3, Clock, Sparkles, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Seguro y Regulado",
    description: "Plataforma registrada y supervisada. Todas las operaciones están protegidas."
  },
  {
    icon: BarChart3,
    title: "Rentabilidad Superior",
    description: "Obtén rendimientos entre 6-10% anual, superiores a los depósitos bancarios."
  },
  {
    icon: Users,
    title: "Diversificación Fácil",
    description: "Invierte en múltiples hipotecas y reduce tu riesgo automáticamente."
  },
  {
    icon: CheckCircle,
    title: "Proceso Transparente",
    description: "Seguimiento completo de todas tus inversiones y préstamos en tiempo real."
  },
  {
    icon: Clock,
    title: "Liquidez Flexible",
    description: "Opciones de salida anticipada en el mercado secundario de inversiones."
  },
  {
    icon: Sparkles,
    title: "Tasas Competitivas",
    description: "Condiciones de financiación más favorables que los bancos tradicionales."
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Por Qué Elegir LifeGage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La forma más inteligente de invertir tu dinero o financiar tu hogar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}