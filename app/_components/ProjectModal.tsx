"use client";
import { useEffect } from "react";
import { X, ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";
import type { ProjectDetails } from "@/app/_data/projects";

export type { ProjectDetails };

type ProjectModalProps = {
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  techStacks: string[];
  details: ProjectDetails;
  onClose: () => void;
};

const ProjectModal = ({
  title,
  description,
  url,
  githubUrl,
  techStacks,
  details,
  onClose,
}: ProjectModalProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    // iOS Safari compatible scroll lock
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="modal-scroll modal-enter bg-gray-900 rounded-2xl w-full max-w-2xl flex flex-col gap-6 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-1 pr-6">
          <h2 className="font-bold text-2xl text-primary">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        <div className="flex flex-col gap-5">
          <section className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              The Problem
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {details.problem}
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              The Solution
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {details.solution}
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Key Features
            </h3>
            <ul className="flex flex-col gap-1.5">
              {details.features.map((f) => (
                <li key={f} className="text-gray-300 text-sm flex gap-2">
                  <span className="text-primary mt-0.5">▸</span> {f}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Technical Details
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {details.techDetails}
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStacks.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="flex gap-3 pt-2 border-t border-gray-700">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-black font-semibold text-sm px-4 py-2 rounded-xl hover:bg-primary/80 transition-colors"
          >
            <ExternalLink size={14} /> Live site
          </Link>
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-600 text-gray-300 font-semibold text-sm px-4 py-2 rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              <GithubIcon size={14} /> View code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
