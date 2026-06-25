"use client";
import Image from "next/image";
import { useState } from "react";
import {motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

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

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-black text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-8">

          <p className="text-red-500 uppercase tracking-widest mb-4">
            Projects
          </p>

          <h2
  className="
  text-6xl
  md:text-7xl
  font-black
  mb-16
  text-white
  "
>
  Featured Work
</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {portfolioData.projects.map((project) => (
              <motion.div
             
                layoutId={project.title}
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="
group
cursor-pointer
h-[300px]
rounded-3xl
overflow-hidden
relative
bg-white/[0.03]
backdrop-blur-xl
border
border-white/10
hover:border-violet-400/50
hover:-translate-y-3
hover:scale-[1.02]
transition-all
duration-500
p-8
flex
flex-col
justify-end
"
              >
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration 700 group-hover:scale-110" />
                 <div className =" absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent " />
                 <div className="relative z-10">
                <p className="text-red-500 mb-3">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold mb-3 group-hover:text-red-500 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.shortDescription}
                </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}