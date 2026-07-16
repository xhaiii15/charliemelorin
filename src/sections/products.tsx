"use client";

import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  name: string;
  description: string;
  price?: string;
  image: string;
  affiliateLink: string;
  category: string;
}

export default function Products() {
  const PRODUCTS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const products: Product[] = [
    {
      name: "Wireless Headphones",
      description: "High-quality sound with noise cancellation",
      price: "$99.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Electronics",
    },
    {
      name: "Desk Lamp",
      description: "LED lamp with adjustable brightness and color temperature",
      price: "$49.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Office",
    },
    {
      name: "Mechanical Keyboard",
      description: "Premium typing experience with customizable switches",
      price: "$149.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Electronics",
    },
    {
      name: "Ergonomic Mouse",
      description: "Comfortable design for long coding sessions",
      price: "$59.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Office",
    },
    {
      name: "USB-C Hub",
      description: "Multi-port connectivity for modern devices",
      price: "$79.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Electronics",
    },
    {
      name: "Monitor Stand",
      description: "Adjustable stand with storage drawer",
      price: "$89.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Office",
    },
    {
      name: "Wireless Mouse",
      description: "Silent clicking with precision tracking",
      price: "$39.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Electronics",
    },
    {
      name: "Phone Tripod",
      description: "Adjustable mount for streaming and content",
      price: "$29.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Accessories",
    },
    {
      name: "Cable Organizer",
      description: "Keep your desk cables neat and organized",
      price: "$19.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Office",
    },
    {
      name: "Portable SSD",
      description: "1TB fast external storage for developers",
      price: "$129.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Electronics",
    },
    {
      name: "USB-A Adapter",
      description: "High-speed USB 3.0 hub adapter",
      price: "$24.99",
      image: "/hero-image.png",
      affiliateLink: "#",
      category: "Electronics",
    },
  ];

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = currentPage * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section
      id="products"
      className="py-16 sm:py-24 border-t border-foreground/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">Products</h2>
          <p className="text-sm sm:text-base text-foreground/60">
            Shop items I recommend
          </p>
        </div>

        {/* Pagination Grid with Navigation */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              aria-label="Previous products"
              className="shrink-0"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Products Grid */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {currentProducts.map((product, idx) => (
                  <Card
                    key={`${currentPage}-${idx}`}
                    className="overflow-hidden hover:border-foreground/30 hover:shadow-lg hover:scale-105 transition-all duration-200 animate-in fade-in py-0"
                  >
                    <div className="relative h-28 sm:h-42 bg-foreground/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>

                    <CardContent className="p-3 space-y-1">
                      <h3 className="text-base sm:text-lg font-bold line-clamp-2 leading-tight">
                        {product.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs w-fit">
                        {product.category}
                      </Badge>
                      {product.price && (
                        <p className="text-sm font-semibold text-foreground/80">
                          {product.price}
                        </p>
                      )}
                    </CardContent>

                    <CardFooter className="p-3 sm:p-4 pt-0">
                      <Button
                        render={
                          <a
                            href={product.affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        size="sm"
                        className="w-full"
                      >
                        Shop Now <ExternalLink size={14} />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next products"
              className="shrink-0"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Page Indicator */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentPage
                    ? "bg-foreground w-4 sm:w-6"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Text Page Indicator */}
          <div className="text-center text-xs sm:text-sm text-foreground/60">
            Page {currentPage + 1} of {totalPages}
          </div>
        </div>

        <div className="text-center text-xs text-foreground/50 pt-4 border-t border-foreground/10">
          <p>
            Affiliate Disclosure: Some links above are affiliate links. I may
            earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>
    </section>
  );
}
