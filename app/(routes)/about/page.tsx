import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="mx-10 py-20 md:px-60 flex flex-col gap-10 mb-6">
      <div>
        <p className="text-gray-400 font-semibold">Home <span className="text-primary/50">_about</span></p>
        <h1 className="font-bold text-5xl mt-10">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-10">Who I am</h2>
          <div className="flex flex-col items-center gap-4">
            <Image src={"/avatar.jpeg"} alt="Profile Picture" width={200} height={200} className="rounded-full my-10"/>
            <p>My name is Vincent and I am a front-end developer with 2+ years of experience. i build responsive, accessible, and performance-focused web applications mainly using React, TypeScript, and modern CSS. I enjoy taking ownership of features from design to production, from designing reusable UI components to integrating APIs and refactoring legacy code. I thrive in fast-paced startup environments, collaborating with designers, back-end developers, and cross-functional teams to deliver high-quality, user-focused digital products. My focus is on creating interfaces that look great, perform reliably, and provide a smooth user experience, while continuously learning and improving my skills.</p><br/>
            <p>When I’m not coding, you’ll usually find me running, cycling, or going on long walks with my corgi, Luffy, who keeps me on my toes and makes sure I never sit still for too long.</p>
          </div>
        </div>

        <div >
          <h2 className="text-2xl font-semibold mb-10">Work Experience</h2>
          <div className="border-l border-primary h-full">

            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 flex-wrap relative">
                  <div className=" absolute top-5.75 w-2 h-2 rounded-full bg-primary -ml-1.25 z-50" />
                  <div className="bg-gray-800 rounded-lg max-w-150 p-4 grid grid-cols-1 items-start justify-center gap-4 mx-4">
                    <p className="text-sm">Jan 2025 - Present</p>
                    <div className="flex flex-col gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-lg -mt-1 text-primary">&lt; Frontend Developer &gt;</p>
                        <p className="text-sm "><i><a className="text-purple-300" href="#">OMEA ID</a> | London, UK</i></p>
                      </div>
                      <small>Worked on building and delivering multiple client-facing websites using React and TypeScript. Designed and developed reusable UI components, integrated external REST APIs, and collaborated closely with back-end teams. Contributed to cross-team technology integration following a company merger, helping deliver scalable front-end solutions.</small>
                    </div>
                  </div>
                </div>



                <div className="flex items-start gap-4 flex-wrap relative">
                  <div className=" absolute top-5.75 w-2 h-2 rounded-full bg-primary -ml-1.25 z-50" />
                  <div className="bg-gray-800 rounded-lg max-w-150 p-4 grid grid-cols-1 items-start justify-center gap-4 mx-4">
                    <p className="text-sm">June 2024 - Jan 2025</p>
                    <div className="flex flex-col gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-lg -mt-1 text-primary">&lt; Junior Web Developer &gt;</p>
                        <p className="text-sm"><i><a href='https://urbanthings.co' className="text-purple-300">URBANTHINGS</a> | London, UK</i></p>
                      </div>
                      <small>Worked on the development and maintenance of responsive web portals and passenger-facing websites using React and TypeScript. Took ownership of refactoring legacy JavaScript into TypeScript to improve code quality and long-term maintainability, while collaborating with designers and senior developers to deliver features in a fast-paced startup environment. Built experience working with production codebases, version control, and Agile workflows.</small>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 flex-wrap relative">
                  <div className=" absolute top-5.75 w-2 h-2 rounded-full bg-primary -ml-1.25 z-50" />
                  <div className="bg-gray-800 rounded-lg max-w-150 p-4 grid grid-cols-1 items-start justify-center gap-4 mx-4">
                    <p className="text-sm">Oct 2023 - May 2024</p>
                    <div className="flex flex-col gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-lg -mt-1 text-primary">&lt; Web Development Student &gt;</p>
                        <p className="text-sm"><i><a className="text-purple-300" href='https://www.lewagon.com/london'>LE WAGON</a>, London, UK</i></p>
                      </div>
                      <small>Completed an intensive full-stack web development program focused on modern web technologies including JavaScript, React, and Ruby. Worked on collaborative projects following Agile practices, building responsive web applications, integrating APIs, and deploying projects to production. Gained hands-on experience in front-end and back-end development, version control, and professional workflows.</small>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutPage
