"use client";

import { useEffect, useState } from "react";

export default function RadialBurst() {
  const [gradient, setGradient] = useState(
    "from-pink-400 via-purple-500 to-violet-600"
  );

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGradient("from-orange-300 via-pink-400 to-purple-500");
    } else if (hour >= 12 && hour < 17) {
      setGradient("from-yellow-300 via-blue-300 to-cyan-500");
    } else if (hour >= 17 && hour < 21) {
      setGradient("from-orange-400 via-pink-500 to-purple-600");
    } else {
      setGradient("from-indigo-500 via-violet-500 to-purple-700");
    }
  }, []);

  return (
    <div
      className="
      absolute
      left-1/2
      top-[55%]
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
      z-0
      "
    >
      <div
        className={`
        w-[1200px]
        h-[1200px]
        rounded-full
        bg-gradient-to-r
        ${gradient}
        opacity-20
        blur-[180px]
        `}
      />
    </div>
  );
}