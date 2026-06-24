"use client";

import { motion } from "framer-motion";

export default function FloatingLights() {
  return (
    <>
      {/* Purple Orb */}

      <motion.div
        animate={{
          x: [0, 150, 50, 0],
          y: [0, -120, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        top-[15%]
        left-[10%]
        w-[500px]
        h-[500px]
        rounded-full
        bg-violet-500/20
        blur-[140px]
        pointer-events-none
        -z-20
        "
      />

      {/* Blue Orb */}

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 120, -60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        top-[20%]
        right-[10%]
        w-[450px]
        h-[450px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        pointer-events-none
        -z-20
        "
      />

      {/* Pink Orb */}

      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        bottom-[10%]
        left-[35%]
        w-[600px]
        h-[600px]
        rounded-full
        bg-pink-500/15
        blur-[160px]
        pointer-events-none
        -z-20
        "
      />
    </>
  );
}