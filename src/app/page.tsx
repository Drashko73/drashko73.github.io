import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function HomePage() {
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
        <h2 className="section-heading">Featured Projects</h2>        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Project Image
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Brief description of the project and what technologies were used.</p>
              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">React</span>
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Node.js</span>
                </div>              <Link href="/projects/project-name" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  View Details →
                </Link>
              </div>
            </div>
          </div>          <div className="border dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Project Image
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Another Project</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Brief description of the project and what technologies were used.</p>
              <div className="flex justify-between items-center">
                <div className="space-x-2">
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">TypeScript</span>
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Next.js</span>
                </div>                <Link href="/projects/another-project" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
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