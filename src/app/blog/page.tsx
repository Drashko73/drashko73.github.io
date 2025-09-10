import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="space-y-8 min-h-[calc(100vh-16rem)]">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">My Blog</h1>
      
      <p className="text-lg text-gray-600 dark:text-gray-400">
        I write about software development, technology trends, and my experiences as a developer.
      </p>
      
      <div className="mt-12">
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 border dark:border-gray-700 rounded-lg shadow-sm">
          <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-5 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-primary-600 dark:text-primary-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-primary-600 dark:text-primary-400">Blog Coming Soon!</h2>
          
          <p className="text-xl mb-6 max-w-2xl">
            I'm currently working on some interesting articles to share with you.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
            Stay tuned for insightful posts about software engineering, web development techniques, 
            project experiences, and tech industry trends. I'll be sharing tutorials, best practices, 
            and lessons learned from my journey as a software developer.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Web Development</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Software Engineering</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">React & Next.js</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Machine Learning</span>
            <span className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-4 py-2">Career Tips</span>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            Check back soon for my first post!
          </p>
        </div>
      </div>
    </div>
  )
}