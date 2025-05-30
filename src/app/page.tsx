'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function HomePage() {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleAwardClick = () => {
    setShowTooltip(!showTooltip);
  };
  
  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (showTooltip && 
          tooltipRef.current && 
          buttonRef.current && 
          !tooltipRef.current.contains(event.target as Node) &&
          !buttonRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside as EventListener);
    document.addEventListener('touchstart', handleClickOutside as EventListener);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [showTooltip]);

  return (
    <div className="space-y-16">
      {/* Hero section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-8">
        <div className="flex-1 space-y-4">          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Radovan</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
            I am a Software Engineering student and Teaching Associate at the Faculty of Science, University of Kragujevac.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Passionate about bridging theory and practice through impactful projects and research. 
            I support students in their academic journey while collaborating on innovative software development initiatives.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="button-primary">
              More About Me
            </Link>            <Link href="/projects" className="border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 font-medium py-2 px-4 rounded-md transition-colors">
              View Projects
            </Link>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="https://github.com/Drashko73" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/radovan-draskovic" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@Drashko73" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              <FaYoutube size={24} />
            </a>
            <a href="mailto:radovandk@gmail.com" className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <Image 
              src="/images/profile.png" 
              alt="Drashko's profile photo" 
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 192px, 256px"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
              <Image
                src="/images/projects/metafox.png"
                alt="MetaFOX Project Image"
                fill
                priority
                className="object-scale-down"
                draggable="false"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">MetaFOX</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                An advanced automated machine learning (AutoML) component that provides comprehensive set of tools for feature selection, hyperparameter optimization, and model selection.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Python</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Machine Learning</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">FastAPI</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Celery</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">MongoDB</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">RabbitMQ</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Redis</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Flower</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Keycloak</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Docker</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Kubernetes</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/projects/metafox" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  View Details
                </Link>
                <a href="https://github.com/Drashko73/metafox" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
            <div 
              ref={buttonRef}
              className="absolute top-0 right-0 z-20 m-2 bg-yellow-400 dark:bg-yellow-500 text-black p-1.5 rounded-full shadow-md cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={handleAwardClick}
              aria-label="View award details"
              role="button"
              tabIndex={0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 0-2.916-.52c.115.34.208.69.277 1.044m-2.916-.52a5.969 5.969 0 0 0-.262-1.044m-2.916.52a46.087 46.087 0 0 0 2.657 0m-2.657 0V2.25" />
              </svg>
              {showTooltip && (
                <div 
                  ref={tooltipRef} 
                  className="fixed z-50 bg-gray-900 text-white text-xs p-2 rounded max-w-64 shadow-lg text-center"
                  style={{
                    top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom + 8 : 0,
                    left: buttonRef.current ? buttonRef.current.getBoundingClientRect().left + (buttonRef.current.getBoundingClientRect().width / 2) : 0,
                    transform: 'translateX(-50%)'
                  }}
                >
                  Awarded as the Best Application in Faculty Competition
                </div>
              )}
            </div>
            <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
              <Image
                src="/images/projects/projsync.png"
                alt="ProjSync Project Image"
                fill
                priority
                className="object-scale-down"
                draggable="false"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">ProjSync</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full-Stack project management web application that allows users to create, manage, and collaborate on projects in real-time while providing a seamless user experience with a modern design.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Full-Stack</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Web App</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Angular</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Bootstrap</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">TypeScript</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">SQLite</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">C#</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">ASP.NET</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">SignalR</span>
                <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Agile Methodology</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="/projects/projsync" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  View Details
                </Link>
                <a href="https://github.com/Drashko73/ProjSync" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  GitHub Repository →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects */}
        <div className="mt-6 text-center">
          <Link href="/projects" className="button-primary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section>
        <h2 className="section-heading">Latest from the Blog</h2>
        <div className="space-y-6">
          <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-400 dark:text-gray-400 mb-2">May 5, 2025</div>
            <h3 className="text-xl font-semibold mb-2">How I Built My Portfolio with Next.js</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              In this post, I share my experience building a modern portfolio website using Next.js and Tailwind CSS...
            </p>            <Link href="/blog/how-i-built-portfolio" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              Read More →
            </Link>
          </div>
            <div className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-400 dark:text-gray-400 mb-2">April 20, 2025</div>
            <h3 className="text-xl font-semibold mb-2">Best Practices for Code Organization</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Exploring different approaches to organize code in large projects and how it impacts maintainability...
            </p>            <Link href="/blog/code-organization-practices" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              Read More →
            </Link>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/blog" className="button-primary">
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  )
}