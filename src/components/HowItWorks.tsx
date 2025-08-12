
import { ShoppingCart, Calendar, Truck, Eye, Smartphone } from "lucide-react";

const HowItWorks = () => {
  const timelineSteps = [
    {
      icon: ShoppingCart,
      title: "Escolha o Produto",
      description: "Selecione o que deseja comprar no marketplace Pix On Delivery.",
      color: "bg-green-100 text-green-600",
      borderColor: "border-green-300"
    },
    {
      icon: Calendar,
      title: "Agende a Entrega",
      description: "Informe seu endereço e escolha a data e hora ideais para receber.",
      color: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-300"
    },
    {
      icon: Truck,
      title: "Logzz Entrega",
      description: "Nossa parceira Logzz cuida de toda a logística e leva o produto até você.",
      color: "bg-logzz-teal/10 text-logzz-teal",
      borderColor: "border-logzz-teal/30"
    },
    {
      icon: Eye,
      title: "Confira o Produto",
      description: "Você recebe, vê, toca e testa o produto antes de decidir comprar.",
      color: "bg-purple-100 text-purple-600",
      borderColor: "border-purple-300"
    },
    {
      icon: Smartphone,
      title: "Pague com Pix",
      description: "Após confirmar, pague instantaneamente via Pix. Sem taxas, sem complicações.",
      color: "bg-pix-green/10 text-pix-green",
      borderColor: "border-pix-green/30"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            💡 Como funciona o <span className="text-pix-green">Pix On Delivery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A jornada mais segura, rápida e simples para comprar online no Brasil.
          </p>
        </div>

        {/* Timeline Container */}
        <div>
          {/* Mobile Timeline - Vertical */}
          <div className="block lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pix-green via-logzz-teal to-pix-green"></div>
              
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className={`${step.color} ${step.borderColor} relative z-10 p-3 rounded-full border-4 bg-white shadow-lg flex-shrink-0`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-pix-green via-logzz-teal to-pix-green"></div>
              
              <div className="grid grid-cols-5 gap-8">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Timeline Dot */}
                    <div className={`${step.color} ${step.borderColor} relative z-10 p-4 rounded-full border-4 bg-white shadow-lg w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                      <step.icon className="h-8 w-8" />
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
