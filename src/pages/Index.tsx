import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

function Index() {
  const [selectedArtwork, setSelectedArtwork] = useState<any>(null)
  const [currentSection, setCurrentSection] = useState('home')

  const artworks = [
    {
      id: 1,
      title: "Современная абстракция",
      artist: "Анна Волкова",
      price: "45 000",
      image: "/img/db5868d5-aed6-4e40-ac5b-d08e2953480a.jpg",
      description: "Минималистичная композиция в синих и золотых тонах",
      category: "Абстракция",
      size: "80x60 см"
    },
    {
      id: 2,
      title: "Городские ритмы",
      artist: "Михаил Петров",
      price: "62 000",
      image: "/img/ce19ce13-7062-45af-9a67-34dc41e05763.jpg",
      description: "Динамичная работа в красно-оранжевых тонах",
      category: "Современное искусство",
      size: "100x70 см"
    },
    {
      id: 3,
      title: "Классический портрет",
      artist: "Елена Романова",
      price: "125 000",
      image: "/img/7be2958a-2b34-4615-9aba-e14bb25e28a3.jpg",
      description: "Портрет в традиционной манере с золотой рамой",
      category: "Классика",
      size: "90x70 см"
    }
  ]

  const renderNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Palette" size={28} className="text-primary" />
            <span className="font-playfair font-semibold text-xl text-primary">Арт Галерея</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'catalog', label: 'Каталог' },
              { id: 'contacts', label: 'Контакты' },
              { id: 'delivery', label: 'Доставка' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`font-inter text-sm transition-colors hover:text-secondary ${
                  currentSection === item.id 
                    ? 'text-secondary border-b-2 border-secondary pb-1' 
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Icon name="Search" size={20} className="text-gray-600 cursor-pointer hover:text-secondary transition-colors" />
            <Icon name="Heart" size={20} className="text-gray-600 cursor-pointer hover:text-secondary transition-colors" />
            <Icon name="ShoppingBag" size={20} className="text-gray-600 cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  )

  const renderHome = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-playfair font-bold text-5xl md:text-7xl text-primary mb-6 animate-fade-in">
            Искусство для<br />
            <span className="text-secondary">вашего дома</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя уникальную коллекцию современного и классического искусства. 
            Каждая работа тщательно отобрана для создания особой атмосферы в вашем интерьере.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => setCurrentSection('catalog')}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg font-inter"
            >
              Смотреть каталог
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-inter"
            >
              О галерее
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-semibold text-4xl text-primary mb-4">Избранные работы</h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Посмотрите, как наши картины преображают интерьеры и создают уникальную атмосферу
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork) => (
              <Card key={artwork.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <Button 
                    onClick={() => setSelectedArtwork(artwork)}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-primary"
                    size="sm"
                  >
                    <Icon name="Eye" size={16} />
                  </Button>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">{artwork.category}</Badge>
                    <span className="font-playfair font-semibold text-lg text-secondary">₽{artwork.price}</span>
                  </div>
                  <CardTitle className="font-playfair text-xl text-primary">{artwork.title}</CardTitle>
                  <CardDescription className="font-inter text-gray-600">
                    {artwork.artist} • {artwork.size}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-semibold text-4xl text-primary mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Palette",
                title: "Кураторский отбор",
                description: "Каждая работа проходит тщательный отбор наших экспертов"
              },
              {
                icon: "Truck",
                title: "Безопасная доставка",
                description: "Специальная упаковка и страхование всех произведений"
              },
              {
                icon: "Shield",
                title: "Гарантия подлинности",
                description: "Сертификат подлинности к каждой работе"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={32} className="text-secondary" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-primary mb-3">{feature.title}</h3>
                <p className="font-inter text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  const renderCatalog = () => (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair font-semibold text-4xl text-primary mb-4">Каталог произведений</h1>
          <p className="font-inter text-lg text-gray-600">Откройте для себя нашу полную коллекцию</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    onClick={() => setSelectedArtwork(artwork)}
                    className="w-full bg-white/90 hover:bg-white text-primary"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Посмотреть в интерьере
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="text-xs">{artwork.category}</Badge>
                  <span className="font-playfair font-semibold text-xl text-secondary">₽{artwork.price}</span>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-primary mb-2">{artwork.title}</h3>
                <p className="font-inter text-gray-600 mb-2">{artwork.artist}</p>
                <p className="font-inter text-sm text-gray-500 mb-4">{artwork.size}</p>
                <p className="font-inter text-gray-600 text-sm">{artwork.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderContacts = () => (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair font-semibold text-4xl text-primary mb-4">Контакты</h1>
          <p className="font-inter text-lg text-gray-600">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair font-semibold text-2xl text-primary mb-6">Наша галерея</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={20} className="text-secondary mt-1" />
                <div>
                  <p className="font-inter font-medium text-primary">Адрес</p>
                  <p className="font-inter text-gray-600">ул. Пушкина, 15, Москва, 101000</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Phone" size={20} className="text-secondary mt-1" />
                <div>
                  <p className="font-inter font-medium text-primary">Телефон</p>
                  <p className="font-inter text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Mail" size={20} className="text-secondary mt-1" />
                <div>
                  <p className="font-inter font-medium text-primary">Email</p>
                  <p className="font-inter text-gray-600">info@artgallery.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={20} className="text-secondary mt-1" />
                <div>
                  <p className="font-inter font-medium text-primary">Часы работы</p>
                  <p className="font-inter text-gray-600">Пн-Пт: 10:00-20:00<br/>Сб-Вс: 11:00-19:00</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-playfair text-2xl text-primary">Напишите нам</CardTitle>
            </CardHeader>
            <div className="space-y-4">
              <div>
                <label className="font-inter text-sm font-medium text-primary block mb-2">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-primary block mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="font-inter text-sm font-medium text-primary block mb-2">Сообщение</label>
                <Textarea placeholder="Расскажите, чем мы можем помочь..." rows={4} />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Отправить сообщение
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderDelivery = () => (
    <div className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-playfair font-semibold text-4xl text-primary mb-4">Доставка и оплата</h1>
          <p className="font-inter text-lg text-gray-600">Безопасная доставка произведений искусства</p>
        </div>

        <Tabs defaultValue="delivery" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
            <TabsTrigger value="payment">Оплата</TabsTrigger>
          </TabsList>
          
          <TabsContent value="delivery" className="mt-8">
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-playfair text-xl text-primary flex items-center">
                    <Icon name="Truck" size={24} className="text-secondary mr-3" />
                    Курьерская доставка
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="font-inter text-gray-600 space-y-2">
                    <li>• По Москве в пределах МКАД — 2 000 ₽</li>
                    <li>• За МКАД — 2 000 ₽ + 50 ₽/км</li>
                    <li>• Доставка в день заказа при оформлении до 14:00</li>
                    <li>• Специальная упаковка для произведений искусства</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-playfair text-xl text-primary flex items-center">
                    <Icon name="Package" size={24} className="text-secondary mr-3" />
                    Почтовая доставка
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="font-inter text-gray-600 space-y-2">
                    <li>• По России — от 1 500 ₽</li>
                    <li>• Международная доставка — расчет индивидуально</li>
                    <li>• Сроки доставки 3-7 рабочих дней</li>
                    <li>• Страхование на полную стоимость произведения</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-playfair text-xl text-primary flex items-center">
                    <Icon name="Store" size={24} className="text-secondary mr-3" />
                    Самовывоз
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="font-inter text-gray-600">
                    Бесплатно из нашей галереи по адресу: ул. Пушкина, 15, Москва<br/>
                    Режим работы: Пн-Пт 10:00-20:00, Сб-Вс 11:00-19:00
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="payment" className="mt-8">
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-playfair text-xl text-primary flex items-center">
                    <Icon name="CreditCard" size={24} className="text-secondary mr-3" />
                    Способы оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="font-inter text-gray-600 space-y-2">
                    <li>• Банковские карты Visa, MasterCard, МИР</li>
                    <li>• Банковский перевод для юридических лиц</li>
                    <li>• Наличными при получении (только для Москвы)</li>
                    <li>• Рассрочка до 12 месяцев через банки-партнеры</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-playfair text-xl text-primary flex items-center">
                    <Icon name="Shield" size={24} className="text-secondary mr-3" />
                    Гарантии
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="font-inter text-gray-600 space-y-2">
                    <li>• Сертификат подлинности к каждому произведению</li>
                    <li>• Страхование при доставке на полную стоимость</li>
                    <li>• Возврат в течение 14 дней при сохранении товарного вида</li>
                    <li>• Профессиональная консультация по размещению</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white font-inter">
      {renderNavigation()}
      
      {currentSection === 'home' && renderHome()}
      {currentSection === 'catalog' && renderCatalog()}
      {currentSection === 'contacts' && renderContacts()}
      {currentSection === 'delivery' && renderDelivery()}

      {/* Artwork Preview Dialog */}
      <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArtwork && (
            <>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl text-primary">
                  {selectedArtwork.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img 
                    src={selectedArtwork.image} 
                    alt={selectedArtwork.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <p className="font-inter text-sm text-gray-500 mt-2 text-center">
                    Картина в интерьере
                  </p>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline">{selectedArtwork.category}</Badge>
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-primary mb-2">
                        {selectedArtwork.title}
                      </h3>
                      <p className="font-inter text-gray-600">{selectedArtwork.artist}</p>
                      <p className="font-inter text-sm text-gray-500">{selectedArtwork.size}</p>
                    </div>
                    <p className="font-inter text-gray-600">{selectedArtwork.description}</p>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-playfair font-semibold text-2xl text-secondary">
                          ₽{selectedArtwork.price}
                        </span>
                      </div>
                      <div className="space-y-3">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          Добавить в корзину
                        </Button>
                        <Button variant="outline" className="w-full">
                          <Icon name="Heart" size={16} className="mr-2" />
                          В избранное
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Index