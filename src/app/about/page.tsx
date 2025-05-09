import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">About Me</h1>
      
      <section className="space-y-4">
        <p className="text-lg">
          Hello! I'm Radovan, a passionate software developer with a strong interest in building applications
          that make a difference. I enjoy solving complex problems and creating efficient, user-friendly solutions.
        </p>
        
        <p>
          My journey in tech began in high school, when I first experimented with C and Python to automate small tasks. That early spark led me to pursue a Bachelor of Software Engineering at the University of Kragujevac, where I've been honing my skills in full-stack development, machine learning, and distributed systems. Beyond coursework, I've contributed to the EU-funded NEMO project—designing and  
          deploying the MetaFOX AutoML component—and interned at Inovatec Systems, building real-time Angular/.NET apps.
        </p>
        
        <p>
          When I'm not coding, you can find me mentoring students as a teaching associate, watching sci-fi movies, or exploring the great outdoors. I believe in continuous learning and am always eager to take on new challenges. I'm excited about the future of technology and how it can shape our world for the better.
        </p>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Skills</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Python</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">TypeScript</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Java</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">C#</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">C/C++</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">SQL</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">R</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">React</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Next.js</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Angular</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">HTML/CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Bootstrap</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Express</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">FastAPI</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Django</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">ASP.NET</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Spring Boot</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">RESTful APIs</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Database</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Microsoft SQL Server</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">PostgreSQL</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">MySQL</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">SQLite</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">MongoDB</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Redis</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Git</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Docker</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Kubernetes</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">CI/CD</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">RabbitMQ</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Celery</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">TensorFlow</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">PyTorch</span>
              <span className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Agile Methodology</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Education</h2>
        
        <div className="border-l-2 border-primary-300 pl-4 space-y-6">
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">2021 – June 2025</div>
            <h3 className="font-medium">Bachelor of Software Engineering (GPA 9.84/10.00)</h3>
            <div>Faculty of Science, University of Kragujevac — Kragujevac, Serbia</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 dark:text-gray-400">2017 – 2021</div>
            <h3 className="font-medium">High School (GPA 5.00/5.00)</h3>
            <div>Grammar School - Kruševac — Kruševac, Serbia</div>
          </div>
        </div>
      </section>
      
      <section className="mt-12 flex justify-between items-center">
        <Link href="/experience" className="button-primary">
          View My Experience
        </Link>
          <Link href="/projects" className="border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 font-medium py-2 px-4 rounded-md transition-colors">
          Check Out My Projects
        </Link>
      </section>
    </div>
  )
}