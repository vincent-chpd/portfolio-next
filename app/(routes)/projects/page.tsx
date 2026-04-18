"use client";
import { useState } from "react";
import ProjectCard from "@/app/_components/ProjectCard";
import ProjectModal from "@/app/_components/ProjectModal";
import { projects } from "@/app/_data/projects";
import type { Project } from "@/app/_data/projects";

const CATEGORIES = ["All", "Full-stack", "Frontend"] as const;
type Category = (typeof CATEGORIES)[number];

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 flex flex-col gap-10 mb-6">
      <div className="animate-fade-up delay-100">
        <p className="text-gray-400 font-semibold">
          Home <span className="text-primary/50">_projects</span>
        </p>
        <h1 className="font-bold text-4xl md:text-5xl mt-10">My Projects</h1>
        <p className="text-gray-400 mt-2 text-sm font-semibold uppercase tracking-wider">
          Software Engineer &mdash; Frontend focus
        </p>
        <p className="text-gray-400 mt-4 max-w-2xl">
          A selection of projects I have built to sharpen my skills and solve
          real-world problems.
        </p>
      </div>

      <div className="animate-fade-up delay-200 flex flex-col gap-6">
        <div className="flex gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-black font-semibold border-primary"
                  : "border-gray-700 text-gray-400 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={`${project.title}-${i}`}
              {...project}
              onDetailsClick={
                project.details ? () => setActiveProject(project) : undefined
              }
            />
          ))}
        </div>
      </div>

      {activeProject?.details && (
        <ProjectModal
          title={activeProject.title}
          description={activeProject.description}
          url={activeProject.url}
          githubUrl={activeProject.githubUrl}
          techStacks={activeProject.techStacks}
          details={activeProject.details}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
