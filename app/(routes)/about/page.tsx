import Image from 'next/image'
import React from 'react'
import OmeaIdLogo from '../../../public/omea-id_logo.jpeg'
import UrbanThingsLogo from '../../../public/urbanthings_logo.jpeg'
import LeWagonLogo from '../../../public/le_wagon_logo.jpeg'
import Avatar from '../../../public/avatar.jpeg'
import { MapPin, Briefcase, GraduationCap } from 'lucide-react'

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "SCSS", "REST APIs", "Git",
  "Figma", "Node.js", "WordPress", "Vite",
]

const AboutPage = () => {
  return (
    <div className="mx-10 py-20 md:px-20 flex flex-col gap-12 mb-6">

      {/* Breadcrumb */}
      <div>
        <p className="text-gray-400 font-semibold">Home <span className="text-primary/50">_about</span></p>
      </div>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left — Who I am */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">Who I am</h2>

          {/* Avatar + name card */}
          <div className="flex items-center gap-6">
            <div className="relative shrink-0">
              <div className="w-56 h-56 rounded-2xl overflow-hidden ring-2 ring-primary">
                <Image
                  src={Avatar}
                  alt="Vincent Chaussepied"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1.5 border border-gray-700 whitespace-nowrap">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <p className="text-xs text-gray-400">Available for work</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-bold text-2xl">Vincent Chaussepied</h1>
                <p className="text-primary text-sm font-semibold mt-1">&lt; Frontend Developer &gt;</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <span className="flex items-center gap-2"><MapPin size={13} className="text-primary shrink-0" /> London, United Kingdom</span>
                <span className="flex items-center gap-2"><Briefcase size={13} className="text-primary shrink-0" /> 2+ years experience</span>
                <span className="flex items-center gap-2"><GraduationCap size={13} className="text-primary shrink-0" /> Le Wagon Bootcamp</span>
              </div>
            </div>
          </div>


<div className="flex flex-col gap-4">
            <p className="text-gray-300 leading-relaxed text-sm">
              My name is Vincent and I am a front-end developer with 2+ years of experience. I build responsive, accessible, and performance-focused web applications mainly using React, TypeScript, and modern CSS. I enjoy taking ownership of features from design to production — from designing reusable UI components to integrating APIs and refactoring legacy code. I thrive in fast-paced startup environments, collaborating with designers, back-end developers, and cross-functional teams to deliver high-quality, user-focused digital products.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              When I&apos;m not coding, you&apos;ll usually find me running, cycling, or going on long walks with my corgi, Luffy, who keeps me on my toes and makes sure I never sit still for too long.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Tech stack</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Work experience */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
          <div className="flex flex-col gap-0 border-l border-primary/40 ml-1">

          {/* OMEA ID */}
          <div className="relative pl-8 pb-10">
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary z-10" />
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div className="flex items-center gap-3">
                <Image src={OmeaIdLogo} width={36} height={36} alt="Omea ID Logo" className="rounded-lg shrink-0" />
                <div>
                  <p className="font-semibold text-primary">&lt; Frontend Developer &gt;</p>
                  <p className="text-sm text-gray-400">
                    <a href="https://www.linkedin.com/company/urbanthings/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">OMEA ID</a>
                    {' '}· London, UK
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full shrink-0">Jan 2025 – Present</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Worked on building and delivering multiple client-facing websites using React and TypeScript. Designed and developed reusable UI components, integrated external REST APIs, and collaborated closely with back-end teams. Contributed to cross-team technology integration following a company merger, helping deliver scalable front-end solutions.
            </p>
          </div>

          {/* UrbanThings */}
          <div className="relative pl-8 pb-10">
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary z-10" />
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div className="flex items-center gap-3">
                <Image src={UrbanThingsLogo} width={36} height={36} alt="UrbanThings Logo" className="rounded-lg shrink-0" />
                <div>
                  <p className="font-semibold text-primary">&lt; Junior Web Developer &gt;</p>
                  <p className="text-sm text-gray-400">
                    <a href="https://www.linkedin.com/products/urbanthings-urbanhub/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">URBANTHINGS</a>
                    {' '}· London, UK
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full shrink-0">Jun 2024 – Jan 2025</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Worked on the development and maintenance of responsive web portals and passenger-facing websites using React and TypeScript. Took ownership of refactoring legacy JavaScript into TypeScript to improve code quality and long-term maintainability, while collaborating with designers and senior developers to deliver features in a fast-paced startup environment.
            </p>
          </div>

          {/* Le Wagon */}
          <div className="relative pl-8">
            <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary/50 z-10" />
            <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
              <div className="flex items-center gap-3">
                <Image src={LeWagonLogo} width={36} height={36} alt="Le Wagon Logo" className="rounded-lg shrink-0" />
                <div>
                  <p className="font-semibold text-primary">&lt; Web Development Student &gt;</p>
                  <p className="text-sm text-gray-400">
                    <a href="https://www.linkedin.com/company/le-wagon-london/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline">LE WAGON</a>
                    {' '}· London, UK
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full shrink-0">Oct 2023 – May 2024</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Completed an intensive full-stack web development bootcamp focused on JavaScript, React, and Ruby. Worked on collaborative projects following Agile practices, building responsive web applications, integrating APIs, and deploying projects to production.
            </p>
          </div>

        </div>
        </div>{/* end right column */}
      </div>{/* end grid */}

    </div>
  )
}

export default AboutPage
