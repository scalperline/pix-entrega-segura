
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Smartphone, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme qualquer entregador em um 
              <span className="text-green-300"> terminal Pix seguro</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              Elimine fraudes de comprovante falso e tenha 100% de segurança nos pagamentos via Pix na entrega. 
              Sem maquininhas, apenas o celular.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-corporate-blue hover:bg-gray-100 font-semibold text-lg px-8 py-4">
                Começar Grátis Agora
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-corporate-blue font-semibold text-lg px-8 py-4">
                Ver Demonstração
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">30 transações grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-300" />
                <span className="text-sm">100% à prova de fraudes</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-green-300" />
                <span className="text-sm">Sem hardware adicional</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up lg:animate-float">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 font-medium">Pedido #1234</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Pago ✓
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">R$ 45,90</div>
                <div className="text-gray-600">Pizza Margherita + Refrigerante</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <div className="text-sm">Tempo médio</div>
                  <div className="font-bold">5 segundos</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <div className="text-sm">Segurança</div>
                  <div className="font-bold">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
