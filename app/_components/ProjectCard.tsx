import Image, { StaticImageData } from "next/image";
import { ExternalLink, GithubIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  githubUrl?: string;
  techStacks: string[];
  onDetailsClick?: () => void;
};

const ProjectCard = ({
  title,
  description,
  image,
  url,
  githubUrl,
  techStacks,
  onDetailsClick,
}: ProjectCardProps) => {
  return (
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
        <h3 className="font-semibold text-lg text-primary">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

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

        <div className="flex items-center gap-3 mt-2">
          {onDetailsClick && (
            <button
              onClick={onDetailsClick}
              className="flex items-center gap-1.5 text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
            >
              Case study <ArrowRight size={14} />
            </button>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
              aria-label="GitHub repository"
            >
              <GithubIcon size={16} /> Source code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
