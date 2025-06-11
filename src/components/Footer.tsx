import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-rever-gray border-t border-rever-gray-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-rever-red rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-oswald font-bold text-white">
                REVER RUSSIA
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Уникальная игровая вселенная с безграничными возможностями.
              Создавай свою историю в мире Rever Russia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-rever-red transition-colors"
              >
                <Icon name="MessageSquare" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rever-red transition-colors"
              >
                <Icon name="Youtube" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rever-red transition-colors"
              >
                <Icon name="Users" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-oswald font-semibold text-lg mb-4">
              Быстрые ссылки
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Возможности
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Скачать
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-oswald font-semibold text-lg mb-4">
              Поддержка
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Правила сервера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Техподдержка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Форум
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rever-red transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rever-gray-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Rever Russia. Все права защищены.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Icon name="Shield" size={16} />
            <span>Безопасная игра</span>
            <span className="mx-2">•</span>
            <Icon name="Clock" size={16} />
            <span>24/7 Онлайн</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
