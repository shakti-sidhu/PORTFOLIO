export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-5xl mx-auto px-8">

        <p className="text-red-500 uppercase tracking-widest mb-4">
          Contact
        </p>

        <h2 className="text-7xl font-bold mb-8">
          Let's Build
          <br />
          Something Amazing.
        </h2>

        <p className="text-gray-400 text-xl mb-10">
          Open to internships, collaborations,
          hackathons and innovative opportunities.
        </p>

        <div className="space-y-4">

          <p>
            Email:
            {" "}
            sidshakti02@gmail.com
          </p>

          <p>
            LinkedIn:
            linkedin.com/in/shakti-sidhu
          </p>

          <p>
            GitHub:
            github.com/shakti-sidhu
          </p>

        </div>

      </div>
    </section>
  );
}