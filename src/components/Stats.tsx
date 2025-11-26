const stats = [
  {
    value: "8.5%",
    label: "Rentabilidad Media Anual"
  },
  {
    value: "+5,000",
    label: "Inversores Activos"
  },
  {
    value: "€120M",
    label: "Volumen Financiado"
  },
  {
    value: "98%",
    label: "Tasa de Satisfacción"
  }
];

export function Stats() {
  return (
    <div className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-emerald-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
