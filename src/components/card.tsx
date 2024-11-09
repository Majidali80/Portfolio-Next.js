// Card.tsx
import React from 'react';
import Image from 'next/image';

interface PropType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  githubLink: string;
  vercelLink: string;
}

const Card: React.FC<PropType> = ({ title, desc, img, tags, githubLink, vercelLink }) => {
  return (
    <div className='border border-accent w-[330px] sm:w-[300px] rounded-lg shadow-md'>
      <div>
        <Image
          className='w-[300px] sm:w-[350px] h-auto rounded-lg'
          src={img}
          width={300}
          height={300}
          alt={title}
        />
      </div>
      <div className="text-center p-6 space-y-6">
        {/* Project Title */}
        <div className='text-2xl font-extrabold'>{title}</div>

        {/* Project Description */}
        <div className="text-gray-700">{desc}</div>

        {/* Tags Section */}
        <div className="flex justify-center items-center gap-2 mt-2">
  {tags.map((tag, index) => (
    <span key={index} className="py-2 px-4 w-32 h-12 rounded-lg text-sm bg-gradient-to-br from-teal-600 via-teal-400 to-indigo-600 hover:bg-slate-800 text-black mt-3 flex items-center justify-center">
      {tag}
    </span>
  ))}
</div>



        {/* Buttons Section */}
        <div className="flex justify-between mt-4">
          {/* GitHub Button */}
          <a
            href={githubLink}  // Dynamic GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-800 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>

          {/* Vercel Button */}
          <a
            href={vercelLink}  // Dynamic Vercel link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-700 transition-colors"
          >
            Vercel
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
