/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { useGitHubStats } from "../_hooks/useGitHubStats";
import { CountingNumber } from "./CountingNumber";
import Link from "next/link";

const Hero = () => {
  const { totalCommits, repos, loading, error } = useGitHubStats();

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col gap-8 justify-center items-center md:flex-row md:items-center md:gap-12 lg:gap-20 min-h-[calc(100vh-4rem)] md:min-h-screen px-4 md:px-6 lg:px-10 py-6 md:py-0">
      <div className="flex flex-col gap-6 sm:gap-8 items-center md:items-start md:w-[45%] lg:w-[40%] w-full md:pt-0">
        <div className="animate-fade-up delay-100 py-4 px-6 bg-gray-400/10 w-fit rounded-md text-lg">
          <p className="text-primary/80 font-semibold">Vincent Chaussepied</p>
        </div>
        <div className="animate-fade-up delay-200 text-foreground w-full">
          <h1 className="text-[36px] sm:text-[52px] md:text-[72px] lg:text-[92px] text-center md:text-left font-bold leading-none">
            FRONT-END DEVELOPER
          </h1>
        </div>
        <div className="animate-fade-up delay-300 w-full text-center md:text-left">
          <p className="text-foreground text-base sm:text-xl">
            Clean <span className="text-pink-500">&lt;code&gt;</span>,
            responsive design, and accessible interfaces with modern web
            technologies for smooth user experiences.
          </p>
        </div>
        <div className="animate-fade-up delay-400 flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
          <Link href="/projects" className="w-full sm:w-auto">
            <Button
              className="text-lg sm:text-xl py-6 px-7 border border-primary w-full"
              variant={"default"}
            >
              View Projects
            </Button>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1ELBSOIobeP6mTrUlhJIIvRiuEHv_zDCliAqngdN0gss/edit?usp=sharing"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button
              className="text-lg sm:text-xl py-6 px-7 w-full"
              variant={"outline"}
            >
              View My CV
            </Button>
          </Link>
        </div>
      </div>

      <div className="animate-fade-up delay-500 bg-gray-800 p-4 rounded-md text-white w-full md:w-[40%] lg:w-[30%] mb-6 md:mb-0">
        <div className="flex gap-2 justify-between items-center font-semibold mb-4">
          <h2 className="font-poppins">
            {loading ? (
              <CountingNumber end={28} duration={2000} />
            ) : (
              repos.length
            )}{" "}
            Projects
          </h2>
          <h2>
            {loading ? (
              <CountingNumber end={50} duration={4000} />
            ) : (
              totalCommits
            )}{" "}
            commits
          </h2>
        </div>
        <pre className="bg-slate-900 p-4 md:p-6 rounded font-mono overflow-x-auto">
          <code className="text-sm">
            <div className="text-gray-500">&lt;header&gt;</div>
            <div className="text-gray-500">
              {" "}
              &lt;div id="<span className="text-primary">coder</span>"&gt;
            </div>
            <span className="text-gray-500"> &lt;h1&gt;</span>
            <span className="text-purple-300">Technology Stack</span>
            <span className="text-gray-500">&lt;/h1&gt;</span>
            <div className="text-gray-500"> &lt;ul&gt;</div>
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">HTML</span>
            <span className="text-gray-500">&lt;/li&gt;</span> <br />
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">Tailwind / CSS / SCSS</span>
            <span className="text-gray-500">&lt;/li&gt;</span> <br />
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">JavaScript / TypeScript</span>
            <span className="text-gray-500">&lt;/li&gt;</span>
            <br />
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">React.js / Next.js</span>
            <span className="text-gray-500">&lt;/li&gt;</span>
            <br />
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">Node.js</span>
            <span className="text-gray-500">&lt;/li&gt;</span>
            <br />
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">Vite / Webpack</span>
            <span className="text-gray-500">&lt;/li&gt;</span>
            <br />
            <span className="text-gray-500"> &lt;li&gt;</span>
            <span className="text-pink-500">Git / CI / CD</span>
            <span className="text-gray-500">&lt;/li&gt;</span>
            <div className="text-gray-500"> &lt;/ul&gt;</div>
            <div className="text-gray-500"> &lt;/div&gt;</div>
            <div className="text-gray-500">&lt;/header&gt;</div>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Hero;
