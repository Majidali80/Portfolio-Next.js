"use client";
import React from 'react';


export default function About (){
    return (
<section id='about' className='container-pd-32'>
    
<h1 className='text-center font-extrabold lg:text-6xl text-transparent mt-16 bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>ABOUT ME</h1>
<div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-12">
  {/* Video Section (Left side) */}
  <div className="flex justify-center items-center mt-2"> {/* Adjusted margin-top */}
    <video width={500} height={600} className="h-[200px] sm:h-[400px]" autoPlay loop muted>
      <source src="/about.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Text Section (Right side) */}
  <div className="md:w-2/3 "> {/* This makes the text container take up half of the screen width on medium devices and larger */}
  <p className="text-base lg:text-justified tracking-widest mt-10">
      I am currently a second-quarter student in the Certified Cloud Applied Generative AI Engineer (GenEng) program. 
      As a full-stack web developer, I am passionate about creating interactive and responsive web applications. 
      My skill set includes: Languages & Technologies: TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Next.js, Node.js.
      I thrive on learning new technologies and expanding my skill set. 
    </p>
    <h5 className='text-center font-extrabold lg:text-2xl text-transparent mt-4 bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>Education</h5>

<p className="text-center text-lg mt-4">
  Graduated with a Bachelor of Science from the University of Sindh.
</p>
<h5 className='text-center font-extrabold lg:text-2xl text-transparent mt-4 bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>Certification</h5>

<p className="text-center text-lg mt-4">
Currently enrolled in the Certified Cloud Applied Generative AI Engineer (GenEng) program, expected completion in 2025.
</p>
  </div>
</div></section>   
    )

}