"use client";

import { ArrowRight } from "lucide-react";

const StickyMobileButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden bg-white/95 backdrop-blur-sm border-t border-sage-200 shadow-lg">
      <div className="px-4 py-3 safe-area-inset-bottom">
        <a
          href="#program"
          className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-lime-400 to-sage-400 text-white px-6 py-4 rounded-full font-semibold text-lg hover:shadow-warm transition-all duration-300 transform active:scale-95"
        >
          <span>Join My Program</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default StickyMobileButton;
