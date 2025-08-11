
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, Heart, Bell, User, Truck, Shield } from "lucide-react";
import { useState } from "react";

const MarketplaceHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-marketplace text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4" />
              <span>Entrega garantida pela Logzz</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Pague com PIX na entrega</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Central de Ajuda</a>
            <a href="#" className="hover:underline">Seja um Afiliado</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2">
                <img 
                  src="/lovable-uploads/2a740ebe-550c-4fb5-ad89-df03ac5e3a12.png" 
                  alt="Pix On Delivery Logo" 
                  className="h-8 w-8" 
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Pix On Delivery
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="O que você está procurando?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4 pr-12 py-3 text-lg border-2 border-gray-200 focus:border-marketplace-blue rounded-lg"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bg-flash-orange hover:bg-flash-orange/90 text-white px-6"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Favoritos</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Notificações</span>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </div>
              </Button>

              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Carrinho</span>
              </Button>

              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Minha Conta</span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MarketplaceHeader;
