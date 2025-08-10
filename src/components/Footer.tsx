
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Pix On Delivery</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A solução definitiva para pagamentos Pix seguros na entrega. 
              Elimine fraudes e automatize seu processo de cobrança.
            </p>
            <div className="text-sm text-gray-400">
              100% seguro • 100% brasileiro
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Produto</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreira</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Suporte</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-pix-green" />
                <span className="text-gray-300">suporte@pixondelivery.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-pix-green" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-pix-green" />
                <span className="text-gray-300">São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Pix On Delivery. Todos os direitos reservados.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
