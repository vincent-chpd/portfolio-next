import Image, { StaticImageData } from "next/image";
import { ExternalLink, Github, Info } from "lucide-react";
import Link from "next/link";
import { ProjectDetails } from "./ProjectModal";

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  githubUrl?: string;
  techStacks: string[];
  details?: ProjectDetails;
  onDetailsClick?: () => void;
};

const ProjectCard = ({
  title,
  description,
  image,
  url,
  githubUrl,
  techStacks,
  details,
  onDetailsClick,
}: ProjectCardProps) => {
  return (
    <>
      <div className="bg-gray-800 rounded-2xl overflow-hidden flex flex-col hover:ring-1 hover:ring-primary transition-all group">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden"
        >
          <Image
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            src={image}
            width={800}
            height={400}
            alt={`${title} preview`}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm font-semibold flex items-center gap-2">
              View project <ExternalLink size={14} />
            </span>
          </div>
        </Link>

        <div className="flex flex-col gap-4 p-6 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-semibold text-lg text-primary">{title}</h3>

          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700">
            {techStacks.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-start gap-4 mt-4">
            {details && onDetailsClick && (
              <button
                onClick={onDetailsClick}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary cursor-pointer transition-colors mt-1 w-fit"
              >
                <Info size={15} /> View details
              </button>
            )}
            {githubUrl && (
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-primary transition-colors mt-1 w-fit"
                    aria-label="GitHub repository"
                  >
                    <Github size={18} /> View source code
                  </Link>
                )}
          </div>
        </div>
      </div>

    </>
  );
};

export default ProjectCard;
