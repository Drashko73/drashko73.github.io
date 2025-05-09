import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">My Blog</h1>
      
      <p className="text-lg">
        I write about software development, technology trends, and my experiences as a developer.
      </p>
      
      <div className="space-y-10 mt-8">
        {/* Blog post 1 */}        <article className="border-b dark:border-gray-700 pb-8">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">May 5, 2025</div><h2 className="text-2xl font-semibold mb-3">
            <Link href="/blog/how-i-built-portfolio" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              How I Built My Portfolio with Next.js
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            In this post, I share my experience building a modern portfolio website using Next.js and Tailwind CSS.
            I discuss the architecture decisions, component design, and deployment process to GitHub Pages.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Next.js</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Tailwind CSS</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">GitHub Pages</span>
          </div>          <Link href="/blog/how-i-built-portfolio" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Read more →
          </Link>
        </article>
        
        {/* Blog post 2 */}        <article className="border-b dark:border-gray-700 pb-8">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">April 20, 2025</div><h2 className="text-2xl font-semibold mb-3">
            <Link href="/blog/code-organization-practices" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              Best Practices for Code Organization
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Exploring different approaches to organize code in large projects and how it impacts maintainability,
            scalability, and team collaboration. With examples from real-world applications.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Software Architecture</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Clean Code</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Best Practices</span>
          </div>          <Link href="/blog/code-organization-practices" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Read more →
          </Link>
        </article>
        
        {/* Blog post 3 */}
        <article className="border-b pb-8">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">March 15, 2025</div>          <h2 className="text-2xl font-semibold mb-3">
            <Link href="/blog/typescript-react-tips" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              TypeScript Tips for React Developers
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A collection of TypeScript tips and tricks specifically for React developers.
            Learn how to type props, hooks, context, and event handlers properly.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">TypeScript</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">React</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Web Development</span>
          </div>          <Link href="/blog/typescript-react-tips" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Read more →
          </Link>
        </article>
        
        {/* Blog post 4 */}
        <article>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">February 28, 2025</div>          <h2 className="text-2xl font-semibold mb-3">
            <Link href="/blog/getting-started-with-nextjs" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              Getting Started with Next.js 14
            </Link>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A beginner's guide to Next.js 14. Learn how to set up a project, understand the app router,
            create pages, and deploy your application.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Next.js</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">React</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm">Tutorial</span>
          </div>          <Link href="/blog/getting-started-with-nextjs" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
            Read more →
          </Link>
        </article>
      </div>
    </div>
  )
}