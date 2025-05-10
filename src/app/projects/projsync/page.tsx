import Image from 'next/image';

export default function ProjSyncPage() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-10">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ProjSync</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Advanced Project Management Application
            </h2>
            <p className="text-lg mb-6">
              ProjSync is a comprehensive project management solution designed to help teams
              efficiently organize, track, and coordinate various tasks, resources, and activities
              within their projects. It provides a user-friendly interface for managing project-related data
              and visualizing progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Drashko73/ProjSync" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                GitHub Repository
              </a>
              <a 
                href="http://softeng.pmf.kg.ac.rs:10204/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="relative h-[250px] sm:h-[300px] w-full max-w-[500px]">
              <Image 
                src="/images/projects/projsync.png" 
                alt="ProjSync Logo" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              ProjSync was developed as part of a Software Engineering course project in 2023/2024. 
              The application aims to provide an efficient tool for project management, enabling users 
              to organize, monitor, and coordinate different tasks, resources, and activities within their projects.
            </p>
            <p>
              With its intuitive interface and robust functionality, ProjSync streamlines project workflows, 
              facilitates team collaboration, and provides valuable insights through various visualization methods.
              The application is designed to serve the needs of project managers, team leaders, and team members 
              by providing role-specific access and functionalities.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">User and Role Management</h3>
              <p>
                Comprehensive system for managing user accounts and assigning specific roles 
                with appropriate access levels and permissions, ensuring secure and organized 
                project participation.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Project Creation and Management</h3>
              <p>
                Tools to create, edit, and organize projects with detailed information, 
                timelines, milestones, and resource allocation, providing a centralized 
                hub for all project-related data.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Activity Management</h3>
              <p>
                Functionality to track and manage project activities, including task assignment, 
                progress monitoring, deadline management, and completion status, ensuring 
                all team members stay coordinated and informed.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Visualizations</h3>
              <p>
                Multiple visualization methods for project activities and progress, 
                making it easier to understand complex project data, identify bottlenecks, 
                and make informed decisions about resource allocation and timelines.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Data Filtering</h3>
              <p>
                Advanced filtering capabilities that allow users to narrow down project 
                information based on various criteria, helping them find relevant data 
                quickly and efficiently, even in large and complex projects.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
              <p>
                Tools designed to enhance team cooperation, including shared task boards,
                activity feeds, and notification systems, fostering better communication 
                and coordination among project team members.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Architecture</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              ProjSync follows a modern web application architecture with clear separation of concerns:
            </p>
            <ul>
              <li>
                <strong>Frontend:</strong> A responsive and interactive user interface built with Angular, 
                following component-based architecture principles for maintainability and reusability.
              </li>
              <li>
                <strong>Backend:</strong> A robust API service developed using the .NET framework, 
                handling business logic, data processing, authentication, and database interactions.
              </li>
              <li>
                <strong>Database:</strong> Data persistence layer using SQLite, providing reliable 
                storage for project information, user data, and activity records.
              </li>
            </ul>
            <p>
              The application employs a client-server model where the Angular frontend communicates 
              with the .NET backend via RESTful API endpoints, ensuring efficient data exchange
              and separation of concerns.
            </p>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Angular 17</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Frontend framework for building responsive and interactive user interfaces
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">TypeScript</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Programming language for frontend development, adding static typing to JavaScript
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">HTML/CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Standard web technologies for structure and styling of user interfaces
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">.NET 8</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Framework for building server-side applications and APIs
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">C#</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Programming language for backend development
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">SQLite</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Lightweight, file-based database system for data storage
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Entity Framework Core</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ORM framework for database interactions from .NET applications
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">RESTful APIs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Communication protocol between frontend and backend components
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Git</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Version control system for code management and team collaboration
              </p>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Project Workflow</h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>User Authentication:</strong> Users log in with their credentials to access the system with their assigned role permissions.
            </li>
            <li>
              <strong>Project Creation:</strong> Project managers can create new projects, defining parameters, timelines, and team members.
            </li>
            <li>
              <strong>Task Management:</strong> Create, assign, and schedule tasks to team members with deadlines and priority levels.
            </li>
            <li>
              <strong>Progress Tracking:</strong> Monitor task completion, track project milestones, and visualize progress using different views.
            </li>
            <li>
              <strong>Reporting:</strong> Generate reports based on project data to provide insights into project health, resource utilization, and timeline adherence.
            </li>
          </ol>
        </section>

        {/* Setup Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Setup and Installation</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Requirements</h3>
            <ul className="list-disc ml-6 mb-6">
              <li>Node.js (v20.11.1 or higher)</li>
              <li>Angular CLI (v17.2.1 or higher)</li>
              <li>.NET SDK (v8.0.200 or higher)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Local Development Setup</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6">
              <pre className="text-sm">
                {`# Clone the repository
git clone http://gitlab.pmf.kg.ac.rs/si2024/syncatech.git

# Start frontend
cd src/front/angular
npm install
ng serve --open

# Start backend
cd src/back/backAPI/backAPI
dotnet run`}
              </pre>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Development Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Radovan Drašković</h3>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                Team Leader
              </p>
              <p className="text-sm mb-2">
                <a 
                  href="https://github.com/Drashko73" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  GitHub: @Drashko73
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="https://linkedin.com/in/radovan-draskovic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Mihajlo Nikolić</h3>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                Team Member
              </p>
              <p className="text-sm mb-2">
                <a
                    href="https://github.com/nmihajlon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    GitHub: @nmihajlon
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn: To be added
                </a>
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Vladimir Geroski</h3>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                Team Member
              </p>
              <p className="text-sm mb-2">
                <a
                    href="https://github.com/VGeroski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    GitHub: @VGeroski
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn: To be added
                </a>
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Luka Gvozdenović</h3>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                Team Member
              </p>
              <p className="text-sm mb-2">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    GitHub: To be added
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn: To be added
                </a>
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Milan Bajić</h3>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                Team Member
              </p>
              <p className="text-sm mb-2">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    GitHub: To be added
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  LinkedIn: To be added
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in ProjSync?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Check out the live demo to explore the application's features and functionality, 
            or visit the GitHub repository to see the source code.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="http://softeng.pmf.kg.ac.rs:10204/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Try the Live Demo
            </a>
            <a 
              href="https://github.com/Drashko73/ProjSync" 
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