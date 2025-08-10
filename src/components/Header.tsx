
import { Button } from "@/components/ui/button";
import { Smartphone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pix On Delivery
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-gray-700 hover:text-pix-green transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="text-gray-700 hover:text-pix-green transition-colors">
              Preços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-pix-green transition-colors">
              Contato
            </a>
            <Button variant="outline" className="border-pix-green text-pix-green hover:bg-pix-green hover:text-white">
              Entrar
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 text-white font-semibold">
              Começar Grátis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#como-funciona" className="block text-gray-700 hover:text-pix-green transition-colors">
              Como Funciona
            </a>
            <a href="#precos" className="block text-gray-700 hover:text-pix-green transition-colors">
              Preços
            </a>
            <a href="#contato" className="block text-gray-700 hover:text-pix-green transition-colors">
              Contato
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-pix-green text-pix-green hover:bg-pix-green hover:text-white w-full">
                Entrar
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 text-white font-semibold w-full">
                Começar Grátis
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
