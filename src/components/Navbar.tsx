"use client";
import React from 'react'
import Link from "next/link"
import About from "../components/About"

export default function Navbar() {
  return (
      <div>
          <title>Majid Ali</title>
          <meta name="description" content="Majid Ali Portfolio" />
          <nav className="flex items-center justify-around px-8  w-full bg-gradient-to-r from-blue-600 to-black h-20">

         
              
          <div className="h-20 w-20 flex items-start justify-center">
  <img src="/logo.png" alt="Logo" className="h-full w-full object-contain rounded -ml-20" />
</div>


<div className='flex justify-between items-center gap-10 lg:gap-20 text-xl font-medium'>
      <div className="text-white justify-center"><a href="/">Home</a></div>
      <div className="text-white justify-center"><a href="#projects">My Projects</a></div>
      <div className="text-white justify-center"><a href="#about">About Me</a></div>
      <div className="text-white justify-center"><a href="#Skills">Skills</a></div>
      <div className="text-white justify-center"><a href="#contact">Contact</a></div>
      

      </div>
      </nav>
      </div>
      

  )
}


