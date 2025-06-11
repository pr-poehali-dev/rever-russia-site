import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rever-black/95 backdrop-blur-sm border-b border-rever-gray-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-rever-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-oswald font-bold text-white rever-glow">
              REVER RUSSIA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-rever-red transition-colors duration-300"
            >
              Главная
            </a>
            <a
              href="#features"
              className="text-white hover:text-rever-red transition-colors duration-300"
            >
              Возможности
            </a>
            <a
              href="#news"
              className="text-white hover:text-rever-red transition-colors duration-300"
            >
              Новости
            </a>
            <a
              href="#forum"
              className="text-white hover:text-rever-red transition-colors duration-300"
            >
              Форум
            </a>
            <a
              href="#download"
              className="text-white hover:text-rever-red transition-colors duration-300"
            >
              Скачать
            </a>
            <button className="rever-button rounded-md">Играть</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-rever-gray border-t border-rever-gray-light">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#home"
                className="text-white hover:text-rever-red transition-colors"
              >
                Главная
              </a>
              <a
                href="#features"
                className="text-white hover:text-rever-red transition-colors"
              >
                Возможности
              </a>
              <a
                href="#news"
                className="text-white hover:text-rever-red transition-colors"
              >
                Новости
              </a>
              <a
                href="#forum"
                className="text-white hover:text-rever-red transition-colors"
              >
                Форум
              </a>
              <a
                href="#download"
                className="text-white hover:text-rever-red transition-colors"
              >
                Скачать
              </a>
              <button className="rever-button rounded-md w-full">Играть</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
