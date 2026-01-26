/* eslint-disable react/no-unescaped-entities */
"use client"
import { Button } from '@/components/ui/button'
import { useGitHubStats } from '../_hooks/useGitHubStats'
import { CountingNumber } from './CountingNumber'

const Hero = () => {
  const { totalCommits, repos, loading, error } = useGitHubStats();

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col gap-10 justify-center items-center md:flex-row md:items-center md:gap-20 md:h-screen">

      <div className='flex flex-col pt-20 gap-8 items-center md:pt-0 md:items-start md:w-[40%]'>
        <div className='py-4 px-6 bg-gray-400/10 w-fit rounded-md text-lg'>
          <p className='text-primary/80 font-semibold'>Vincent Chaussepied</p>
        </div>
        <div className="text-foreground">
          <h1 className='md:text-[92px] text-[64px] text-center md:text-left font-bold leading-none'>FRONT-END DEVELOPER</h1>
        </div>
        <div className="w-fit text-center md:text-left">
          <p className=' text-foreground text-xl'>Clean <span className='text-pink-500'>&lt;code&gt;</span>, responsive design, and accessible interfaces with modern web technologies for smooth user experiences.</p>
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <Button className="text-xl py-6 px-7 border border-primary" variant={'default'} >
            View Projects
          </Button>
          <Button className="text-xl py-6 px-7" variant={"outline"}  >
            View My CV
          </Button>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-md text-white md:w-[30%]">
        <div className='flex gap-2 justify-between items-center font-semibold mb-4'>
          <h2 className="font-poppins">{loading ? <CountingNumber end={28} duration={2000} />  : repos.length} Projects</h2>
          <h2>{loading ? <CountingNumber end={50} duration={4000} /> : totalCommits} commits</h2>
        </div>
        <pre className="bg-slate-900 p-6 rounded font-mono">
          <code className='text-sm'>
            <div className="text-gray-500">&lt;header&gt;</div>
            <div className="text-gray-500">  &lt;div id="<span className="text-primary">coder</span>"&gt;</div>
            <span className="text-gray-500">    &lt;h1&gt;</span><span className="text-purple-300">Technology Stack</span><span className="text-gray-500">&lt;/h1&gt;</span>
            <div className="text-gray-500">    &lt;ul&gt;</div>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">HTML</span><span className="text-gray-500">&lt;/li&gt;</span> <br/>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">Tailwind / CSS / SCSS</span><span className="text-gray-500">&lt;/li&gt;</span> <br/>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">JavaScript / TypeScript</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">React.js / Next.js</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">Node.js</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">Vite / Webpack</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
              <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">Git / CI / CD</span><span className="text-gray-500">&lt;/li&gt;</span>
            <div className="text-gray-500">    &lt;/ul&gt;</div>
            <div className="text-gray-500">  &lt;/div&gt;</div>
            <div className="text-gray-500">&lt;/header&gt;</div>
          </code>
        </pre>
      </div>

    </div>
  )
}

export default Hero
