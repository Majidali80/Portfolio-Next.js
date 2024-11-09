
"use client";
import React from 'react'
import { TiThMenu } from "react-icons/ti";
import Link from "next/link"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiWordpress, SiBlogger, SiTypescript, SiJavascript } from 'react-icons/si';  // Added TypeScript and JavaScript icons
import Image from 'next/image';  // Import Image component for Next.js

export default function Skills() {
  return (
    <section id='Skills' className='container-pd-32'>
    <div className="container mx-auto px-4 py-2">
      <h1 className='text-center font-extrabold lg:text-6xl mt-8 mb-24 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400'>My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Skill Item 1 - React */}
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">React</h3>
        </div>

        {/* Skill Item 2 - Node.js */}
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-500 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">Node.js</h3>
        </div>

        {/* Skill Item 3 - HTML5 */}
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-500 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">HTML5</h3>
        </div>

        {/* Skill Item 4 - CSS3 */}
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">CSS3</h3>
        </div>

        {/* Skill Item 5 - GitHub */}
        <div className="flex flex-col items-center">
          <FaGithub className="text-gray-800 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">GitHub</h3>
        </div>

        {/* Skill Item 6 - WordPress */}
        <div className="flex flex-col items-center">
          <SiWordpress className="text-blue-600 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">WordPress</h3>
        </div>

        {/* Skill Item 7 - Blogspot */}
        <div className="flex flex-col items-center">
          <SiBlogger className="text-blue-500 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">Blogspot</h3>
        </div>

        {/* Skill Item 8 - TypeScript */}
        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-600 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">TypeScript</h3>
        </div>

        {/* Skill Item 9 - JavaScript */}
        <div className="flex flex-col items-center">
          <SiJavascript className="text-yellow-500 text-6xl mb-3" />
          <h3 className="text-lg font-semibold">JavaScript</h3>
        </div>

        {/* Skill Item 10 - Vercel */}
        <div className="flex flex-col items-center rounded-2xl">
          {/* Using Next.js Image component for optimized image loading */}
          <Image
            src="/vercel.jpg"  // Path to your Vercel logo (store it in the /public directory)
            alt="Vercel"
            width={80}  // Adjust the size as needed
            height={250}  // Adjust the size as needed
            className="mb-3"  // Add margin at the bottom
          />
          <h3 className="text-lg font-semibold">Vercel</h3>
        </div>

        {/* Additional Skills (Optional for Custom Icons) */}
        {/* <div className="flex flex-col items-center">
          <img src="/path-to-your-icon.png" alt="Your Skill Icon" className="w-16 h-16 mb-3" />
          <h3 className="text-lg font-semibold">Your Skill</h3>
        </div> */}
      </div>
      
    </div>
    </section>
  );
}
