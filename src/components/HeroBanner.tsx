
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Zap, Truck, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Oferta Relâmpago",
      subtitle: "Produtos selecionados com desconto imperdível. Aproveite agora!",
      ctaText: "Ver Ofertas",
      ctaSecondary: "Saiba Mais",
      bgColor: "bg-gradient-flash",
      badge: "Até 50% OFF",
      features: ["Entrega Logzz", "Pagamento Seguro", "Entrega Rápida"]
    },
    {
      id: 2,
      title: "10% OFF no PIX",
      subtitle: "Pague com PIX na entrega e ganhe desconto extra",
      ctaText: "Aproveitar",
      ctaSecondary: "Como Funciona",
      bgColor: "bg-gradient-marketplace",
      badge: "Pagamento na entrega",
      features: ["Entrega Logzz", "Pagamento Seguro", "Entrega Rápida"]
    },
    {
      id: 3,
      title: "Semana do Frete Grátis",
      subtitle: "Compre com segurança e receba em casa sem pagar frete",
      ctaText: "Comprar Agora",
      ctaSecondary: "Ver Condições",
      bgColor: "bg-gradient-marketplace",
      badge: "Em todos os produtos",
      features: ["Entrega Logzz", "Pagamento Seguro", "Entrega Rápida"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentBanner = banners[currentSlide];

  return (
    <section className="relative bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className={`${currentBanner.bgColor} text-white relative min-h-[400px] flex items-center`}>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="w-full grid lg:grid-cols-2 gap-8 items-center p-8">
              {/* Content */}
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-semibold">{currentBanner.badge}</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  {currentBanner.title}
                </h1>
                
                <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
                  {currentBanner.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="bg-white text-gray-900 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-lg"
                  >
                    {currentBanner.ctaText}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg px-8 py-4 rounded-lg"
                  >
                    {currentBanner.ctaSecondary}
                  </Button>
                </div>

                {/* Trust Features */}
                <div className="flex flex-wrap gap-6">
                  {currentBanner.features.map((feature, index) => {
                    const icons = [Truck, Shield, Clock];
                    const Icon = icons[index];
                    return (
                      <div key={feature} className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-white/80" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Element */}
              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 text-gray-900">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600 font-medium">Exemplo de Produto</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Disponível ✓
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-2">R$ 89,90</div>
                    <div className="text-gray-600 mb-4">Smartphone Premium 128GB</div>
                    <div className="text-sm text-gray-500">Entrega em 24h pela Logzz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
