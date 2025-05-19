import React, { useState, useEffect, useRef } from 'react';
import vibeVideo from '../assets/vibehex-demo.mp4';
import tlouVideo from '../assets/tlou-demo.mp4';

function Projects() {
  const [showMockup, setShowMockup] = useState(false);
  const [type, setType] = useState(""); // "laptop" or "iphone"
  const [hoveredProject, setHoveredProject] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mockupRef = useRef(null);

  const projects = [
    {
      name: "AI Powered Color Palette Generator",
      date: "2025",
      type: "laptop",
      video: vibeVideo,
    },
    {
      name: "The Last of US Fanpage",
      date: "2025",
      type: "laptop",
      video: tlouVideo,
    },
    {
      name: "Inventory Control App For Local Businesses",
      date: "2025",
      type: "iphone",
      video: vibeVideo,
    },
    {
      name: "Mini Website Generator For Local Businesses",
      date: "2025",
      type: "laptop",
      video: vibeVideo,
    },
    {
      name: "Personal Finance Tracker App (For Myself)",
      date: "2025",
      type: "iphone",
      video: vibeVideo,
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mockupWidth = mockupRef.current?.offsetWidth || 200;
      const mockupHeight = mockupRef.current?.offsetHeight || 400;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let left = e.clientX + 20;
      if (left + mockupWidth > windowWidth - 20) {
        left = e.clientX - mockupWidth - 20;
      }

      let top = e.clientY - mockupHeight / 2;
      if (top < 20) top = 20;
      if (top + mockupHeight > windowHeight - 20) {
        top = windowHeight - mockupHeight - 20;
      }

      setPosition({ x: left, y: top });
    };

    if (showMockup) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [showMockup]);

  const handleMouseEnter = (project) => {
    setType(project.type);
    setHoveredProject(project);
    setShowMockup(true);
  };

  const handleMouseLeave = () => {
    setShowMockup(false);
    setHoveredProject(null);
  };

  return (
    <div className='mt-20 flex flex-col gap-10 font-light relative z-0'>
      <div className='flex justify-between'>
        <p>Featured Work</p>
        <p className='text-sm text-[#777a81]'>Hover project title for demo</p>
      </div>
      {projects.map((project, index) => (
        <div className='flex flex-col'>
          <div
            key={index}
            className='cursor-default flex justify-between hover:scale-105'
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
          >
            <span>{project.name}</span>
            <span className="text-gray-400">{project.date}</span>
          </div>
          <div className='flex flex-row gap-2'>
            <a href='https://www.linkedin.com/in/daytonbaldizon/' target="_blank" className="grey-links">Live</a>
            <a href='https://github.com/Daytuns' target="_blank" className="grey-links">Code</a>
          </div>
        </div>
      ))}


      {/* Hover mockup */}
      {showMockup && hoveredProject && (
        <div
          ref={mockupRef}
          className="fixed pointer-events-none transition-all duration-100 ease-out z-50 opacity-100 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-md bg-neutral-900/50 shadow-xl"
          style={{
            left: position.x,
            top: position.y,
            width: type === 'laptop' ? '864px' : '351px',
            height: type === 'laptop' ? '480px' : '700px',
          }}
        >
          <video
            src={hoveredProject.video}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
          />
        </div>

      )}
    </div>
  );
}

export default Projects;
