import React from 'react'
import Placeholder from '../../../public/placeholder-project.jpg'
import Image from 'next/image'
import { ExternalLink, GithubIcon } from 'lucide-react'
import Link from 'next/link'

const projectPage = () => {
  return (
    <div className="mx-40 md:px-10  md:py-20 lg:px-30 flex flex-col gap-10">
      <p className="text-gray-400 font-semibold">Home <span className="text-primary/50">_projects</span></p>
      <h1 className="font-bold text-5xl">My Projects</h1>
      <p>A selection of projects I’ve built to sharpen my skills and solve real-world front-end problems.</p>
      <div className='grid grid-cols-2 gap-10'>

        <div className="bg-gray-800 rounded-lg">
          <div className="grid grid-cols-[1.5fr_1fr] gap-4 justify-between p-6 h-full">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h3>Property Listing</h3>
                <p>Full Stack Real Estate App with Next.js, React.js, TailwindCss, and Supabase</p>
              </div>
              <div className="flex gap-2 items-center text-gray-300 flex-wrap">
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Next</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">React</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Typescript</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Tailwind CSS</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Supabase</div>
              </div>
            </div>
            <div>
              <Image className="rounded-lg w-[440px] h-[200px] object-cover" src={Placeholder} width={400} height={100} alt='Placeholder Image' />
              <div className="flex gap-6 justify-center mt-2">
                <Link href="/" className="flex gap-1 hover:text-primary">
                  <GithubIcon className="h-4 w-4 "/><span className="text-xs ">Github</span>
                </Link>
                <Link href="/" className="flex gap-1 items-center hover:text-primary">
                  <ExternalLink className="h-4 w-4"/><span className="text-xs ">Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg">
          <div className="grid grid-cols-[1.5fr_1fr] gap-4 justify-between p-6 h-full">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h3>Pokemon Card Finder</h3>
                <p>Website to search for Pokemon Card using the Pokemon TCG API</p>
              </div>
              <div className="flex gap-2 items-center text-gray-300">
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">React</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Typescript</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">CSS</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">API integration</div>
              </div>
            </div>
            <div>
              <Image className="rounded-lg w-[440px] h-[200px] object-cover" src={Placeholder} width={400} height={100} alt='Placeholder Image' />
              <div className="flex gap-6 justify-center mt-2">
                <Link href="/" className="flex gap-1 hover:text-primary">
                  <GithubIcon className="h-4 w-4 "/><span className="text-xs ">Github</span>
                </Link>
                <Link href="/" className="flex gap-1 items-center hover:text-primary">
                  <ExternalLink className="h-4 w-4"/><span className="text-xs ">Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg">
          <div className="grid grid-cols-[1.5fr_1fr] gap-4 justify-between p-6 h-full">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h3>Project Title</h3>
                <p>Description of the project</p>
              </div>
              <div className="flex gap-2 items-center text-gray-300">
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">React</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Typescript</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">CSS</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">API integration</div>
              </div>
            </div>
            <div>
              <Image className="rounded-lg w-[440px] h-[200px] object-cover" src={Placeholder} width={400} height={100} alt='Placeholder Image' />
              <div className="flex gap-6 justify-center mt-2">
                <Link href="/" className="flex gap-1 hover:text-primary">
                  <GithubIcon className="h-4 w-4 "/><span className="text-xs ">Github</span>
                </Link>
                <Link href="/" className="flex gap-1 items-center hover:text-primary">
                  <ExternalLink className="h-4 w-4"/><span className="text-xs ">Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg">
          <div className="grid grid-cols-[1.5fr_1fr] gap-4 justify-between p-6 h-full">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <h3>Project Title</h3>
                <p>Description of the project</p>
              </div>
              <div className="flex gap-2 items-center text-gray-300">
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">React</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">Typescript</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">CSS</div>
                <div className="border border-primary rounded-2xl text-xs px-2 py-1">API integration</div>
              </div>
            </div>
            <div>
              <Image className="rounded-lg w-[440px] h-[200px] object-cover" src={Placeholder} width={400} height={100} alt='Placeholder Image' />
              <div className="flex gap-6 justify-center mt-2">
                <Link href="/" className="flex gap-1 hover:text-primary">
                  <GithubIcon className="h-4 w-4 "/><span className="text-xs ">Github</span>
                </Link>
                <Link href="/" className="flex gap-1 items-center hover:text-primary">
                  <ExternalLink className="h-4 w-4"/><span className="text-xs ">Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projectPage
