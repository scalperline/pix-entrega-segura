
import { QrCode, Smartphone, CheckCircle, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "1. Cadastre seus entregadores",
      description: "Adicione sua equipe na plataforma web e eles baixam o app gratuito nos celulares.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: QrCode,
      title: "2. QR Code automático na entrega",
      description: "Na chegada ao cliente, o app gera um QR Code Pix único com o valor exato do pedido.",
      color: "bg-pix-green/10 text-pix-green"
    },
    {
      icon: CheckCircle,
      title: "3. Confirmação instantânea",
      description: "Assim que o pagamento é feito, a tela muda para 'PAGO' automaticamente. Só então o produto é entregue.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "4. Dashboard em tempo real",
      description: "Acompanhe todos os pagamentos em tempo real, com relatórios já conciliados automaticamente.",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Como funciona o <span className="text-pix-green">Pix On Delivery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em 4 passos simples, você elimina 100% das fraudes e automatiza todo o processo de cobrança na entrega.
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

        <div className="bg-gradient-primary rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                🛡️ 100% À prova de fraudes
              </h3>
              <p className="text-lg mb-6 text-gray-100">
                Não existe mais risco de golpe do comprovante falso. A confirmação é direta dos servidores 
                do banco via API, impossível de falsificar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Pagamento confirmado em tempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Sem acesso às contas da empresa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Relatórios automáticos e conciliados</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <h4 className="font-bold mb-2">Tela do Entregador</h4>
                <div className="bg-white text-gray-900 rounded-lg p-4 mb-4">
                  <div className="font-bold text-lg text-green-600 mb-2">✅ PAGAMENTO CONFIRMADO</div>
                  <div className="text-sm">Pedido #1234 - R$ 45,90</div>
                  <div className="text-xs text-gray-500 mt-1">Pode entregar o produto</div>
                </div>
                <p className="text-sm text-gray-200">
                  Sinal verde para entregar apenas após confirmação real do pagamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
