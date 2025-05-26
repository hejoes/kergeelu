"use client";

import {
  Heart,
  Leaf,
  Sparkles,
  ArrowRight,
  Clock,
  Droplets,
} from "lucide-react";

const HealingProgramsSection = () => {
  const programs = [
    {
      icon: Heart,
      title: "Liver Rescue",
      subtitle: "28-Day Gentle Cleanse",
      description:
        "Support your liver's natural detoxification with healing foods and gentle protocols. Perfect for beginners ready to start their healing journey.",
      foods: [
        "🥬 Leafy Greens",
        "🍎 Apples",
        "🥒 Celery",
        "🫐 Wild Blueberries",
      ],
      duration: "28 days",
      focus: "Liver Support",
      color: "from-red-400 to-pink-400",
      bgGradient: "from-red-50 to-pink-50",
      foodImage: "liver-foods",
    },
    {
      icon: Sparkles,
      title: "Heavy Metal Detox",
      subtitle: "Strategic Cleansing Protocol",
      description:
        "Remove toxic heavy metals using Anthony William's proven smoothie protocols and targeted healing foods for mental clarity and vitality.",
      foods: [
        "🫐 Wild Blueberries",
        "🌿 Cilantro",
        "🥬 Barley Grass",
        "🍊 Oranges",
      ],
      duration: "12 weeks",
      focus: "Metal Removal",
      color: "from-lime-400 to-green-400",
      bgGradient: "from-lime-50 to-green-50",
      foodImage: "detox-foods",
    },
    {
      icon: Leaf,
      title: "Complete Renewal",
      subtitle: "90-Day Transformation",
      description:
        "Comprehensive healing journey combining liver cleansing, detox, and superfood nutrition for total body renewal and lasting vitality.",
      foods: ["🥭 Mangoes", "🥥 Coconut Water", "🌱 Sprouts", "🍇 Grapes"],
      duration: "90 days",
      focus: "Full Healing",
      color: "from-gold-400 to-yellow-400",
      bgGradient: "from-gold-50 to-yellow-50",
      foodImage: "renewal-foods",
      featured: true,
    },
  ];

  const healingFoods = [
    { name: "Wild Blueberries", benefit: "Brain healing", emoji: "🫐" },
    { name: "Celery Juice", benefit: "Liver cleansing", emoji: "🥬" },
    { name: "Lemon Water", benefit: "Hydration", emoji: "🍋" },
    { name: "Cilantro", benefit: "Heavy metal removal", emoji: "🌿" },
    { name: "Apples", benefit: "Fiber & nutrients", emoji: "🍎" },
    { name: "Coconut Water", benefit: "Electrolytes", emoji: "🥥" },
  ];

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-br from-cream-50 to-sage-50 relative overflow-hidden"
    >
      {/* Organic background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gold-200/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6 font-serif">
            Healing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-sage-500">
              Programs
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-sage-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Choose your path to wellness with programs designed around Medical
            Medium protocols and the healing power of living foods.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 ${
                program.featured ? "ring-2 ring-gold-400 scale-105" : ""
              }`}
            >
              {/* Featured badge */}
              {program.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-gold-400 to-yellow-400 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Comprehensive
                  </div>
                </div>
              )}

              {/* Food imagery placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${program.bgGradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <program.icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-primary-600 font-medium">
                      {program.foodImage === "liver-foods" &&
                        "Liver-loving foods"}
                      {program.foodImage === "detox-foods" &&
                        "Detox powerhouses"}
                      {program.foodImage === "renewal-foods" &&
                        "Renewal superfoods"}
                    </p>
                  </div>
                </div>

                {/* Floating food emojis */}
                <div className="absolute top-4 left-4 text-2xl animate-pulse">
                  🍎
                </div>
                <div className="absolute top-6 right-6 text-xl animate-pulse delay-500">
                  🥬
                </div>
                <div className="absolute bottom-4 left-6 text-lg animate-pulse delay-1000">
                  🫐
                </div>
                <div className="absolute bottom-6 right-4 text-xl animate-pulse delay-700">
                  🌿
                </div>
              </div>

              {/* Program content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sage-600 font-medium">
                    {program.subtitle}
                  </p>
                </div>

                <p className="text-primary-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Program details */}
                <div className="flex items-center justify-between text-sm text-sage-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{program.focus}</span>
                  </div>
                </div>

                {/* Key foods */}
                <div className="mb-8">
                  <h4 className="font-semibold text-primary-700 mb-3">
                    Key Healing Foods:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.foods.map((food, foodIndex) => (
                      <div
                        key={foodIndex}
                        className="text-sm text-primary-600 bg-sage-50 rounded-lg px-3 py-2"
                      >
                        {food}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full bg-gradient-to-r ${program.color} text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Healing Foods Showcase */}
        <div className="bg-white rounded-3xl p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-800 mb-4">
              Healing Foods We Focus On
            </h3>
            <p className="text-primary-600 max-w-2xl mx-auto">
              These powerful foods form the foundation of all our programs, each
              chosen for their specific healing properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healingFoods.map((food, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-sage-50 to-lime-50 rounded-2xl p-6 text-center hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{food.emoji}</div>
                <h4 className="text-lg font-bold text-primary-800 mb-2">
                  {food.name}
                </h4>
                <p className="text-sm text-sage-600">{food.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sage-100 to-lime-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-primary-600 mb-6">
              Let&apos;s discuss which program aligns best with your health
              goals and current needs.
            </p>
            <button className="bg-gradient-to-r from-primary-500 to-sage-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-warm transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto">
              <Droplets className="w-5 h-5" />
              <span>Schedule a Discovery Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingProgramsSection;
