"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


type Project = {
  title: string;
  category: string;
  image:string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="
            fixed
            inset-0
            bg-black/80
            backdrop-blur-md
            z-40
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            layoutId={project.title}
            className="
            fixed
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[90vw]
            max-w-6xl
            max-h-[85vh]
            overflow-y-auto
            bg-zinc-900
            rounded-[40px]
            border
            border-white/10
            z-50
            p-10
            "
          >
            <button
              onClick={onClose}
              className="
              px-4
              py-2
              bg-red-600
              rounded-lg
              mb-8
              "
            >
              Close
            </button>

            <div className="relative h-[350px] mb-8 rounded-2x1 overflow-hidden">
                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                />
            </div>

            <p className="text-red-500 mb-3">
              {project.category}
            </p>

            <h1 className="text-6xl font-bold mb-8">
              {project.title}
            </h1>

            

            <div className="space-y-10">

              <div>
                <h2 className="text-2xl font-bold mb-3">
                  Overview
                </h2>

                <p className="text-gray-400">
                  {project.overview}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">
                  Problem
                </h2>

                <p className="text-gray-400">
                  {project.problem}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">
                  Solution
                </h2>

                <p className="text-gray-400">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Features
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                      bg-zinc-800
                      rounded-xl
                      p-4
                      "
                    >
                      - {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Tech Stack
                </h2>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-red-600/20
                      border
                      border-red-500
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}