import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredGames = [
    {
      title: "Cyberpunk 2077",
      size: "35.2 GB",
      language: "RU/EN",
      image: "/img/edad7137-343a-49fa-a0e3-efa16d4be2ed.jpg",
      category: "RPG",
      rating: 4.5,
      downloads: "127K",
    },
    {
      title: "Call of Duty: Modern Warfare",
      size: "89.7 GB",
      language: "RU/EN",
      image: "/img/c9496459-e1da-4ad5-b266-c275fcdb7e8b.jpg",
      category: "Action",
      rating: 4.8,
      downloads: "89K",
    },
    {
      title: "Assassin's Creed Valhalla",
      size: "47.3 GB",
      language: "RU/EN",
      image: "/img/1a90754c-733d-4857-8fdf-682f7b00fd08.jpg",
      category: "Action/RPG",
      rating: 4.3,
      downloads: "95K",
    },
  ];

  const categories = [
    { name: "Action", count: 156, icon: "Sword" },
    { name: "RPG", count: 89, icon: "Shield" },
    { name: "Racing", count: 45, icon: "Car" },
    { name: "Strategy", count: 67, icon: "Target" },
    { name: "Sports", count: 32, icon: "Trophy" },
    { name: "Horror", count: 28, icon: "Skull" },
  ];

  const stats = [
    { label: "Игр в каталоге", value: "2,847", icon: "Gamepad2" },
    { label: "Общих скачиваний", value: "1.2M+", icon: "Download" },
    { label: "Активных пользователей", value: "45K+", icon: "Users" },
    { label: "Новых релизов", value: "127", icon: "Plus" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-roboto">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/img/21c98a4e-b441-490a-ae70-40f1705c86a8.jpg"
              alt="Bscript Logo"
              className="w-10 h-10 rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-orbitron font-bold text-primary">
                Bscript
              </h1>
              <p className="text-xs text-muted-foreground">Game Repacks</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#catalog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="#categories"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Категории
            </a>
            <a
              href="#latest"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Новинки
            </a>
            <a
              href="#top"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Топ игр
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-orbitron font-bold mb-6 animate-fade-in">
              <span className="text-foreground">Bscript</span>
              <span className="text-primary"> Repacks</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Качественные репаки игр с быстрой установкой и минимальным
              размером. Все последние хиты и классика в одном месте.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Поиск игр..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg bg-card border-border"
              />
              <Icon
                name="Search"
                className="absolute left-4 top-3 text-muted-foreground"
                size={20}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="text-center bg-card/50 border-border"
              >
                <CardContent className="py-4">
                  <Icon
                    name={stat.icon}
                    className="mx-auto mb-2 text-primary"
                    size={24}
                  />
                  <div className="text-2xl font-orbitron font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            🔥 Рекомендуемые игры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, index) => (
              <Card
                key={game.title}
                className="overflow-hidden group hover:scale-[1.02] transition-all duration-300 bg-card border-border"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant="secondary"
                      className="bg-card/80 text-foreground"
                    >
                      {game.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                    <Icon
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                    <span className="text-white text-sm font-medium">
                      {game.rating}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground">
                    {game.title}
                  </CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>💾 {game.size}</span>
                    <span>🌐 {game.language}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Download" size={16} className="mr-1" />
                      {game.downloads}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="Download" className="mr-2" size={16} />
                      Скачать Torrent
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-border text-foreground hover:bg-accent"
                    >
                      <Icon name="Magnet" className="mr-2" size={16} />
                      Magnet-ссылка
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            📂 Категории игр
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="cursor-pointer hover:scale-105 transition-all duration-300 bg-card border-border text-center"
              >
                <CardContent className="py-6">
                  <Icon
                    name={category.icon}
                    className="mx-auto mb-3 text-primary"
                    size={32}
                  />
                  <h3 className="font-orbitron font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} игр
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-orbitron font-bold mb-8 text-primary">
            🚀 Быстро и безопасно
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Zap" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-foreground">
                Быстрая установка
              </h3>
              <p className="text-muted-foreground">
                Все репаки оптимизированы для максимальной скорости установки
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-foreground">
                Проверено на вирусы
              </h3>
              <p className="text-muted-foreground">
                Каждый файл проходит многоуровневую проверку безопасности
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Cpu" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-foreground">
                Минимальный размер
              </h3>
              <p className="text-muted-foreground">
                Сжатие до 70% от оригинального размера без потери качества
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/img/21c98a4e-b441-490a-ae70-40f1705c86a8.jpg"
                  alt="Bscript"
                  className="w-8 h-8 rounded"
                />
                <span className="font-orbitron font-bold text-primary">
                  Bscript
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Лучшие репаки игр для геймеров. Быстро, безопасно, бесплатно.
              </p>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4 text-foreground">
                Каталог
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Популярные
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    По алфавиту
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    По жанрам
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4 text-foreground">
                Помощь
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Как скачать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Установка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron font-semibold mb-4 text-foreground">
                Сообщество
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    VK
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Bscript Repacks. Все права защищены.</p>
            <p className="mt-2">
              Сайт предназначен исключительно для ознакомительных целей.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
