/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className='flex gap-20 justify-start px-40 items-center'>
      <div className="flex flex-col gap-10 justify-center">
        <div className='p-3 bg-gray-400/10 w-fit rounded-md'>
          <p className='text-gray-400'>Vincent Chaussepied</p>
        </div>
        <div>
          <h1 className='text-6xl font-semibold'>FRONTEND</h1>
          <h1 className='text-6xl font-semibold'>DEVELOPER</h1>
        </div>
        <div>
          <p>Clean <span className='text-pink-500'>&lt;code&gt;</span>, responsive design, and accessible interfaces with modern web technologies.</p>
          <p className='text-gray-400'>// So that your website works fast and at full capacity.</p>
        </div>
        <div className='flex gap-4'>
          <Button variant={'default'} >
            View Projects
          </Button>
          <Button variant={"outline"}  >
            View My CV
          </Button>
        </div>
      </div>
      <div className='bg-gray-400/20 p-4 rounded-md'>
      <div className='flex gap-2 justify-between mb-4 font-semibold'>
        <h2>10 Projects</h2>
        <h2>1,500 commits</h2>
      </div>
      <pre className="bg-slate-900 p-10 rounded font-mono text-sm">
        <code>
          <div className="text-gray-500">&lt;header&gt;</div>
          <div className="text-gray-500">  &lt;div id="<span className="text-primary">coder</span>"&gt;</div>
          <span className="text-gray-500">    &lt;h1&gt;</span><span className="text-purple-300">Technology Stack</span><span className="text-gray-500">&lt;/h1&gt;</span>
          <div className="text-gray-500">    &lt;ul&gt;</div>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">HTML</span><span className="text-gray-500">&lt;/li&gt;</span> <br/>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">CSS</span><span className="text-gray-500">&lt;/li&gt;</span> <br/>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">Tailwind CSS</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">JavaScript</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">TypeScript</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">React.js</span><span className="text-gray-500">&lt;/li&gt;</span><br/>
            <span className="text-gray-500">      &lt;li&gt;</span><span className="text-pink-500">Next.js</span><span className="text-gray-500">&lt;/li&gt;</span>
          <div className="text-gray-500">    &lt;/ul&gt;</div>
          <div className="text-gray-500">  &lt;/div&gt;</div>
          <div className="text-gray-500">&lt;/header&gt;</div>
        </code>
      </pre>
        {/* <Image src={HeroImage} width={300} height={400} alt='hero image' className='object-cover'/> */}
      </div>
    </div>
  )
}

export default Hero
