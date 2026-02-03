import Image, { StaticImageData } from 'next/image'
import { ExternalLink, GithubIcon } from 'lucide-react'
import Link from 'next/link'

type ProjectCardProps = {
    title: string;
    description: string;
    image: StaticImageData;
    url: string;
    techStacks: string[];
}


const ProjectCard = ({title, description, image, url, techStacks}: ProjectCardProps) => {
    return (
      <div className="bg-gray-800 rounded-lg">
        <div className="flex flex-col gap-4 justify-between p-6 h-full">

          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex flex-col justif-start gap-6 md:w-[70%]">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>

            <div>
            <Link href={url} className="flex gap-1 items-center hover:text-primary" target="_blank" rel="noopener noreferrer">
              <Image
                className="rounded-lg h-50 object-fill"
                src={image}
                width={400}
                height={ 100}
                alt='Placeholder Image'
              />
            </Link>
            <div className="flex gap-6 justify-end mt-2">
              <Link href="/" className="flex gap-1 hover:text-primary">
                <GithubIcon className="h-4 w-4 "/><span className="text-xs ">Github</span>
              </Link>
              <Link href={url} className="flex gap-1 items-center hover:text-primary" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4"/><span className="text-xs ">Live</span>
              </Link>
            </div>
            </div>

          </div>

            <div className="flex flex-col gap-2 items-start text-gray-300 flex-wrap">
              <div>
                <small className="font-normal text-pink-500">Tech stack:</small>
              </div>
              <div className="flex gap-2 flex-wrap">
              {techStacks.map((tech, index) => (
                  <div key={index} className="border border-primary rounded-2xl text-xs px-2 py-1">{tech}</div>
                ))
              }
              </div>
            </div>



        </div>
      </div>
    )
  };

  export default ProjectCard;
