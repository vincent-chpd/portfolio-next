import Image from "next/image";
import React from "react";
import OmeaIdLogo from "../../../public/omea-id_logo.jpeg";
import UrbanThingsLogo from "../../../public/urbanthings_logo.jpeg";
import LeWagonLogo from "../../../public/le_wagon_logo.jpeg";
import MeLuffy from "../../../public/me_luffy.png";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "SCSS",
  "REST APIs",
  "Git",
  "Figma",
  "Node.js",
  "WordPress",
  "Vite",
];

const AboutPage = () => {
  return (
    <div className="px-4 py-16 md:px-10 lg:px-20 flex flex-col gap-12 mb-6">
      {/* Breadcrumb */}
      <div className="animate-fade-up delay-100">
        <p className="text-gray-400 font-semibold">
          Home <span className="text-primary/50">_about</span>
        </p>
      </div>

      {/* 2-column layout */}
      <div className="animate-fade-up delay-200 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left — Who I am */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-semibold">Who I am</h2>

          <div className="flex flex-col gap-5">
            <div className="w-full aspect-4/3 rounded-2xl overflow-hidden ring-2 ring-primary">
              <Image
                src={MeLuffy}
                alt="Vincent Chaussepied"
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-md">
              I&apos;m Vincent, a front-end developer with{" "}
              {new Date().getFullYear() - 2024}+ years of experience who made
              the jump into tech after several years working in corporate
              events. That world taught me how to stay organised, handle
              chaos, and keep things running smoothly even when everything is
              happening at once — which turns out to be surprisingly useful
              when working with code.
            </p>
            <p className="text-gray-300 leading-relaxed text-md">
              Now I spend my time building responsive, accessible, and
              performance-focused web applications using React, TypeScript, and
              modern CSS. I enjoy taking ideas from design to production,
              whether that means building reusable UI components, connecting
              APIs, or cleaning up legacy code so it behaves itself.
            </p>
            <p className="text-gray-300 leading-relaxed text-md">
              I work best in fast-paced environments where I can collaborate
              with designers, back-end developers, and the wider team to deliver
              something that actually works well and feels good to use.
            </p>
            <p className="text-gray-400 leading-relaxed text-md">
              Outside of work I run, cycle, and go on long walks with my corgi,
              Luffy, who believes every outing should be slightly longer than
              necessary and every moment should involve at least one unexpected
              detour.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1"
                >
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
                  <Image
                    src={OmeaIdLogo}
                    width={36}
                    height={36}
                    alt="Omea ID Logo"
                    className="rounded-lg shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-primary">
                      &lt; Frontend Developer &gt;
                    </p>
                    <p className="text-sm text-gray-400">
                      <a
                        href="https://www.linkedin.com/company/urbanthings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:underline"
                      >
                        OMEA ID
                      </a>{" "}
                      · London, UK
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full shrink-0">
                  Jan 2025 – Present
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Worked on building and delivering multiple client-facing
                websites using React and TypeScript. Designed and developed
                reusable UI components, integrated external REST APIs, and
                collaborated closely with back-end teams. Contributed to
                cross-team technology integration following a company merger,
                helping deliver scalable front-end solutions.
              </p>
            </div>

            {/* UrbanThings */}
            <div className="relative pl-8 pb-10">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary z-10" />
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={UrbanThingsLogo}
                    width={36}
                    height={36}
                    alt="UrbanThings Logo"
                    className="rounded-lg shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-primary">
                      &lt; Junior Web Developer &gt;
                    </p>
                    <p className="text-sm text-gray-400">
                      <a
                        href="https://www.linkedin.com/products/urbanthings-urbanhub/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:underline"
                      >
                        URBANTHINGS
                      </a>{" "}
                      · London, UK
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full shrink-0">
                  Jun 2024 – Jan 2025
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Worked on the development and maintenance of responsive web
                portals and passenger-facing websites using React and
                TypeScript. Took ownership of refactoring legacy JavaScript into
                TypeScript to improve code quality and long-term
                maintainability, while collaborating with designers and senior
                developers to deliver features in a fast-paced startup
                environment.
              </p>
            </div>

            {/* Le Wagon */}
            <div className="relative pl-8">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary/50 z-10" />
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={LeWagonLogo}
                    width={36}
                    height={36}
                    alt="Le Wagon Logo"
                    className="rounded-lg shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-primary">
                      &lt; Web Development Student &gt;
                    </p>
                    <p className="text-sm text-gray-400">
                      <a
                        href="https://www.linkedin.com/company/le-wagon-london/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:underline"
                      >
                        LE WAGON
                      </a>{" "}
                      · London, UK
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full shrink-0">
                  Oct 2023 – May 2024
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Completed an intensive full-stack web development bootcamp
                focused on JavaScript, React, and Ruby. Worked on collaborative
                projects following Agile practices, building responsive web
                applications, integrating APIs, and deploying projects to
                production.
              </p>
            </div>
          </div>
        </div>
        {/* end right column */}
      </div>
      {/* end grid */}
    </div>
  );
};

export default AboutPage;
