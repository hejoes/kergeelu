"use client";

import { ArrowRight, Heart, Leaf, Apple } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Clean background with subtle decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-sage-50 to-lime-50">
        {/* Large background circles - better desktop positioning */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-200/15 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-200/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        {/* Subtle accent circles - positioned more strategically for desktop */}
        <div className="hidden xl:block absolute top-1/3 left-1/5 w-32 h-32 bg-gold-200/8 rounded-full blur-2xl"></div>
        <div className="hidden xl:block absolute bottom-1/4 right-1/4 w-24 h-24 bg-sage-300/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Personal intro badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-sage-200 mb-8">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm font-medium text-primary-700">
                Your Guide to Natural Healing
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-800 mb-4 lg:mb-6 leading-tight">
              Heal Your Body with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-sage-500 font-serif">
                Living Foods
              </span>
            </h1>

            {/* Personal story intro */}
            <p className="text-base sm:text-lg lg:text-xl text-primary-600 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              After my own transformative healing journey, I discovered the
              incredible power of whole foods and gentle detoxification. Now
              I&apos;m passionate about sharing these life-changing methods to
              help you reclaim your vitality and feel amazing in your body.
            </p>

            {/* Simple trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8 mb-6 lg:mb-10 text-sm text-sage-600">
              <div className="flex items-center space-x-2">
                <Apple className="w-5 h-5 text-lime-500" />
                <span>Whole Food Healing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-sage-500" />
                <span>Gentle Detox Methods</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 justify-center lg:justify-start lg:flex-row lg:gap-4">
              <a
                href="#program"
                className="group bg-gradient-to-r from-lime-400 to-sage-400 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:shadow-warm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span className="hidden sm:inline">
                  Join the Liver Rescue Program
                </span>
                <span className="sm:hidden">Join My Program</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="bg-white/80 backdrop-blur-sm text-primary-700 px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg border border-sage-200 hover:bg-white hover:shadow-soft transition-all duration-300"
              >
                My Healing Story
              </a>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Main photo container */}
              <div className="relative bg-gradient-to-br from-sage-100 to-lime-100 rounded-4xl p-4 lg:p-6 shadow-warm">
                <div className="aspect-[4/5] lg:aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/50">
                  <Image
                    src="/portree.jpg"
                    alt="Professional photo"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Personal touch card - repositioned for mobile */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-8 lg:-right-8 bg-white rounded-2xl p-3 lg:p-6 shadow-soft border border-sage-100 max-w-xs">
                <div className="text-center">
                  <div className="text-lg lg:text-2xl mb-1 lg:mb-2">💚</div>
                  <p className="text-xs lg:text-sm text-primary-700 font-medium mb-1">
                    &ldquo;Your body knows how to heal&rdquo;
                  </p>
                  <p className="text-xs text-sage-600">- My philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
