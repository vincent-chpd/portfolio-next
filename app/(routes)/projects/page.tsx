import ProjectCard from '@/app/_components/ProjectCard'
import PropertyListing from '../../../public/property-listing-web.png'

const projectPage = () => {


  return (
    <div className=" py-20 px-4 md:px-20 md:py-20 flex flex-col gap-10">
      <p className="text-gray-400 font-semibold">Home <span className="text-primary/50">_projects</span></p>
      <h1 className="font-bold text-5xl">My Projects</h1>
      <p>A selection of projects I’ve built to sharpen my skills and solve real-world front-end problems.</p>

      <div className='grid grid-cols-1 md:grid-cols-2  gap-6'>
        <ProjectCard
          title="Listing Property"
          image={PropertyListing}
          url="https://property-listing-zeta-azure.vercel.app/"
          techStacks={['React', 'TypeScript', 'Tailwind CSS', 'Google Maps API', 'Supabase', 'Clerk']}
          description="Full stack property listing web app featuring authentication, Google Maps integration and full CRUD functionality for managing property listings."
        />
        <ProjectCard
          title="Listing Property"
          image={PropertyListing}
          url="https://property-listing-zeta-azure.vercel.app/"
          techStacks={['React', 'TypeScript', 'CSS', 'API integration']}
          description="Full stack property listing web app featuring authentication and full CRUD functionality for managing property listings."
        />
      </div>

    </div>
  )
}

export default projectPage
