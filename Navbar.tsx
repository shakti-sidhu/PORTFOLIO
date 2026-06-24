"use client";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50
      "
    >
      <nav
        className="
        backdrop-blur-2xl
        bg-white/[0.04]
        border
        border-white/10
        rounded-full
        px-6
        py-4
        flex
        items-center
        gap-8
        shadow-[0_10px_50px_rgba(0,0,0,0.25)]
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
            w-10
            h-10
            rounded-xl
            bg-gradient-to-br
            from-violet-500
            to-pink-500
            flex
            items-center
            justify-center
            font-bold
            text-white
            "
          >
            S
          </div>

          <span
            className="
            font-semibold
            text-white
            "
          >
            Shakti Sidhu
          </span>

        </div>

        <a
          href="#about"
          className="text-white/70 hover:text-white transition"
        >
          About
        </a>

        <a
          href="#projects"
          className="text-white/70 hover:text-white transition"
        >
          Projects
        </a>

        <a
          href="#experience"
          className="text-white/70 hover:text-white transition"
        >
          Experience
        </a>

        <a
          href="#contact"
          className="text-white/70 hover:text-white transition"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}