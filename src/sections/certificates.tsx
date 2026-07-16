"use client";

import { useState } from "react";
import { ChevronDown, User, Users } from "lucide-react";

import cryphexIndv from "../assets/certificates/Cryphex_indv.jpg";
import cryphexGroup from "../assets/certificates/Cryphex_group.jpg";

export default function Certificates() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const certificates = [
    {
      title: "Class Top 1 - Best Capstone Project (Individual Award)",
      issuer: "PHINMA Saint Jude College - IT Department",
      date: "2026",
      type: "individual",
      description:
        "An individual certificate of recognition awarded for outstanding performance, technical execution, and system defense of our GSO Capstone Project, which ranked 1st place among all 3rd-year IT student projects.",
      image: cryphexIndv, // Palitan ng tamang path ng scanned copy o photo mo
    },
    {
      title: "Class Top 1 - Best Capstone Project (Group Award)",
      issuer: "PHINMA Saint Jude College - IT Department",
      date: "2026",
      type: "group",
      description:
        "A group certificate of recognition awarded to our development team for collaborating and successfully delivering the Government Property Insurance & Vehicle Registration Management System for Occidental Mindoro.",
      image: cryphexGroup, // Palitan din ng tamang path ng photo
    },
  ];

  return (
    <section id="certificates" className="py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-bold">Certificates</h2>
        </div>

        <div className="space-y-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="border border-foreground/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === idx ? null : idx)}
                className="w-full text-left p-5 hover:bg-foreground/5 transition-colors flex items-start justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {cert.type === "individual" ? (
                        <>
                          <User size={12} /> Individual
                        </>
                      ) : (
                        <>
                          <Users size={12} /> Group
                        </>
                      )}
                    </span>
                    <span className="text-xs text-foreground/50">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground/90 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/60 mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed max-w-2xl">
                    {cert.description}
                  </p>
                </div>

                <ChevronDown
                  size={20}
                  className={`ml-4 shrink-0 text-foreground/50 transition-transform duration-200 ${
                    expandedId === idx ? "rotate-180 text-foreground" : ""
                  }`}
                />
              </button>

              {expandedId === idx && (
                <div className="border-t border-foreground/10 p-6 bg-foreground/5 flex justify-center items-center">
                  <div className="relative w-full max-w-2xl aspect-4/3 rounded-lg overflow-hidden border border-foreground/10 shadow-lg bg-background/50">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
