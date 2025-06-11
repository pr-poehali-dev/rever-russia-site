import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-rever-red rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-rever-red-light rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-rever-red rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-rever-red-light rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-oswald font-bold text-white mb-6 rever-glow">
            REVER
            <br />
            <span className="text-rever-red">RUSSIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Погрузись в мир безграничных возможностей. Создавай свою историю в
            уникальной игровой вселенной.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="rever-card p-4 rounded-lg">
              <div className="text-3xl font-bold text-rever-red mb-2">50K+</div>
              <div className="text-gray-400 text-sm">Активных игроков</div>
            </div>
            <div className="rever-card p-4 rounded-lg">
              <div className="text-3xl font-bold text-rever-red mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Онлайн сервера</div>
            </div>
            <div className="rever-card p-4 rounded-lg">
              <div className="text-3xl font-bold text-rever-red mb-2">100+</div>
              <div className="text-gray-400 text-sm">Уникальных локаций</div>
            </div>
            <div className="rever-card p-4 rounded-lg">
              <div className="text-3xl font-bold text-rever-red mb-2">5★</div>
              <div className="text-gray-400 text-sm">Рейтинг игроков</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="rever-button rounded-lg text-lg px-8 py-3 flex items-center space-x-2">
              <Icon name="Play" size={20} />
              <span>Начать игру</span>
            </button>
            <button className="border-2 border-rever-red text-rever-red hover:bg-rever-red hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2">
              <Icon name="Download" size={20} />
              <span>Скачать клиент</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={24} className="text-rever-red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
