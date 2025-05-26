"use client";

import { ArrowRight, Heart, Leaf, Apple } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Organic background with food-inspired shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-sage-50 to-lime-50">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary-100/20 rounded-full blur-3xl"></div>

        {/* Floating food elements */}
        <div className="absolute top-32 right-20 w-16 h-16 bg-lime-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-sage-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-64 left-32 w-8 h-8 bg-gold-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight">
              Heal Your Body with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-sage-500 font-serif">
                Living Foods
              </span>
            </h1>

            {/* Personal story intro */}
            <p className="text-lg sm:text-xl text-primary-600 mb-8 leading-relaxed max-w-2xl">
              I discovered the transformative power of Medical Medium protocols
              through my own healing journey. Now I help others unlock their
              body&apos;s natural healing potential through gentle cleansing and
              superfood nutrition.
            </p>

            {/* Simple trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-10 text-sm text-sage-600">
              <div className="flex items-center space-x-2">
                <Apple className="w-5 h-5 text-lime-500" />
                <span>Medical Medium Protocols</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 text-sage-500" />
                <span>Natural Healing Focus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-lime-400 to-sage-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-warm transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Explore Healing Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/80 backdrop-blur-sm text-primary-700 px-8 py-4 rounded-full font-semibold text-lg border border-sage-200 hover:bg-white hover:shadow-soft transition-all duration-300">
                My Healing Story
              </button>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative order-1 lg:order-2">
            <div className="relative">
              {/* Main photo container */}
              <div className="relative bg-gradient-to-br from-sage-100 to-lime-100 rounded-4xl p-6 shadow-warm">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/50">
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

              {/* Floating elements with food theme */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-lime-400 to-sage-400 rounded-full flex items-center justify-center shadow-lg">
                <Apple className="w-10 h-10 text-white" />
              </div>

              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-gold-400 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>

              {/* Personal touch card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-soft border border-sage-100 max-w-xs">
                <div className="text-center">
                  <div className="text-2xl mb-2">🌱</div>
                  <p className="text-sm text-primary-700 font-medium mb-1">
                    &ldquo;Food is medicine&rdquo;
                  </p>
                  <p className="text-xs text-sage-600">- Anthony William</p>
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
