import Image from 'next/image';

export default function InstaScraper() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-10">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Instagram Scraper</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Data Extraction Tool for Public Instagram Profiles
            </h2>
            <p className="text-lg mb-6">
              A Python-based utility designed to extract and analyze data from public Instagram profiles.
              The tool provides features for retrieving user information, downloading posts, analyzing engagement metrics,
              and tracking tagged content - all through a user-friendly command-line interface.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Drashko73/instaScraper" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                GitHub Repository
              </a>
            </div>          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="relative h-[250px] sm:h-[300px] w-full max-w-[500px]">
              <Image 
                src="/images/projects/instascraper.png" 
                alt="Instagram Scraper Tool" 
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
              The Instagram Scraper is a Python project that enables users to extract data from public Instagram profiles 
              for analysis purposes. Using web scraping techniques, it provides a simple command-line interface to access 
              profile information, posts, engagement metrics, and more without requiring official API access.
            </p>
            <p>
              The tool was developed to provide a straightforward way to gather Instagram data for educational and research 
              purposes, showcasing how Python can be used to interact with web services. It features a clean, modular codebase 
              with well-documented functions that handle different aspects of data extraction.
            </p>
            <p>
              While respecting Instagram's terms of service and focusing only on public data, the tool demonstrates 
              practical applications of various Python concepts including web scraping, file handling, user interfaces, 
              and third-party library integration.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Profile Information Extraction</h3>
              <p>
                Retrieves comprehensive user details including username, full name, biography, follower count, 
                following count, post count, and verification status.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Post Download Capability</h3>
              <p>
                Downloads a specified number of recent posts from a profile, handling both single images and carousel posts 
                with proper file organization and naming.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Engagement Analysis</h3>
              <p>
                Identifies and downloads the most-liked post from a profile, enabling analysis of content that 
                generates the highest engagement.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Tagged Content Tracking</h3>
              <p>
                Collects links to posts where the user is tagged, providing insights into the user's connections 
                and visibility across the platform.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Batch Link Collection</h3>
              <p>
                Creates organized text files containing links to all user posts, simplifying the process of accessing 
                and sharing content collections.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Interactive CLI</h3>
              <p>
                Features a user-friendly command-line interface with a visually appealing ASCII art title, 
                progress bars for long-running operations, and intuitive menu navigation.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Architecture & Implementation</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The Instagram Scraper is built with a focus on modularity and clear separation of concerns:
            </p>
            <ul className="space-y-4 mt-4">
              <li>
                <strong>Core Functionality:</strong> Leverages the Instaloader library to handle authentication, 
                session management, and raw data retrieval from Instagram, providing a reliable foundation for 
                the scraping operations.
              </li>
              <li>
                <strong>Data Processing:</strong> Custom functions process and transform the raw data into usable formats, 
                handling different content types (images, carousels) and organizing the output appropriately.
              </li>
              <li>
                <strong>User Interface:</strong> A clean CLI with intuitive menus guides users through available options, 
                with progress bars and formatted output enhancing the experience during longer operations.
              </li>
              <li>
                <strong>File Management:</strong> Dedicated functions handle file operations including creating directories, 
                downloading content, and writing data to text files in an organized structure.
              </li>
              <li>
                <strong>Error Handling:</strong> Comprehensive try-except blocks manage potential issues like non-existent profiles, 
                private accounts, network failures, and input validation to ensure a robust user experience.
              </li>
              <li>
                <strong>Dependencies Management:</strong> A separate script automatically checks and installs required libraries, 
                simplifying the setup process for new users.
              </li>
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Python</h3>
              <p className="text-gray-600 dark:text-gray-400">Core programming language for all functionality</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Instaloader</h3>
              <p className="text-gray-600 dark:text-gray-400">Library for Instagram data access and retrieval</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Requests</h3>
              <p className="text-gray-600 dark:text-gray-400">HTTP library for downloading content</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">OS Module</h3>
              <p className="text-gray-600 dark:text-gray-400">File and directory management</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Sys Module</h3>
              <p className="text-gray-600 dark:text-gray-400">System-level operations and output formatting</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Webbrowser</h3>
              <p className="text-gray-600 dark:text-gray-400">Opening profile pictures in the default browser</p>
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Feature Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div>
                <h3 className="text-xl font-semibold mb-4">Command-line Interface</h3>
                <p className="mb-4">
                  The application features an intuitive menu-driven interface with ASCII art styling for improved visual 
                  appeal. Users navigate through numbered options to access different features, with clear indicators 
                  for successful operations and progress bars for longer tasks.
                </p>
                <p>
                  The interface handles various input scenarios gracefully, preventing errors from invalid inputs and 
                  providing helpful guidance messages when needed. This makes the tool accessible even to users with 
                  limited technical experience.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="order-1 md:order-2">
                <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
                <p className="mb-4">
                  The tool retrieves comprehensive profile information including statistics, biography, and 
                  verification status. For posts, it can download the content directly or create organized text files 
                  with links for later access.
                </p>
                <p>
                  Special analysis features, like identifying the most-liked post, demonstrate how the tool can be used 
                  for simple social media analytics without requiring complex setup or access to official APIs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ethical Considerations */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Ethical Considerations</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              This project was developed for educational purposes to demonstrate Python's capabilities for 
              web scraping and data processing. Users should be aware of the following important considerations:
            </p>
            <ul>
              <li>The tool is designed to work only with publicly available data on Instagram.</li>
              <li>Users should respect Instagram's terms of service when using this tool.</li>
              <li>The scraper should not be used for mass data collection that could burden Instagram's servers.</li>
              <li>Data collected should be used responsibly, respecting privacy and copyright concerns.</li>
              <li>The project serves as a learning resource for understanding web scraping techniques and API interactions.</li>
            </ul>
          </div>
        </section>

        {/* Future Improvements */}
        {/* <section>
          <h2 className="text-3xl font-bold mb-6">Future Improvements</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              While the current version offers solid functionality for Instagram data extraction, 
              several enhancements could be implemented in future versions:
            </p>
            <ul>
              <li>Graphical user interface (GUI) for improved usability</li>
              <li>Data visualization components to analyze engagement patterns</li>
              <li>Comment analysis and sentiment detection capabilities</li>
              <li>Scheduled scraping for long-term profile monitoring</li>
              <li>Export options to common data formats like CSV and JSON</li>
              <li>Batch processing for analyzing multiple profiles simultaneously</li>
            </ul>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Project</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Check out the GitHub repository to explore the code, learn about the implementation details,
            and see how Python can be used to create effective web scraping tools.
          </p>
          <a 
            href="https://github.com/Drashko73/instaScraper" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  );
}
