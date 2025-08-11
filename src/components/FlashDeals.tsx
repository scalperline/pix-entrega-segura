
import { Button } from "@/components/ui/button";
import { Zap, Clock, Eye } from "lucide-react";
import { useState, useEffect } from "react";

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 42,
    seconds: 24
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      title: "Smartphone Galaxy A54",
      originalPrice: 1299.99,
      discountPrice: 899.99,
      discount: 31,
      image: "/api/placeholder/200/200",
      sold: 45,
      available: 100
    },
    {
      id: 2,
      title: "Fone Bluetooth Premium",
      originalPrice: 299.99,
      discountPrice: 149.99,
      discount: 50,
      image: "/api/placeholder/200/200",
      sold: 78,
      available: 120
    },
    {
      id: 3,
      title: "Smart TV 50' 4K",
      originalPrice: 2499.99,
      discountPrice: 1799.99,
      discount: 28,
      image: "/api/placeholder/200/200",
      sold: 23,
      available: 50
    },
    {
      id: 4,
      title: "Notebook Intel i5",
      originalPrice: 2799.99,
      discountPrice: 1999.99,
      discount: 29,
      image: "/api/placeholder/200/200",
      sold: 12,
      available: 30
    }
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-gradient-flash rounded-xl p-6 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Oferta Relâmpago</h2>
                <p className="text-white/90">Produtos com desconto por tempo limitado</p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <span className="text-sm text-white/80">Termina em</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[50px]">
                  <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">H</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[50px]">
                  <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">M</div>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-2 text-center min-w-[50px]">
                  <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs text-white/80">S</div>
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="bg-white text-flash-orange hover:bg-gray-100 font-semibold"
              >
                Ver Todas
                <Eye className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deals.map((deal, index) => (
            <div 
              key={deal.id} 
              className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Discount Badge */}
              <div className="relative mb-4">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Imagem do Produto</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{deal.discount}%
                </div>
              </div>

              {/* Product Info */}
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{deal.title}</h3>
              
              {/* Prices */}
              <div className="mb-3">
                <div className="text-lg font-bold text-red-600">
                  R$ {deal.discountPrice.toFixed(2).replace('.', ',')}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  R$ {deal.originalPrice.toFixed(2).replace('.', ',')}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Vendidos: {deal.sold}</span>
                  <span>{((deal.sold / deal.available) * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-flash-orange rounded-full h-2 transition-all duration-300"
                    style={{ width: `${(deal.sold / deal.available) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="sm" 
                className="w-full bg-flash-orange hover:bg-flash-orange/90 text-white font-semibold"
              >
                Comprar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
