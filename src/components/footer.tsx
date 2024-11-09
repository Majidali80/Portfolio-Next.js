import React from "react";
import Image from "next/image";
import {FaLinkedin, FaFacebook } from 'react-icons/fa';  // Icons for social media links
import {FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaBehance } from "react-icons/fa";
import GithubIcon from "./github-icon.svg";
import LinkedinIcon from "./linkedin-icon.svg";

function Footer() {
  return (
    <footer className="footer bg-gradient-to-r from-blue-600 to-black h-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center mb-4 lg:mb-0 mr-2">
          <Image
            src="/logo.png" // Path to your logo in the public folder
            alt="Logo"
            width={60} // Adjust the size
            height={60} // Adjust the size
            className="-mr-2"
          />
          <h1 className="text-2xl font-bold text-white mt-2">Web Developer</h1> {/* Optional: Company name */}
        </div>
        
        {/* Footer Text */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-sm opacity-70">All rights reserved &copy; 2024</p>
          <p className="text-sm opacity-70">Designed and developed by Majid Ali</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-2xl">
          
        
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://github.com/">
            <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
          </a>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
