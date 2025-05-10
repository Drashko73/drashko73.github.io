'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function ProjectsPage() {
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
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">My Projects</h1>
      
      <p className="text-lg">
        Here's a collection of projects I've worked on. Each one represents a unique challenge and learning opportunity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">CI/CD</span>
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
        
        {/* Project 3 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
            <Image
              src="/images/projects/portfolio.png"
              alt="Portfolio Project Image"
              fill
              priority
              className="object-cover"
              draggable="false"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A personal portfolio and blog website built with Next.js and deployed on GitHub Pages.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Next.js</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">TypeScript</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Tailwind CSS</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">GitHub Actions</span>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/projects/portfolio" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>
              <a href="https://github.com/Drashko73/drashko73.github.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
            <Image
              src="/images/projects/chess.png"
              alt="Chess Project Image"
              fill
              priority
              className="object-cover"
              draggable="false"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Chess</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Web application that allows users to learn and play chess online, featuring a user-friendly interface and multiplayer functionality.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">HTML</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">CSS</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">JavaScript</span>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/projects/chess" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>
              <a href="https://github.com/Drashko73/Chess" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
            <Image
              src="/images/projects/pathfinding.png"
              alt="Pathfinding Algorithms Visualization Project Image"
              fill
              priority
              className="object-scale-down"
              draggable="false"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Pathfinding Algorithms Visualization</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Web application that visualizes pathfinding algorithms in real-time, allowing users to see how different algorithms work.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">HTML</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">CSS</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">JavaScript</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Python</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Graph Algorithms</span>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/projects/pathfinding-algorithms" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>
              <a href="https://github.com/Drashko73/Pathfinding-algorithms" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 6 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 relative">
            <Image
              src="/images/projects/instascraper.png"
              alt="InstaScraper Project Image"
              fill
              priority
              className="object-scale-down"
              draggable="false"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">InstaScraper</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Python console application for scraping Instagram data using the Instaloader library.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Python</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Console application</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Instaloader</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Requests</span>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/projects/instascraper" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>
              <a href="https://github.com/Drashko73/instaScraper" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* GitHub Profile Link Section */}
      <div className="mt-12 p-6 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Looking for more?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore more projects, including organization contributions, on my GitHub profile. 
              <span className="block mt-1 text-sm italic">Note: Some projects are currently private and will be added once they become public.</span>
            </p>
          </div>
          <a 
            href="https://github.com/Drashko73" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}