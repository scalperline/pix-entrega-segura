
import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Golpe do Comprovante Falso",
      description: "Entregadores recebem prints falsos de comprovantes Pix e entregam produtos sem receber pagamento real."
    },
    {
      icon: DollarSign,
      title: "Caos na Conciliação",
      description: "Conferir manualmente dezenas de extratos bancários para confirmar se os pagamentos realmente entraram."
    },
    {
      icon: Users,
      title: "Acesso Inseguro às Contas",
      description: "Compartilhar login do banco com funcionários expõe dados sensíveis e cria vulnerabilidades."
    },
    {
      icon: Clock,
      title: "Processo Manual e Lento",
      description: "Perda de tempo com checagens manuais que poderiam ser automatizadas de forma segura."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Os problemas que você enfrenta <span className="text-red-600">todos os dias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sabemos exatamente as dores que pequenos negócios com delivery próprio passam. 
            É por isso que criamos uma solução específica para resolver cada um desses problemas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
                <problem.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💸 Quanto dinheiro você já perdeu com golpes?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Uma única fraude pode custar R$ 50, R$ 100 ou mais. Multiplique isso por mês... 
              O Pix On Delivery se paga sozinho eliminando apenas UMA fraude.
            </p>
            <div className="bg-gradient-primary text-white p-4 rounded-lg font-semibold text-lg">
              ⚡ Pare de perder dinheiro hoje mesmo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
