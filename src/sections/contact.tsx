"use client";

import { Mail, GitBranch, Briefcase, Share2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const socialLinks = [
    { icon: GitBranch, href: "#", label: "GitHub" },
    { icon: Briefcase, href: "#", label: "LinkedIn" },
    { icon: Share2, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  const year = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-t border-foreground/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base text-foreground/70">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-transparent border border-foreground/20 rounded placeholder:text-foreground/40 focus:outline-none focus:border-foreground"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-transparent border border-foreground/20 rounded placeholder:text-foreground/40 focus:outline-none focus:border-foreground"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-transparent border border-foreground/20 rounded placeholder:text-foreground/40 focus:outline-none focus:border-foreground resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-foreground text-background rounded font-semibold hover:bg-foreground/90 transition-colors"
            >
              Send
            </button>
            {submitted && (
              <p className="text-green-500 text-xs sm:text-sm">
                Message sent successfully!
              </p>
            )}
          </form>

          <div className="flex gap-2 sm:gap-3 pt-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                title={label}
                className="border border-foreground/20 p-2.5 sm:p-3 rounded hover:border-foreground transition-colors flex items-center justify-center"
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-6 sm:pt-8 text-center text-foreground/60 text-xs sm:text-sm">
          <p>© {year}. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}
