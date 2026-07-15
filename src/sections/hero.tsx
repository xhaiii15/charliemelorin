"use client";

import { ArrowRight } from "lucide-react";

import heroImage from "../assets/images/hero.jpg";

interface HeroProps {
  imageUrl?: string;
}

export default function Hero({ imageUrl = heroImage }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-16 sm:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image on left - Square */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto md:mx-0">
            <img
              src={imageUrl}
              alt="Developer"
              className="absolute inset-0 w-full h-full object-contain rounded"
            />
          </div>

          {/* Text on right */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m a Developer
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
                Full-stack developer passionate about building beautiful,
                functional, and performant web applications.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90 transition-colors"
              >
                View My Work <ArrowRight className="inline ml-2" size={18} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-foreground/20 rounded font-semibold hover:border-foreground transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
