
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
      <header className="bg-marketplace-yellow shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2">
                <img 
                  src="/lovable-uploads/b61a054b-b672-4aaf-8770-5ec85f38c311.png" 
                  alt="Pix On Delivery Logo" 
                  className="h-10 w-10" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Pix On Delivery</span>
                <span className="text-xs text-gray-600">Powered by Logzz</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="O que você está procurando?" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="pl-4 pr-12 py-3 text-lg border-2 border-gray-200 focus:border-marketplace-blue rounded-lg bg-white" 
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
              <Button variant="ghost" size="sm" className="relative text-gray-900 hover:bg-white/20">
                <Heart className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Favoritos</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="relative text-gray-900 hover:bg-white/20">
                <Bell className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Notificações</span>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </div>
              </Button>

              <Button variant="ghost" size="sm" className="relative text-gray-900 hover:bg-white/20">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 hidden md:inline">Carrinho</span>
              </Button>

              <Button variant="ghost" size="sm" className="text-gray-900 hover:bg-white/20">
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
