"use client";

import { Heart, Leaf, Apple, Sparkles } from "lucide-react";

const AboutSection = () => {
  const healingPrinciples = [
    {
      icon: Apple,
      title: "Living Foods",
      description:
        "Harnessing the power of fresh fruits and vegetables for healing",
      color: "text-red-500",
    },
    {
      icon: Leaf,
      title: "Gentle Cleansing",
      description: "Supporting your liver's natural detoxification processes",
      color: "text-sage-500",
    },
    {
      icon: Heart,
      title: "Holistic Healing",
      description: "Addressing root causes, not just symptoms",
      color: "text-red-400",
    },
    {
      icon: Sparkles,
      title: "Natural Protocols",
      description: "Following Anthony William's proven healing methods",
      color: "text-gold-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6 font-serif">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-sage-500">
                  Healing Journey
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-sage-400 rounded-full mb-6"></div>
            </div>

            <div className="space-y-6 text-primary-600 leading-relaxed">
              <p className="text-lg">
                My path to wellness began when conventional medicine
                couldn&apos;t provide the answers I desperately needed. After
                years of struggling with my health, I discovered Anthony
                Williams&apos; Medical Medium protocols.
              </p>

              <p>
                The transformation was remarkable. Through gentle liver
                cleansing, strategic detoxification, and embracing healing
                foods, I experienced what true vitality feels like. This journey
                opened my eyes to the incredible healing power that lies within
                each of us.
              </p>

              <p>
                Now, I&apos;m passionate about sharing these life-changing
                principles with others who are ready to embark on their own
                healing journey. Every person I work with reminds me of the
                miracle that happens when we give our bodies what they truly
                need.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12">
              <button className="bg-gradient-to-r from-lime-400 to-sage-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-warm transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Right Content - Healing Principles */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sage-50 to-cream-100 rounded-4xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">
                Healing Principles I Follow
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {healingPrinciples.map((principle, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <principle.icon
                      className={`w-8 h-8 ${principle.color} mb-4`}
                    />
                    <h4 className="text-lg font-bold text-primary-800 mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-primary-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <div className="mt-8 text-center">
                <div className="bg-white rounded-2xl p-6 shadow-soft border border-sage-100">
                  <div className="text-3xl mb-3">🌿</div>
                  <p className="text-primary-700 font-medium italic">
                    &ldquo;The right information is healing information&rdquo;
                  </p>
                  <p className="text-sm text-sage-600 mt-2">
                    - Anthony William
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
