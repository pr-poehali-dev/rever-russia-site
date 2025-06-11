import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      date: "15 января 2025",
      title: "Обновление 2.5: Новые районы и транспорт",
      description:
        "Добавлены 3 новых района города, 15 видов транспорта и улучшена система банд.",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
    },
    {
      date: "08 января 2025",
      title: "Турнир 'Король улиц' начался!",
      description:
        "Участвуй в масштабном турнире и выиграй эксклюзивные призы и звания.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    },
    {
      date: "01 января 2025",
      title: "С Новым годом! Праздничные бонусы",
      description:
        "Специальные новогодние акции, подарки для всех игроков и праздничные ивенты.",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            ПОСЛЕДНИЕ <span className="text-rever-red">НОВОСТИ</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Следи за обновлениями, событиями и важными анонсами игрового мира
            Rever Russia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="rever-card rounded-lg overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-rever-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Новое
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {item.date}
                </div>

                <h3 className="text-xl font-oswald font-semibold text-white mb-3 group-hover:text-rever-red transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <button className="text-rever-red hover:text-rever-red-light transition-colors flex items-center space-x-2">
                  <span>Читать далее</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="rever-button rounded-lg text-lg px-8 py-3">
            Все новости
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
