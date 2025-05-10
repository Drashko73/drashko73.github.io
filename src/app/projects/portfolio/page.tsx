import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-10">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Website</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Personal Portfolio & Blog
            </h2>
            <p className="text-lg mb-6">
              A fully responsive personal portfolio and blog website built with Next.js and Tailwind CSS, 
              featuring a modern design with dark/light mode support. It showcases my projects, skills, 
              experience, and includes a blog section for sharing articles and tutorials.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Drashko73/drashko73.github.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                GitHub Repository
              </a>
              <a 
                href="https://drashko73.github.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Live Website
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative h-[300px] w-full max-w-[500px]">
              <Image 
                src="/images/projects/portfolio.png" 
                alt="Portfolio Website Screenshot" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This portfolio website serves as a digital showcase of my professional work, skills, and 
              experiences. Built with modern web technologies, it features a clean, responsive design that 
              adapts seamlessly to different screen sizes, from mobile devices to desktop monitors.
            </p>
            <p>
              The site includes dedicated sections for my projects, professional experience, educational 
              background, and a blog where I can share technical articles, tutorials, and insights. The 
              combination of static site generation and client-side interactivity provides excellent 
              performance and user experience.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p>
                Fully responsive layout that adapts to any screen size, ensuring a consistent 
                experience across desktop, tablet, and mobile devices using Tailwind CSS's 
                powerful responsive utilities.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Dark/Light Mode Support</h3>
              <p>
                Built-in theme switching between dark and light modes, respecting user preferences 
                while also allowing manual toggling, enhancing accessibility and user experience.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Project Showcase</h3>
              <p>
                Dedicated section to highlight personal and professional projects with detailed 
                information, technologies used, and links to live demos or repositories.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Blog Functionality</h3>
              <p>
                Integrated blog system that supports Markdown content with syntax highlighting 
                for code snippets, making it easy to share technical articles and tutorials.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Static Site Generation</h3>
              <p>
                Leverages Next.js static site generation for improved performance, SEO benefits, 
                and reduced server load, while maintaining dynamic elements where needed.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Automated Deployment</h3>
              <p>
                Continuous deployment workflow using GitHub Actions that automatically builds 
                and deploys the website to GitHub Pages whenever changes are pushed to the main branch.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Architecture & Implementation</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The portfolio website is built using a modern web development stack with a focus on performance, 
              maintainability, and developer experience:
            </p>
            <ul>
              <li>
                <strong>Next.js Framework:</strong> Provides the foundation with its App Router architecture, 
                static site generation capabilities, and built-in optimizations.
              </li>
              <li>
                <strong>React:</strong> Powers the interactive components and UI elements with a 
                component-based architecture for better maintainability.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Enables rapid styling with utility classes, reducing 
                CSS bundle size and providing a consistent design system.
              </li>
              <li>
                <strong>TypeScript:</strong> Adds type safety to the codebase, improving developer 
                experience and reducing runtime errors.
              </li>
              <li>
                <strong>MDX Processing:</strong> Converts Markdown content with JSX components for 
                rich, interactive blog posts and project descriptions.
              </li>
              <li>
                <strong>GitHub Actions:</strong> Automates the build and deployment process when 
                changes are pushed to the repository.
              </li>
            </ul>
            <p>
              The site follows a well-structured organization with separate directories for components, 
              pages, content, and utility functions, making it easy to maintain and extend.
            </p>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Next.js</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React framework with hybrid static & server rendering, TypeScript support, and route prefetching
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">React</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                JavaScript library for building user interfaces with component-based architecture
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">TypeScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Strongly typed programming language that builds on JavaScript with static type definitions
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Utility-first CSS framework for rapidly building custom designs
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">MDX</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Markdown for the component era, allowing JSX components in markdown content
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">GitHub Pages</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Hosting service for static websites directly from a GitHub repository
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">GitHub Actions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                CI/CD platform integrated with GitHub for automated workflows
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Framer Motion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Production-ready motion library for React to create smooth animations
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">React Icons</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Include popular icons in React projects easily with ES6 imports
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Details Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Implementation Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Project Structure</h3>
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                <pre className="text-sm">
                  {`src/
├── app/               # Next.js App Router
│   ├── about/         # About page
│   ├── blog/          # Blog page and individual blog posts
│   ├── contact/       # Contact page
│   ├── experience/    # Experience page
│   ├── projects/      # Projects page
│   ├── layout.tsx     # Root layout with navigation and footer
│   └── page.tsx       # Home page
├── components/        # Reusable React components
├── content/           # Blog posts and project data
│   ├── blog/          # Markdown files for blog posts
│   └── projects/      # Project data files
├── lib/               # Utility functions
├── styles/            # Global styles and Tailwind config`}
                </pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Theme Switching</h3>
              <p className="mb-4">
                The website implements a dynamic theme switching system that detects the user's system preferences 
                and allows manual toggling between light and dark modes. The theme selection is saved in local storage 
                for persistence across visits.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Content Management</h3>
              <p>
                Blog posts and project descriptions are written in Markdown format, which is processed at build time 
                using MDX-bundler, rehype-highlight for syntax highlighting, and rehype-slug for automatic heading IDs. 
                This approach combines the ease of writing in Markdown with the power of React components.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Learning Outcomes</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <ul className="list-disc ml-6 space-y-3">
              <li>
                <strong>Modern React Patterns:</strong> Implementing React hooks, context API, and 
                functional components for state management and UI composition.
              </li>
              <li>
                <strong>Next.js App Router:</strong> Working with Next.js 13+ App Router for better 
                page organization and server-side rendering capabilities.
              </li>
              <li>
                <strong>Responsive Design:</strong> Creating adaptive layouts that work well across 
                different screen sizes using Tailwind CSS's responsive utilities.
              </li>
              <li>
                <strong>TypeScript Integration:</strong> Adding strong typing to React components and 
                utility functions for better code quality and developer experience.
              </li>
              <li>
                <strong>CI/CD with GitHub Actions:</strong> Setting up automated workflows for building, 
                testing, and deploying the website to GitHub Pages.
              </li>
              <li>
                <strong>Design Systems:</strong> Creating a consistent visual language and component 
                library for the entire website.
              </li>
              <li>
                <strong>Performance Optimization:</strong> Implementing image optimization, code splitting, 
                and other techniques to ensure fast load times.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Portfolio</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Visit the live website to explore all the features, view my projects in detail, 
            and read articles on the blog. Or check out the source code on GitHub to see how it's built.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://drashko73.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Visit the Website
            </a>
            <a 
              href="https://github.com/Drashko73/drashko73.github.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View Source Code
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
