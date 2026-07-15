export default function Skills() {
  const skills = {
    "Frontend Web": ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    "Backend & Databases": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Supabase",
      "Postman",
      "REST APIs",
    ],
    "Mobile Development": ["React Native", "Expo", "Android Testing"],
    "Design & UI Prototyping": ["Figma", "Figma Make", "v0 (Vercel)"],
    "AI & Experimental": [
      "Python",
      "Computer Vision",
      "AI-Assisted Development",
      "IoT Basics",
    ],
  };

  return (
    <section id="skills" className="py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-4xl font-bold">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-lg font-bold text-foreground/90">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 border border-foreground/20 rounded text-sm text-foreground/80 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
