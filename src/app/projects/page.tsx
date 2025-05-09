import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">My Projects</h1>
      
      <p className="text-lg">
        Here's a collection of projects I've worked on. Each one represents a unique challenge and learning opportunity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Project 1 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
            Project Image
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">React</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Node.js</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">MongoDB</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Express</span>
            </div>
            <div className="flex justify-between items-center">              <Link href="/projects/ecommerce-platform" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>              <a href="https://github.com/username/repo" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
            Project Image
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A collaborative task management application with real-time updates, drag-and-drop interface, and team workspaces.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">React</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Firebase</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Redux</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Styled Components</span>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/projects/task-management" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>
              <a href="https://github.com/username/repo" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
            Project Image
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Weather Forecast App</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              A weather application that provides real-time forecasts, radar maps, and severe weather alerts for locations worldwide.
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">JavaScript</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Weather API</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Leaflet.js</span>
              <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">HTML/CSS</span>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/projects/weather-app" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                View Details
              </Link>
              <a href="https://github.com/username/repo" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
        
        {/* Project 4 */}
        <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
            Project Image
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
      </div>
    </div>
  )
}