import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      name: "Fly",
      description: "Летайте свободно по миру",
      icon: "Plane",
      color: "bg-neon-green/20 text-neon-green",
    },
    {
      name: "Speed",
      description: "Увеличенная скорость передвижения",
      icon: "Zap",
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      name: "X-Ray",
      description: "Видите руды через блоки",
      icon: "Eye",
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      name: "ESP",
      description: "Подсветка игроков и мобов",
      icon: "Users",
      color: "bg-orange-500/20 text-orange-400",
    },
    {
      name: "Kill Aura",
      description: "Автоматическая атака врагов",
      icon: "Sword",
      color: "bg-red-500/20 text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-neon-dark text-white font-roboto">
      {/* Header */}
      <header className="border-b border-neon-gray/30 bg-neon-dark/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/img/cb830877-6d97-407b-97e3-3d7cd2f4a9e1.jpg"
              alt="AndrewClient Logo"
              className="w-8 h-8 rounded-lg"
            />
            <h1 className="text-2xl font-orbitron font-bold text-neon-green">
              AndrewClient
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#features"
              className="text-gray-300 hover:text-neon-green transition-colors"
            >
              Функции
            </a>
            <a
              href="#screenshots"
              className="text-gray-300 hover:text-neon-green transition-colors"
            >
              Скриншоты
            </a>
            <a
              href="#download"
              className="text-gray-300 hover:text-neon-green transition-colors"
            >
              Скачать
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-neon-dark to-neon-gray/20">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-orbitron font-bold mb-6 animate-fade-in">
            <span className="text-white">Andrew</span>
            <span className="text-neon-green">Client</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Мощный чит-клиент для Minecraft с продвинутыми функциями
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge
              variant="outline"
              className="border-neon-green text-neon-green px-4 py-2"
            >
              Minecraft 1.20+
            </Badge>
            <Badge
              variant="outline"
              className="border-blue-400 text-blue-400 px-4 py-2"
            >
              Anti-Ban Protection
            </Badge>
            <Badge
              variant="outline"
              className="border-purple-400 text-purple-400 px-4 py-2"
            >
              Постоянные обновления
            </Badge>
          </div>
          <Button
            size="lg"
            className="bg-neon-green text-black hover:bg-neon-green/90 font-orbitron font-bold text-lg px-8 py-4 animate-glow"
          >
            <Icon name="Download" className="mr-2" />
            Скачать Сейчас
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-neon-gray/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-neon-green">
            Возможности
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.name}
                className="bg-neon-dark border-neon-gray/30 hover:border-neon-green/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <Icon name={feature.icon} size={24} />
                  </div>
                  <CardTitle className="text-white font-orbitron">
                    {feature.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-orbitron font-bold text-center mb-12 text-neon-green">
            Скриншоты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg border border-neon-gray/30 hover:border-neon-green/50 transition-all duration-300">
              <img
                src="/img/9bb53328-065d-46ca-aac6-7dc4cbb955c8.jpg"
                alt="X-Ray функция"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-neon-green font-orbitron font-bold text-lg">
                  X-Ray в действии
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-neon-gray/30 hover:border-neon-green/50 transition-all duration-300">
              <img
                src="/img/0b749f3b-99e8-4e9e-b3de-6870598cb5b7.jpg"
                alt="Fly & ESP функции"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-neon-green font-orbitron font-bold text-lg">
                  Fly & ESP модули
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-4 bg-gradient-to-t from-neon-dark to-neon-gray/20"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-orbitron font-bold mb-8 text-neon-green">
            Готов начать?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Скачайте AndrewClient и получите преимущество в игре уже сегодня
          </p>
          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-neon-green text-black hover:bg-neon-green/90 font-orbitron font-bold text-xl px-12 py-6 animate-glow mr-4"
            >
              <Icon name="Download" className="mr-2" />
              Скачать для Windows
            </Button>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Icon
                  name="Shield"
                  className="mr-1 text-neon-green"
                  size={16}
                />
                Защита от банов
              </div>
              <div className="flex items-center">
                <Icon name="Zap" className="mr-1 text-neon-green" size={16} />
                Быстрая установка
              </div>
              <div className="flex items-center">
                <Icon name="Users" className="mr-1 text-neon-green" size={16} />
                Поддержка 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon-gray/30 bg-neon-dark py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p className="font-orbitron">
            © 2024 AndrewClient. Все права защищены.
          </p>
          <p className="text-sm mt-2">
            Используйте читы ответственно и соблюдайте правила серверов.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
