
import { ShoppingCart, Calendar, Truck, Eye, Smartphone, CheckCircle, Clock } from "lucide-react";

const HowItWorks = () => {
  const timelineSteps = [
    {
      icon: ShoppingCart,
      title: "1. Escolha seu Produto",
      description: "Navegue pelo marketplace e selecione os produtos que deseja comprar.",
      detail: "Variedade de produtos com preços competitivos",
      color: "bg-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Calendar,
      title: "2. Agende sua Entrega",
      description: "Informe seu endereço e escolha o melhor horário para receber.",
      detail: "Flexibilidade total de agendamento",
      color: "bg-purple-500", 
      bgColor: "bg-purple-50"
    },
    {
      icon: Truck,
      title: "3. Logzz Cuida da Logística",
      description: "Nossa parceira Logzz garante entrega segura e no prazo combinado.",
      detail: "Entrega profissional e rastreamento em tempo real",
      color: "bg-logzz-teal",
      bgColor: "bg-teal-50",
      highlight: true
    },
    {
      icon: Eye,
      title: "4. Confira antes de Pagar",
      description: "Receba, abra, teste e avalie o produto na presença do entregador.",
      detail: "100% de segurança - só pague se estiver satisfeito",
      color: "bg-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Smartphone,
      title: "5. Pague com PIX",
      description: "Após aprovar o produto, pague instantaneamente via PIX.",
      detail: "Pagamento rápido, seguro e sem taxas extras",
      color: "bg-pix-green",
      bgColor: "bg-green-50"
    },
    {
      icon: CheckCircle,
      title: "6. Compra Finalizada",
      description: "Produto seu, pagamento confirmado. Compra 100% segura!",
      detail: "Satisfação garantida ou seu dinheiro de volta",
      color: "bg-green-600",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-pix-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-marketplace-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pix-green/10 text-pix-green px-4 py-2 rounded-full mb-6">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Jornada do Cliente</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como funciona o <span className="text-pix-green">Pix On Delivery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma experiência de compra revolucionária que combina a segurança do Cash on Delivery 
            com a agilidade do PIX e a confiabilidade da <span className="font-semibold text-logzz-teal">Logzz</span>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-marketplace-blue via-pix-green to-logzz-teal rounded-full hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {timelineSteps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col lg:flex-row items-center gap-8 animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Content - Left side on even, right side on odd */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12 lg:order-2'}`}>
                  <div className={`${step.bgColor} rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${step.highlight ? 'ring-2 ring-logzz-teal/20' : ''}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {step.detail}
                    </p>
                    {step.highlight && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-logzz-teal text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <Truck className="h-4 w-4" />
                        Powered by Logzz
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  {/* Connecting line for mobile */}
                  {index < timelineSteps.length - 1 && (
                    <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-200 mx-auto mt-4"></div>
                  )}
                </div>

                {/* Spacer for desktop layout */}
                <div className={`flex-1 hidden lg:block ${index % 2 === 0 ? 'order-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para uma experiência de compra segura?
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se a milhares de clientes que já confiam no Pix On Delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pix-green hover:bg-pix-green/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Começar a Comprar
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
