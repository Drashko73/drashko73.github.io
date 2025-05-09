
export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4">Professional Experience</h1>
      
      <p className="text-lg">
        My professional journey has allowed me to work on diverse projects and technologies, from software development to academia.
      </p>
      
      <div className="space-y-12 mt-8">
        {/* CERAMO Experience */}
        <div className="border dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300">Software Engineer</h2>
            <div className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0">March 2024 - Present</div>
          </div>
          <div className="mb-3">
            <h3 className="text-xl font-medium">Center for Computer Modeling and Optimization (CERAMO)</h3>
            <div className="text-gray-600 dark:text-gray-400">Kragujevac, Serbia</div>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contributing to the open-source NEMO project, funded by the EU Horizon Europe Research and Innovation Program, by developing MetaFOX, a component for automated machine learning within a meta-operating system (META-OS).</li>
            <li>Designed and implemented the microservices architecture of the MetaFOX component using Python and the following technologies: FastAPI, Celery, Flower, Redis, RabbitMQ, Keycloak, and various machine learning libraries.</li>
            <li>Leveraged Docker and Kubernetes for development and deployment of the MetaFOX component on the University's high-performance computing cluster and a Raspberry Pi 3 device.</li>
          </ul>
        </div>
        
        {/* Faculty Teaching Experience */}
        <div className="border dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300">Teaching Associate</h2>
            <div className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0">October 2023 - Present</div>
          </div>
          <div className="mb-3">
            <h3 className="text-xl font-medium">Faculty of Science, University of Kragujevac</h3>
            <div className="text-gray-600 dark:text-gray-400">Kragujevac, Serbia</div>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Teach and mentor students across multiple courses, focusing on theoretical concepts and practical applications:
              <ul className="list-circle pl-5 space-y-1 mt-1">
                <li><span className="font-bold">Introduction to Programming:</span> Delivered lectures and hands-on exercises in the C programming language for first-year students.</li>
                <li><span className="font-bold">Data Structures and Algorithms:</span> Instructed second-year students on fundamental data structures and algorithmic problem-solving using C programming language (Trees and Graphs).</li>
                <li><span className="font-bold">Computer Networks:</span> Guided students through theoretical concepts and practical network building using CISCO Packet Tracer.</li>
                <li><span className="font-bold">Object-Oriented Programming Practicum:</span> Supervised practical sessions in C++, teaching advanced OOP principles to second-year students.</li>
              </ul>
            </li>
            <li>Designed and evaluated assignments, projects, and exams to enhance students' understanding of programming and networking concepts.</li>
            <li>Provided one-on-one guidance to students, fostering critical thinking and problem-solving skills in programming and computer networks.</li>
            <li>Received consistent positive feedback from students, achieving an average score of 4.8/5 in semester-end evaluations across multiple categories, reflecting strong teaching effectiveness and student engagement.</li>
          </ul>
        </div>
        
        {/* Inovatec Systems Internship */}
        <div className="border dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300">Full-Stack Development Intern</h2>
            <div className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0">July 2024 - August 2024</div>
          </div>
          <div className="mb-3">
            <h3 className="text-xl font-medium">Inovatec Systems</h3>
            <div className="text-gray-600 dark:text-gray-400">Kragujevac, Serbia</div>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Collaborated within a team of 4 members to develop a full-stack application for internal project management.</li>
            <li>Designed and implemented the frontend using the Angular framework, focusing on an intuitive user interface and seamless user experience.</li>
            <li>Developed the backend using the .NET Framework and C#, ensuring secure and efficient server-side functionality.</li>
            <li>Integrated the SignalR library to manage real-time state updates and enable interactive features within the application.</li>
            <li>Presented the final product to employees and managers, demonstrating its functionality and value to internal workflows.</li>
          </ul>
        </div>
        
        {/* MISANU Internship */}
        <div className="border dark:border-gray-700 rounded-lg p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-300">Research Intern</h2>
            <div className="text-gray-600 dark:text-gray-400 mt-1 md:mt-0">July 2023 - January 2025</div>
          </div>
          <div className="mb-3">
            <h3 className="text-xl font-medium">Mathematical Institute of the Serbian Academy of Sciences and Arts</h3>
            <div className="text-gray-600 dark:text-gray-400">Belgrade, Serbia</div>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conducted comprehensive literature review of the P||Cmax scheduling problem (parallel machine scheduling to minimize makespan).</li>
            <li>Implemented various common algorithms for solving the P||Cmax problem in order to compare their efficiency and results (e.g., LPT, COMBINE, ...).</li>
            <li>Analyzed performance metrics across different problem instances to identify strengths and limitations of each approach.</li>
            <li>Contributed to the research efforts in optimization algorithms for parallel machine scheduling problems resulting in a publication (2025).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
