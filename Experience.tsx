export default function Experience() {
  const experiences = [
    "GSSoC Contributor",
    "Tata Data Analytics Simulation",
    "Deloitte Data Analytics Simulation",
    "British Airways Data Science Simulation",
    "Goldman Sachs Operations Simulation",
    "Skyscanner Front-End Simulation",
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-32"
    >
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-red-500 uppercase tracking-widest mb-4">
          Experience
        </p>

        <h2 className="text-6x1 md:text-7x1 font-black mb-16 text-white">Journey So Faaaaaaaaaarrrrr</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-red-600 pl-8"
            >
              <p className="text-gray-500 mb-2">
                2025-2026
              </p>

              <h3 className="text-2xl font-semibold">
                {exp}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}