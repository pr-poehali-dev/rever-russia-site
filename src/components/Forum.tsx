import Icon from "@/components/ui/icon";

const Forum = () => {
  const categories = [
    {
      title: "Общее обсуждение",
      description: "Основные темы и обсуждения игры",
      topics: 1247,
      posts: 8934,
      lastPost: "2 минуты назад",
      icon: "MessageSquare",
    },
    {
      title: "Помощь новичкам",
      description: "Вопросы и ответы для начинающих",
      topics: 532,
      posts: 3421,
      lastPost: "15 минут назад",
      icon: "HelpCircle",
    },
    {
      title: "Кланы и организации",
      description: "Поиск клана, набор участников",
      topics: 234,
      posts: 1567,
      lastPost: "1 час назад",
      icon: "Users",
    },
    {
      title: "Баги и предложения",
      description: "Сообщения об ошибках и идеи",
      topics: 189,
      posts: 892,
      lastPost: "3 часа назад",
      icon: "Bug",
    },
  ];

  const hotTopics = [
    {
      title: "Новое обновление 2.5.1 - что изменилось?",
      author: "AdminRever",
      replies: 156,
      views: 2341,
      lastReply: "5 минут назад",
    },
    {
      title: "Гайд по заработку для новичков 2024",
      author: "ProPlayer_RU",
      replies: 89,
      views: 1523,
      lastReply: "12 минут назад",
    },
    {
      title: "Набор в топ-клан [ELITE] - строгий отбор",
      author: "EliteLeader",
      replies: 34,
      views: 678,
      lastReply: "25 минут назад",
    },
  ];

  return (
    <section id="forum" className="py-20 bg-rever-gray">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-4 rever-glow">
            ФОРУМ СООБЩЕСТВА
          </h2>
          <p className="text-rever-gray-text text-lg max-w-2xl mx-auto">
            Общайся с игроками, делись опытом, находи союзников и получай помощь
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-2">
            <div className="bg-rever-black border border-rever-gray-light rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-oswald font-bold text-white mb-6 flex items-center gap-3">
                <Icon name="Folder" size={24} className="text-rever-red" />
                Категории форума
              </h3>

              <div className="space-y-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-rever-gray border border-rever-gray-light rounded-lg p-4 hover:border-rever-red transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rever-red/20 rounded-lg flex items-center justify-center group-hover:bg-rever-red/30 transition-colors">
                        <Icon
                          name={category.icon as any}
                          size={24}
                          className="text-rever-red"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-white font-bold text-lg group-hover:text-rever-red transition-colors">
                            {category.title}
                          </h4>
                          <div className="text-right text-sm text-rever-gray-text">
                            <div>Последний пост</div>
                            <div className="text-rever-red">
                              {category.lastPost}
                            </div>
                          </div>
                        </div>

                        <p className="text-rever-gray-text mb-3">
                          {category.description}
                        </p>

                        <div className="flex gap-6 text-sm text-rever-gray-text">
                          <span>📝 {category.topics} тем</span>
                          <span>💬 {category.posts} сообщений</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hot Topics */}
            <div className="bg-rever-black border border-rever-gray-light rounded-lg p-6">
              <h3 className="text-2xl font-oswald font-bold text-white mb-6 flex items-center gap-3">
                <Icon name="Flame" size={24} className="text-rever-red" />
                Горячие темы
              </h3>

              <div className="space-y-4">
                {hotTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="border-b border-rever-gray-light pb-4 last:border-b-0 last:pb-0 hover:bg-rever-gray/30 rounded-lg px-3 py-2 -mx-3 -my-2 transition-colors cursor-pointer"
                  >
                    <h4 className="text-white font-semibold mb-2 hover:text-rever-red transition-colors">
                      {topic.title}
                    </h4>

                    <div className="flex items-center justify-between text-sm text-rever-gray-text">
                      <div className="flex items-center gap-4">
                        <span>👤 {topic.author}</span>
                        <span>💬 {topic.replies}</span>
                        <span>👁️ {topic.views}</span>
                      </div>
                      <span className="text-rever-red">{topic.lastReply}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Online Users */}
            <div className="bg-rever-black border border-rever-gray-light rounded-lg p-6">
              <h3 className="text-xl font-oswald font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                Сейчас онлайн
              </h3>

              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-rever-red">1,247</div>
                <div className="text-rever-gray-text">игроков в сети</div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">На форуме:</span>
                  <span className="text-white">89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">В игре:</span>
                  <span className="text-white">1,158</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">Гости:</span>
                  <span className="text-white">234</span>
                </div>
              </div>
            </div>

            {/* Forum Stats */}
            <div className="bg-rever-black border border-rever-gray-light rounded-lg p-6">
              <h3 className="text-xl font-oswald font-bold text-white mb-4 flex items-center gap-3">
                <Icon name="BarChart3" size={20} className="text-rever-red" />
                Статистика форума
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">Всего тем:</span>
                  <span className="text-white font-semibold">15,642</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">Всего сообщений:</span>
                  <span className="text-white font-semibold">98,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">Участников:</span>
                  <span className="text-white font-semibold">5,891</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-rever-gray-text">Новый участник:</span>
                  <span className="text-rever-red">ReverFan2024</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-rever-black border border-rever-gray-light rounded-lg p-6">
              <h3 className="text-xl font-oswald font-bold text-white mb-4">
                Быстрые действия
              </h3>

              <div className="space-y-3">
                <button className="w-full rever-button rounded-lg">
                  Создать тему
                </button>
                <button className="w-full bg-rever-gray border border-rever-gray-light text-white py-2 px-4 rounded-lg hover:border-rever-red transition-colors">
                  Поиск по форуму
                </button>
                <button className="w-full bg-rever-gray border border-rever-gray-light text-white py-2 px-4 rounded-lg hover:border-rever-red transition-colors">
                  Последние сообщения
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
