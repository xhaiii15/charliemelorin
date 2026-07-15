import { ExternalLink, GitBranch, Trophy } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title:
        "Government Property Insurance & Vehicle Registration Management System (GSO)",
      badge: "Top 1 Capstone Project",
      description:
        "This is our capstone project built for the General Services Office (GSO) of Occidental Mindoro. It helps them easily manage vehicle registrations and track government property insurance. This project won Top 1 out of our entire 3rd-year IT class!",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Usap (Mobile & Web)",
      description:
        "A real-time messaging application with both mobile and web platforms. I originally started the mobile app using Flutter, but migrated it to React Native and Expo for better performance on Android. I also built the web counterpart using React so users can chat seamlessly from both their phones and desktop browsers, all powered by a shared Supabase real-time backend.",
      tags: [
        "React Native",
        "React",
        "Expo",
        "Supabase",
        "Node.js",
        "Android Testing",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Urfits",
      description:
        "A mobile application where users can share and post their daily outfits. It also features an affiliate linking system, allowing users to attach links to their clothes and earn a commission while showcasing their personal style.",
      tags: [
        "React Native",
        "Expo",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Android Testing",
      ],
      link: "#",
      github: "#",
    },
    {
      title: "Rotation Auto Points Counter",
      badge: "Ongoing / Experimental",
      description:
        "An AI-powered scoring system I am currently developing for the billiard game 'Rotation'. It uses an Android phone's camera as a sensor and Python with Computer Vision to automatically detect the color and values of the pool balls on the table to keep score in real-time.",
      tags: ["Python", "Computer Vision", "AI", "OpenCV", "Android"],
      link: "#",
      github: "#",
    },
    {
      title: "UrSafe",
      description:
        "This was my very first deployed full-stack web project. It is a secure, cloud-based note-taking website where users can sign up, save, and manage their personal notes online.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Rach Billiards Website",
      description:
        "A website created for a billiard hall to showcase their place and establish an online presence. For this project, I conceptualized the layout and prompted v0 to generate the entire UI/UX, which I then structured using React.",
      tags: ["React", "Tailwind CSS", "Figma", "v0 (Vercel)"],
      link: "#",
      github: "#",
    },
    {
      title: "Save the Ocean",
      description:
        "This is my first-ever programming project! I built this interactive 2D game using Python back in my 1st year of college to promote SDG 14: Life Below Water.",
      tags: ["Python", "Pygame", "Game Development"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`border rounded-lg p-6 hover:border-foreground/30 transition-colors ${
                project.badge
                  ? "border-primary/40 bg-primary/5 shadow-sm"
                  : "border-foreground/10"
              }`}
            >
              {project.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                  <Trophy size={12} className="text-primary" />
                  {project.badge}
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-foreground/5 border border-foreground/10 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  Visit <ExternalLink size={14} />
                </a>
                <a
                  href={project.github}
                  className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1 text-sm font-medium"
                >
                  GitHub <GitBranch size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
