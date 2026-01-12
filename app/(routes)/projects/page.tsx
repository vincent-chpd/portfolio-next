import React from 'react'
import Placeholder from '../../../public/placeholder-project.jpg'
import Image from 'next/image'

const projectPage = () => {
  return (
    <div className="p-20 flex flex-col gap-8">
      <p className="text-gray-400 font-semibold">Home <span className="text-primary/50">_projects</span></p>
      <h1 className="font-bold text-4xl">My Projects</h1>
      <p>A selection of projects I’ve built to sharpen my skills and solve real-world front-end problems.</p>
      <div className='grid grid-cols-2 gap-10'>
        <div className="bg-gray-800 rounded-lg">
          <div className="flex gap-4 justify-between p-6">
            <div>
              <h2>Project Title</h2>
              <p>Project description</p>
            </div>
            <Image className="rounded-lg w-[200px]" src={Placeholder} width={400} height={200} alt='Placeholder Image' />
          </div>
        </div>
        <div className="border border-gray-500">project 1</div>
        <div className="border border-gray-500">project 1</div>
        <div className="border border-gray-500">project 1</div>
      </div>
    </div>
  )
}

export default projectPage
