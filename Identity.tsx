export default function Identity() {
  const cards = [
    {
      number: "01",
      title: "Builder",
      desc: "Creating AI, analytics and software solutions."
    },
    {
      number: "02",
      title: "Speaker",
      desc: "Public speaking, debates and storytelling."
    },
    {
      number: "03",
      title: "Analyst",
      desc: "Data-driven thinking and business insights."
    },
    {
      number: "04",
      title: "Leader",
      desc: "Community building and stakeholder management."
    }
  ];

  return (
    <section className="bg-black text-white py-32">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-6xl font-bold mb-20">
          More Than A Developer
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {cards.map((card) => (
            <div
              key={card.number}
              className="border border-white/10 rounded-3xl p-10 hover:border-red-500 transition duration-500"
            >

              <p className="text-red-500 text-4xl mb-6">
                {card.number}
              </p>

              <h3 className="text-3xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-400">
                {card.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}