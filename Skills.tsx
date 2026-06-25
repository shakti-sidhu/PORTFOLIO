export default function Skills() {
  const skills = [
    "C",
    "C++",
    "Python",
    "AI/ML",
    "Public Speaking",
    "Content Writing",
    "Leadership",
    "Research",
    "Team Management",
    "Data Analytics",
  ];

  return (
    <section className="min-h-screen bg-black text-white py-32">

      <div className="max-w-6xl mx-auto px-8">

        <p className="text-red-500 uppercase tracking-widest mb-4">
          Skills
        </p>

        <h2 className="text-6x1 md:text-7x1 font-black mb-16 text-white"> My Toolkit</h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-full bg-white/[0.04] backdrop-blur-x1 border border-white/10 hover:border-violet-400/50 hover:scale-105 transition-all duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}