import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a472a] to-[#006400] py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffd700]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b0000]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ffd700] mb-4 drop-shadow-lg">Контакты</h1>
          <div className="w-24 h-1 bg-[#ffd700] mx-auto mb-6"></div>
          <p className="text-xl text-[#ffd700]/90">
            Свяжитесь с нами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <div className="bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-6">Контактная информация</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#ffd700] mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#ffd700] mb-1">Адрес</h3>
                  <p className="text-[#ffd700]/80">
                    ул. Спортивная, 1<br />
                    г. Гудаута, Абхазия
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#ffd700] mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#ffd700] mb-1">Телефоны</h3>
                  <p className="text-[#ffd700]/80">
                    +7 (940) 123-45-67<br />
                    +7 (940) 765-43-21
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#ffd700] mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#ffd700] mb-1">Email</h3>
                  <p className="text-[#ffd700]/80">
                    info@fcgudauta.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#ffd700] mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-[#ffd700] mb-1">Режим работы</h3>
                  <p className="text-[#ffd700]/80">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб-Вс: 10:00 - 16:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div className="bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20">
            <h2 className="text-2xl font-bold text-[#ffd700] mb-6">Напишите нам</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#ffd700] mb-2">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#1a472a]/60 border border-[#ffd700]/20 rounded-lg text-[#ffd700] placeholder-[#ffd700]/40 focus:outline-none focus:border-[#ffd700]/40 transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#ffd700] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#1a472a]/60 border border-[#ffd700]/20 rounded-lg text-[#ffd700] placeholder-[#ffd700]/40 focus:outline-none focus:border-[#ffd700]/40 transition-colors"
                  placeholder="Введите ваш email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#ffd700] mb-2">Сообщение</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#1a472a]/60 border border-[#ffd700]/20 rounded-lg text-[#ffd700] placeholder-[#ffd700]/40 focus:outline-none focus:border-[#ffd700]/40 transition-colors resize-none"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#8b0000] text-[#ffd700] font-semibold rounded-lg hover:bg-[#8b0000]/90 transition-colors"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        {/* Карта */}
        <div className="mt-12 bg-[#1a472a]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#ffd700]/20">
          <h2 className="text-2xl font-bold text-[#ffd700] mb-6">Как нас найти</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.0!2d40.0!3d43.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDAwJzAwLjAiTiA0MMKwMDAnMDAuMCJF!5e0!3m2!1sru!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
