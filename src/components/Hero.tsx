"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Heading from './Heading'


function Hero () {
  return (
<section>

      <div className='grid grid-cols-1 sm:grid-cols-12 mt-20 items-center justify-center'>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 to-transparent rounded-full h-72 w-72 z-0 blur-lg absolute top-[100px] sm:top-[150px] right-50 transform -translate-1/4"></div>
          <div className="rounded-full w-[240px] h-[240px] relative overflow-hidden">
          <Image
              src='/pp.png'
              alt='hero image'
              className='absolute inset-0 object-cover '
              width={250}
              height={280}
            />
          </div>
        </div>
        
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>Hello, I&apos;m{" "}</span> <br />
            <TypeAnimation
              sequence={[
                'Majid Ali',
                1000,
                'Web Developer',
                1000,
                'Graphic Designer',
                1000,
                'Freelancer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Innovative Web Designer and Developer, delivering responsive and interactive digital experiences </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-200 to-indigo-900 hover:bg-slate-200 text-black'>
              <a href="mailto:alimajid03021@gmail.com">Hire Me</a>
            </button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-teal-600 via-teal-400 to-indigo-600 hover:bg-slate-800 text-black mt-3'>
              <a href="/cv.pdf" download className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white'>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
