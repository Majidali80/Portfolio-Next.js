"use client";
import React, { useState } from "react";
import {FaLinkedin, FaFacebook } from 'react-icons/fa';  // Icons for social media links
import {FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaBehance } from "react-icons/fa";
import GithubIcon from "./github-icon.svg";
import LinkedinIcon from "./linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      email: (form.email as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      message: (form.message as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.status === 200) {
        setEmailSubmitted(true);
        setEmailError(null);
      } else {
        setEmailError(result.error || "Failed to send message.");
      }
    } catch (error) {
      setEmailError("Error sending message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-800 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-[600px] sm:top-[350px] left-24 transform -translate-x-1/2 -translate-1/2"></div>

      <div>
        <h5 className="text-xl font-bold text-white my-2 pl-8">Get's In Touch!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md pl-8">
          I&apos;m excited to explore new opportunities and would love to hear
          from you. Whether you have a question or just want to connect, don’t
          hesitate to reach out. I&apos;ll make sure to get back to you as soon as
          possible!
        </p>
        <div className="socials flex flex-row gap-5 pl-8">
          <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">
            <FaSquareUpwork className="text-white hover:text-gray-300 transition-colors w-8 h-8" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-300 transition-colors w-8 h-8" />
          </a>
          <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-white hover:text-gray-300 transition-colors w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-gray-300 transition-colors w-8 h-8" />
          </a>
          <a href="https://www.fiverr.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <TbBrandFiverr className="text-white hover:text-gray-300 transition-colors w-8 h-8" />
          </a>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <>
            {emailError && (
              <p className="text-red-500 text-sm mt-2">{emailError}</p>
            )}
            <form className="flex flex-col pr-8" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Enter Your Subject"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block text-sm mb-2 font-medium"
                >
                  How Can I Help You
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Your Message Here..."
                />
              </div>
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-black font-medium py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
``
