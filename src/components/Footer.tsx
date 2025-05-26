"use client";

import {
  Leaf,
  Heart,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Program", href: "#program" },
    { name: "Contact", href: "#contact" },
  ];

  const programInfo = [
    { name: "Liver Rescue Program", href: "#program" },
    { name: "Join Waitlist", href: "#program" },
    { name: "Early Access", href: "#program" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-sage-400 rounded-full flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-serif">
                    Pure Wellness
                  </span>
                  <span className="text-sm text-sage-200 -mt-1">
                    Holistic Nutrition Guide
                  </span>
                </div>
              </div>

              <p className="text-sage-200 leading-relaxed mb-6">
                I&apos;m here to guide you on your healing journey with gentle,
                natural methods that honor your body&apos;s wisdom. Together,
                we&apos;ll unlock your vitality using the power of whole foods
                and mindful nutrition.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lime-400 transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sage-200 hover:text-lime-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Program</h3>
              <ul className="space-y-3">
                {programInfo.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sage-200 hover:text-lime-400 transition-colors duration-200 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-lime-400" />
                  <span className="text-sage-200">henrijoesalu@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-lime-400" />
                  <span className="text-sage-200">+372 55555555</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-lime-400 mt-1" />
                  <span className="text-sage-200">
                    Estonia
                    <br />
                  </span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Stay Connected</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-sage-300 focus:outline-none focus:border-lime-400"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-lime-400 to-sage-400 rounded-r-full font-semibold hover:shadow-lg transition-all duration-300">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sage-200">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with love for your healing journey</span>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-sage-300">
                <span>&copy; 2024 Pure Wellness. All rights reserved.</span>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-lime-400 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-lime-400 transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
