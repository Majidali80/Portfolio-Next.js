import React from 'react'
import Heading from './Heading'
import Card from './card'

const data =[

  {
    id: 0,
    title: "Mini-hackathon",
    Dec: "Mini Hackthon A Car Crowd Web site",
    img: "/car.jpg",
    tags: ["Next.Js", "Tailwind", "Javascript"],
    githubLink: "https://github.com/",  // Replace with your GitHub URL
    vercelLink: "https://6thclasshome-work.vercel.app/" , // Replace with your Vercel URL
},
  {
    id: 1,
    title: "Static Resume",
    Dec: "A HTML, CSS & Typescript based Static Resume",
    img: "/sir.jpg",
    tags: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/",  // Replace with your GitHub URL
    vercelLink: "https://static-interactive-resume-sooty.vercel.app/" , // Replace with your Vercel URL
},
    {
        id: 2,
        title: "Portfolio",
        Dec: "A HTML CSS & Typescript based Portfolio",
        img:"/port.jpg",
        tags:["HTML","CSS","Javascript"],
        githubLink: "https://github.com/",  // Replace with your GitHub URL
    vercelLink: "https://portfolio-two-woad-74.vercel.app/" ,
    },
    {
      id: 3   ,
      title: "E-Commerce WebSite",
      Dec: "HTML CSS & Typescript based E-commerce Website",
      img:"/1.jpg",
      tags:["HTML","CSS","Javascript"],
      githubLink: "https://github.com/",  // Replace with your GitHub URL
  vercelLink: "https://iptvhdstream.vercel.app/" ,
  },
  {
    id: 4   ,
    title: "Fictional Product Landing Page",
    Dec: "HTML CSS & Typescript based Landing page",
    img:"/mob.jpg",
    tags:["HTML","CSS","Javascript"],
    githubLink: "https://github.com/",  // Replace with your GitHub URL
vercelLink: "https://fictional-product-landing-page.vercel.app/" ,
},
{
  id: 5   ,
  title: "Photo Slider WebPage",
  Dec: "HTML CSS & Typescript based Photo Slider",
  img:"/hdp.jpg",
  tags:["HTML","CSS","Javascript"],
  githubLink: "https://github.com/",  // Replace with your GitHub URL
vercelLink: "https://animalhdpictures.vercel.app/" ,
},
    {
        id: 6   ,
        title: "Calculator",
        Dec: "HTML CSS & Typescript based Calculator App",
        img:"/cal.jpg",
        tags:["HTML","CSS","Javascript"],
        githubLink: "https://github.com/",  // Replace with your GitHub URL
    vercelLink: "https://calculator-five-rust-83.vercel.app/" ,
    },
    {
      id: 7,
      title: "To Do List",
      Dec: "A HTML, CSS & Typescript based To Do List",
      img: "/do.jpg",
      tags: ["HTML", "CSS", "Javascript"],
      githubLink: "https://github.com/",  // Replace with your GitHub URL
      vercelLink: "https://todo-list-five-brown-69.vercel.app/" , // Replace with your Vercel URL
  },

]

function Projects () {
  return (
    <section id='projects' className='container-pd-32'>
      <h1 className='text-center font-extrabold lg:text-6xl mt-28 mb-24 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>PROJECTS</h1>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.Dec}
        img={el.img}
        tags={el.tags}
        githubLink={el.githubLink}  // Pass the GitHub link dynamically
        vercelLink={el.vercelLink}  // Pass the Vercel link dynamically

        />))}
      </div>
      
    </section>
  )
}

export default Projects


