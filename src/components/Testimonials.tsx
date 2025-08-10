
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Pizzaria do Carlos",
      city: "São Paulo, SP",
      content: "Em 2 meses usando o Pix On Delivery, não tivemos nenhuma fraude. Antes perdíamos uns R$ 150 por mês com comprovante falso. O sistema se pagou sozinho!",
      rating: 5,
      avatar: "👨‍🍳"
    },
    {
      name: "Ana Ferreira",
      business: "Farmácia Central",
      city: "Belo Horizonte, MG",
      content: "Acabou aquela correria de ficar conferindo extrato toda hora. Agora sei em tempo real se o pagamento entrou. Meus entregadores adoraram a praticidade.",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      name: "Roberto Santos",
      business: "Açaiteria Tropical",
      city: "Rio de Janeiro, RJ",
      content: "O que mais me impressionou foi a velocidade. Cliente paga e na hora aparece 'CONFIRMADO' na tela. Entregadores ficaram muito mais confiantes.",
      rating: 5,
      avatar: "🧔‍♂️"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Quem já usa <span className="text-pix-green">não quer mais voltar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centenas de pequenos negócios já eliminaram as fraudes e automatizaram seus pagamentos com nossa solução.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-slide-up relative"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <Quote className="h-8 w-8 text-pix-green mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-pix-green font-semibold">{testimonial.business}</div>
                  <div className="text-sm text-gray-500">{testimonial.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Junte-se a centenas de negócios que já eliminaram as fraudes
            </h3>
            <p className="text-lg text-gray-100 mb-6">
              Teste grátis por 30 dias e veja como é ter 100% de segurança nos seus pagamentos Pix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold text-lg px-8 py-3">
                Começar Teste Grátis
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-corporate-blue font-semibold text-lg px-8 py-3">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
