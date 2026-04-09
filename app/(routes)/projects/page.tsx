import ProjectCard from "@/app/_components/ProjectCard";
import PropertyListing from "../../../public/property-listing-web.png";

const projects = [
  {
    title: "Property Listing App",
    image: PropertyListing,
    url: "https://property-listing-zeta-azure.vercel.app/",
    githubUrl: "https://github.com/vincent-chpd/property-listing",
    techStacks: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "Supabase",
      "Clerk",
    ],
    description:
      "Full-stack property listing web app featuring authentication, Google Maps integration, and full CRUD functionality for managing property listings.",
  },
];

const ProjectsPage = () => {
  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 flex flex-col gap-10 mb-6">
      <div>
        <p className="text-gray-400 font-semibold">
          Home <span className="text-primary/50">_projects</span>
        </p>
        <h1 className="font-bold text-4xl md:text-5xl mt-10">My Projects</h1>
        <p className="text-gray-400 mt-4 max-w-2xl">
          A selection of projects I've built to sharpen my skills and solve
          real-world front-end problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
