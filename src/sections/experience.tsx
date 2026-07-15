export default function Experience() {
  const experiences = [
    {
      role: "Lead Full-Stack Developer (Capstone Project)",
      company: "PHINMA Saint Jude College",
      period: "2025 - 2026",
      description:
        "Led the design, planning, and full-stack development of our GSO Capstone Project. Handled the backend architecture using Node.js and MongoDB, integrated the React frontend with Tailwind CSS, and ensured the application was fully functional. Our project ranked Top 1 out of the entire 3rd-year class.",
    },
    {
      role: "Independent Developer",
      company: "Rach Billiards (Freelance / Client Project)",
      period: "2026",
      description:
        "Designed and developed a landing page for a local billiard hall business to build their online presence. Conceptualized the structure, drafted layouts in Figma, and utilized v0 to rapidly generate and refine the responsive React-based UI/UX.",
    },
    {
      role: "Front-End Developer (Freelance / Client Project)",
      company: "AnimeToo",
      period: "2025",
      description:
        "Developed a custom anime streaming landing page and platform for a client. At the time, before diving deep into modern frameworks and API integrations, I successfully delivered this project by building a clean, responsive interface purely with HTML5, CSS3, and Vanilla JavaScript, while managing local video assets efficiently to meet client requirements.",
    },
    {
      role: "Self-Directed Project Developer",
      company: "Personal Portfolio & Mobile Projects",
      period: "2024 - Present",
      description:
        "Actively building self-directed applications to expand my tech stack. This includes migrating our 'Usap' messaging system from Flutter to React Native & Expo for better Android performance, and exploring AI-assisted workflows with Python and computer vision for custom IoT tools.",
    },
  ];

  return (
    <section id="experience" className="py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-4xl font-bold">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l border-foreground/20 pl-6 pb-6 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg font-bold text-foreground/90">
                  {exp.role}
                </h3>
                <span className="text-sm text-foreground/50 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary mb-2">
                {exp.company}
              </p>
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
