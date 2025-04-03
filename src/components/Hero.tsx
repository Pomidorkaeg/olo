import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '@/contexts/SiteContext';

const Hero = () => {
  const { heroContent } = useSite();

  return (
    <div className="relative bg-emerald-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 to-emerald-900/95 z-10" />
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-emerald-100 sm:text-5xl md:text-6xl">
                {heroContent.title}
              </h1>
              <p className="mt-3 text-base text-emerald-100/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {heroContent.description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/tournaments"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-emerald-400 hover:bg-emerald-300 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Турнирные таблицы
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div 
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
