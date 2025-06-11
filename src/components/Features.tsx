import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Sword",
      title: "Экшен & ПВП",
      description:
        "Динамичные бои, захватывающие дуэли и масштабные сражения в реальном времени.",
    },
    {
      icon: "Users",
      title: "Социальное взаимодействие",
      description:
        "Создавай банды, заключай альянсы и стройй империю вместе с друзьями.",
    },
    {
      icon: "Car",
      title: "Транспорт",
      description:
        "Огромный автопарк: от спорткаров до вертолетов. Кастомизируй и тюнингуй.",
    },
    {
      icon: "Building",
      title: "Недвижимость",
      description:
        "Покупай дома, бизнесы и территории. Развивай свою криминальную империю.",
    },
    {
      icon: "Briefcase",
      title: "Работа & Бизнес",
      description:
        "Множество профессий и возможностей заработка. От такси до крупного бизнеса.",
    },
    {
      icon: "Crown",
      title: "Система рангов",
      description:
        "Поднимайся по карьерной лестнице и становись авторитетом в криминальном мире.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-rever-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            ИГРОВЫЕ <span className="text-rever-red">ВОЗМОЖНОСТИ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Rever Russia предлагает уникальный игровой опыт с множеством
            возможностей для развития и развлечений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rever-card p-6 rounded-lg group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rever-red rounded-lg flex items-center justify-center group-hover:bg-rever-red-light transition-colors">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-oswald font-semibold text-white ml-4">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="rever-button rounded-lg text-lg px-8 py-3">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
