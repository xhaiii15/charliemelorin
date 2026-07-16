"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const primaryLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  const moreLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#certificates", label: "Certificates" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  const allLinks = [...primaryLinks, ...moreLinks];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-foreground/10 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Chai</div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm hover:text-foreground/70 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-sm hover:text-foreground/70 transition-colors"
                aria-expanded={isDropdownOpen}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-44 rounded-lg border border-foreground/10 bg-background shadow-lg py-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
                  {moreLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-foreground/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav — full list, no dropdown needed since it's already stacked */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-foreground/10 pt-2">
            {allLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm hover:text-foreground/70 hover:bg-foreground/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
