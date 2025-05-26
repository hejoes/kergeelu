"use client";

import { useState } from "react";
import {
  Heart,
  Leaf,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
  Star,
  Mail,
  Gift,
} from "lucide-react";

const ProgramSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual backend integration later.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");
  };

  const programFeatures = [
    {
      icon: Heart,
      title: "28-Day Liver Rescue Protocol",
      description:
        "My gentle yet powerful liver cleansing method that I&apos;ve perfected through years of research and personal experience",
    },
    {
      icon: Sparkles,
      title: "Heavy Metal Detox Smoothies",
      description:
        "My signature smoothie recipes designed to safely and effectively remove toxins while nourishing your body",
    },
    {
      icon: Leaf,
      title: "Healing Foods Guide",
      description:
        "My personal guide to the most powerful healing foods I&apos;ve discovered, with exactly how to use them for maximum benefit",
    },
  ];

  const bonuses = [
    "🎁 Exclusive Healing Foods Shopping List",
    "📱 Mobile-Friendly Recipe Cards",
    "💬 Private Community Access",
    "📧 Weekly Email Support",
  ];

  return (
    <section
      id="program"
      className="py-20 bg-gradient-to-br from-cream-50 to-sage-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gold-200/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-800 mb-6 font-serif">
            The Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-sage-500">
              Liver Rescue
            </span>{" "}
            Program
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-sage-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Transform your health in 28 days with my comprehensive liver
            cleansing program. I&apos;ll guide you through gentle, proven
            methods using powerful healing foods that have changed my life and
            countless others.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Program Details */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-sage-400 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-800">
                    28-Day Transformation
                  </h3>
                  <p className="text-sage-600">
                    Complete Liver Rescue Protocol
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                {programFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-lime-100 to-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-primary-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Program Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-sage-50 rounded-xl">
                  <Clock className="w-6 h-6 text-sage-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800">28</div>
                  <div className="text-sm text-sage-600">Days</div>
                </div>
                <div className="text-center p-4 bg-lime-50 rounded-xl">
                  <Users className="w-6 h-6 text-lime-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800">
                    500+
                  </div>
                  <div className="text-sm text-sage-600">Success Stories</div>
                </div>
                <div className="text-center p-4 bg-gold-50 rounded-xl">
                  <Star className="w-6 h-6 text-gold-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-800">4.9</div>
                  <div className="text-sm text-sage-600">Rating</div>
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-8">
                <h4 className="font-semibold text-primary-800 mb-4">
                  What&apos;s Included:
                </h4>
                <div className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                      <span className="text-primary-600">{bonus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Email Subscription Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-soft border-2 border-gold-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  Join My Healing Community
                </h3>
                <p className="text-primary-600">
                  I&apos;d love to have you join my waitlist! You&apos;ll be the
                  first to know when my program opens, plus I&apos;ll share
                  exclusive healing tips and special bonuses just for you.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sage-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-lime-500 to-sage-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-lime-600 hover:to-sage-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Join Waitlist</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-sage-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-lime-500" />
                  </div>
                  <h4 className="text-xl font-bold text-primary-800 mb-2">
                    Welcome to My Community! 💚
                  </h4>
                  <p className="text-primary-600">
                    I&apos;m so excited to have you here! You&apos;ll be the
                    first to know when my program opens, and I can&apos;t wait
                    to support you on your healing journey.
                  </p>
                </div>
              )}

              {/* Special Offer */}
              <div className="mt-6 p-4 bg-gradient-to-r from-gold-50 to-yellow-50 rounded-xl border border-gold-200">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gold-700 mb-1">
                    🎉 Special Gift for You
                  </p>
                  <p className="text-xs text-gold-600">
                    As my way of saying thank you, waitlist members get 30% off
                    when I launch!
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

export default ProgramSection;
