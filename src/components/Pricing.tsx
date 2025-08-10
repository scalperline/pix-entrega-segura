
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Freemium",
      price: "Grátis",
      period: "para sempre",
      description: "Perfeito para testar a solução",
      features: [
        "30 transações por mês",
        "1 entregador",
        "Dashboard básico",
        "Suporte por email",
        "QR Codes dinâmicos",
        "Confirmação automática"
      ],
      cta: "Começar Grátis",
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Básico",
      price: "R$ 49",
      period: "por mês",
      description: "Ideal para pequenos negócios",
      features: [
        "300 transações por mês",
        "Até 2 entregadores",
        "Dashboard completo",
        "Suporte prioritário",
        "Relatórios detalhados",
        "API de integração",
        "Notificações WhatsApp"
      ],
      cta: "Experimentar 7 Dias Grátis",
      popular: true,
      buttonVariant: "default" as const
    },
    {
      name: "Profissional",
      price: "R$ 149",
      period: "por mês",
      description: "Para operações que crescem",
      features: [
        "Transações ilimitadas",
        "Entregadores ilimitados",
        "Dashboard avançado",
        "Suporte 24/7",
        "Relatórios personalizados",
        "API completa",
        "Integrações avançadas",
        "Multi-estabelecimentos",
        "White label (sua marca)"
      ],
      cta: "Experimentar 14 Dias Grátis",
      popular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Planos que crescem com seu <span className="text-pix-green">negócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece grátis e escale conforme sua operação cresce. 
            Todos os planos incluem segurança 100% contra fraudes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative animate-slide-up ${
                plan.popular ? 'ring-2 ring-pix-green scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pix-green text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-pix-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-semibold text-lg py-3 ${
                  plan.buttonVariant === 'default' 
                    ? 'bg-gradient-primary hover:opacity-90 text-white' 
                    : 'border-pix-green text-pix-green hover:bg-pix-green hover:text-white'
                }`}
                variant={plan.buttonVariant}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💰 Calcule sua economia
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Se você evitar apenas 1 fraude de R$ 50 por mês, o plano Básico já se paga sozinho. 
              Mais todas as horas poupadas em conciliação manual.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">-R$ 200</div>
                <div className="text-sm text-gray-600">Prejuízo médio mensal com fraudes</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">-10h</div>
                <div className="text-sm text-gray-600">Horas perdidas em conciliação</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">+R$ 149</div>
                <div className="text-sm text-gray-600">Economia líquida mensal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
