"use client";

import RadialBurst from "./RadialBurst";
import StripeBurst from "./StripeBurst";

export default function Hero() {
  return (
    <section
      className="
      relative
      pt-40
      pb-24
      overflow-hidden
      "
    >
      <StripeBurst />
      <RadialBurst />

      {/* Huge Background Text */}

      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        text-[18vw]
        font-black
        text-white/[0.03]
        pointer-events-none
        select-none
        whitespace-nowrap
        "
      >
        SHAKTI
        <br />
        SIDHU
      </div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-8
        "
      >
        <p
          className="
          uppercase
          tracking-[10px]
          text-violet-300
          text-sm
          mb-8
          "
        >
          ENGINEER • BUILDER • SPEAKER
        </p>

        <h1
          className="
          text-7xl
          md:text-[10rem]
          font-black
          leading-[0.85]
          tracking-tight
          "
        >
          SHAKTI
          <br />
          SIDHU
        </h1>

        <p
          className="
          mt-10
          max-w-3xl
          text-xl
          text-white/70
          leading-relaxed
          "
        >
          Computer Science student at JIIT building
          AI systems, data products and digital
          experiences. Passionate about solving
          real-world problems through technology,
          leadership and innovation.
        </p>

        <div
          className="
          flex
          gap-4
          mt-12
          flex-wrap
          "
        >
          <a
            href="#projects"
            className="
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-pink-500
            text-white
            font-semibold
            hover:scale-105
            transition
            "
          >
            Explore Work
          </a>

          <a
            href="#contact"
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            hover:bg-white/5
            transition
            "
          >
            Contact Me
          </a>
        </div>

        <div
          className="
          flex
          gap-8
          mt-12
          text-white/50
          "
        >
          <a
            href="https://linkedin.com/in/shakti-sidhu"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}