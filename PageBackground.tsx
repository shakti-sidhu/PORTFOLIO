"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageBackground() {
  const [theme, setTheme] = useState<
  "morning" | "day" | "sunset" | "night"
>("night");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setTheme("morning");
    } else if (hour >= 12 && hour < 18) {
      setTheme("day");
    } else if (hour >= 18 && hour < 21) {
      setTheme("sunset");
    } else {
      setTheme("night");
    }
  }, []);

  const gradients = {
    morning:
      "from-sky-300/20 via-cyan-200/10 to-yellow-200/20",

    day:
      "from-blue-300/20 via-indigo-300/10 to-yellow-100/20",

    sunset:
      "from-orange-500/20 via-pink-500/20 to-violet-500/20",

    night:
      "from-violet-600/20 via-fuchsia-500/10 to-red-500/20",
  };

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">

      <div
        className={`
          absolute
          inset-0
          bg-gradient-to-br
          ${gradients[theme]}
        `}
      />

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[900px]
        h-[900px]
        rounded-full
        bg-violet-500/20
        blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-300px]
        right-[-200px]
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-pink-500/20
        blur-[200px]
        "
      />

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[800px]
        h-[800px]
        rounded-full
        bg-white/5
        blur-[200px]
        "
      />
    </div>
  );
}