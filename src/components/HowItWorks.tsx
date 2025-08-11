
import { ShoppingCart, Calendar, Eye, Smartphone, Shield, Zap, CreditCard } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Escolha o Produto",
      description: "Selecione o que deseja comprar no marketplace Pix On Delivery.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Calendar,
      title: "Agende a Entrega",
      description: "Informe seu endereço e escolha a data e hora ideais.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Eye,
      title: "Receba e Confira",
      description: "O entregador chega com seu produto para inspeção. Veja, toque e teste antes de pagar.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Smartphone,
      title: "Pague com Pix na Hora",
      description: "Após confirmar, pague instantaneamente via Pix. Sem taxas, sem maquininhas, só com o celular.",
      color: "bg-pix-green/10 text-pix-green"
    }
  ];

  const features = [
    {
      icon: Shield,
      text: "100% à prova de fraudes"
    },
    {
      icon: Zap,
      text: "Pagamento instantâneo"
    },
    {
      icon: CreditCard,
      text: "Sem taxas adicionais"
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
            O jeito mais seguro, rápido e simples de comprar online no Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`${step.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white mb-12">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 inline-block mb-6">
              <Shield className="h-12 w-12 mx-auto text-white mb-3" />
              <h3 className="text-2xl font-bold mb-2">Você só paga se receber</h3>
            </div>
            <p className="text-xl lg:text-2xl font-semibold mb-8 leading-relaxed">
              Pix On Delivery combina o melhor do pagamento digital com a confiança do pagamento na entrega.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <feature.icon className="h-6 w-6 text-pix-green" />
              <span className="font-semibold text-gray-900">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
