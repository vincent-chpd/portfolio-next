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
          <p>I’m Vincent, a frontend-focused developer with around two years of experience. I understand backend fundamentals and use that knowledge to build reliable frontends. I enjoy starting projects from scratch, setting up solid foundations, and turning ideas into practical, user-focused products.</p>
        </div>

        <div >
          <h2 className="text-2xl font-semibold mb-10">Work Experience</h2>
          <div className="border-l-1 border-primary h-full">

            <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 flex-wrap relative">
                  <div className=" absolute top-5.75 w-2 h-2 rounded-full bg-primary -ml-[5px] z-50" />
                  <div className="bg-gray-800 rounded-lg max-w-[600px] p-4 grid grid-cols-1 items-start justify-center gap-4 mx-4">
                    <p className="text-sm">2024 - Present</p>
                    <div className="flex flex-col gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-lg -mt-1">Frontend Developer</p>
                        <p className="text-sm"><i >OMEA ID, London, UK</i></p>
                      </div>
                      <small>Design and build reusable UI components, delivering features to production using Gitflow workflows. Maintain 5+ live client websites for major UK public transport operators (Edinburgh, Ipswich, States of Guernsey) while developing skills in scalable frontend architecture, CI/CD, and production deployments.</small>
                    </div>
                  </div>
                </div>



                <div className="flex items-start gap-4 flex-wrap relative">
                  <div className=" absolute top-5.75 w-2 h-2 rounded-full bg-primary -ml-[5px] z-50" />
                  <div className="bg-gray-800 rounded-lg max-w-[600px] p-4 grid grid-cols-1 items-start justify-center gap-4 mx-4">
                    <p className="text-sm">2023 - 2024</p>
                    <div className="flex flex-col gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-lg -mt-1">Web Development Student</p>
                        <p className="text-sm"><i >Le Wagon, London, UK</i></p>
                      </div>
                      <small>Design and build reusable UI components, delivering features to production using Gitflow workflows. Maintain 5+ live client websites for major UK public transport operators (Edinburgh, Ipswich, States of Guernsey) while developing skills in scalable frontend architecture, CI/CD, and production deployments.</small>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 flex-wrap relative">
                  <div className=" absolute top-5.75 w-2 h-2 rounded-full bg-primary -ml-[5px] z-50" />
                  <div className="bg-gray-800 rounded-lg max-w-[600px] p-4 grid grid-cols-1 items-start justify-center gap-4 mx-4">
                    <p className="text-sm">2023 - 2024</p>
                    <div className="flex flex-col gap-4 flex-wrap">
                      <div>
                        <p className="font-semibold text-lg -mt-1">Web Development Student</p>
                        <p className="text-sm"><i >Le Wagon, London, UK</i></p>
                      </div>
                      <small>Design and build reusable UI components, delivering features to production using Gitflow workflows. Maintain 5+ live client websites for major UK public transport operators (Edinburgh, Ipswich, States of Guernsey) while developing skills in scalable frontend architecture, CI/CD, and production deployments.</small>
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
