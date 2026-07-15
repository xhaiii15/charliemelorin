export default function About() {
  return (
    <section id="about" className="py-24 border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-4xl font-bold">About Me</h2>
        <div className="space-y-6 text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed">
          <p>
            I&apos;m <strong>Charlie Melorin</strong>, an Information Technology
            student at <strong>PHINMA Saint Jude College</strong> in Manila,
            actively building my path as a full-stack developer. My workflow
            starts with an idea, which I sketch out in
            <strong> Figma</strong> before using tools like <strong>v0</strong>{" "}
            to rapidly bring the UI/UX to life.
          </p>
          <p>
            When it comes to building, my main web stack is the{" "}
            <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). On
            the mobile side, I build cross-platform applications using{" "}
            <strong>React Native and Expo</strong>, testing directly on Android
            devices to ensure everything runs smoothly in the real world.
          </p>
          <p>
            Right now, I&apos;m also experimenting with{" "}
            <strong>AI-assisted development</strong> to bridge software with the
            physical world. I am actively using AI tools to build and test
            projects involving <strong>Python, computer vision, and IoT</strong>
            , exploring how they can be combined to solve practical, everyday
            problems.
          </p>
          <p>
            When I&apos;m not coding or designing, you can usually find me
            keeping up with tech communities, watching tech videos to
            continuously learn, or enjoying a game of pool/billiards.
          </p>
        </div>
      </div>
    </section>
  );
}
