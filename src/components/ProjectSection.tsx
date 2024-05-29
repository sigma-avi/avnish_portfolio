import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub,} from "react-icons/bs"

const projects = [
  {
    name: "dehome",
    description:
      " The dehome booking app caters to world travellers and is the perfect place to book hotels, Resorts, hourly rooms,  etc. be ready to enhance your holiday experience.",
    image: "/dehome.png",
    github: "https://github.com/sigma-avi/dehome",
    
  },
  {
    name: "Podcast",
    description: "A podcast consists of a series of episodes. Each episode is a separate recording within the larger podcast. It’s similar to how a TV show has multiple episodes in a season",
    image: "/podcast.png",
    github: "https://github.com/sigma-avi/podcast",
    
  },
  {
    name: "Blood_Bank",
    description:"We at Blood_Bank live by the motto of saving lives by ensuring every drop of blood contributes towards the right cause of saving lives.",
    image: "/blood bank.png",
    github: "https://github.com/sigma-avi/Blood_Bank",
    
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
