import Image from 'next/image';

export default function PathfindingAlgorithmsPage() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-10">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pathfinding Algorithms</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Interactive Visualization of Search Algorithms
            </h2>
            <p className="text-lg mb-6">
              A comprehensive educational tool visualizing popular pathfinding algorithms (BFS and DFS) 
              in action on an interactive grid. The project includes maze generation capabilities, 
              step-by-step algorithm execution visualization, and code generation for various 
              programming languages.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Drashko73/Pathfinding-algorithms" 
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
                src="/images/projects/pathfinding.png" 
                alt="Pathfinding Algorithms Visualization" 
                fill
                className="object-contain"
                draggable="false"
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
              The Pathfinding Algorithms project was developed as part of a university course on Client Web Technologies, 
              combining web development with data structures and algorithms concepts. It offers an intuitive visualization
              of how different search algorithms navigate through a grid to find a path from a start point to an end point.
            </p>
            <p>
              This interactive educational tool allows users to see the execution of BFS (Breadth-First Search) and 
              DFS (Depth-First Search) algorithms in real-time, with visual indicators showing the search process 
              step by step. Users can also create their own mazes by drawing walls on the grid or choosing from 
              pre-generated maze patterns.
            </p>
            <p>
              Beyond visualization, the project also includes a code generation feature that produces algorithm 
              implementations in various programming languages (JavaScript, Java, C++, Python), helping users 
              understand how these algorithms can be implemented in practice.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Algorithm Visualization</h3>
              <p>
                Interactive visualization of BFS and DFS pathfinding algorithms, showing the exploration process
                step by step with color-coded cells indicating visited nodes, path nodes, and walls.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Maze Creation</h3>
              <p>
                Users can create custom mazes by drawing walls directly on the grid or choose from 
                pre-generated maze patterns loaded via AJAX from XML files.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Code Generation</h3>
              <p>
                Generates algorithm implementations in multiple programming languages including JavaScript, 
                Java, C++, and Python, helping users understand the underlying code.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Interactive Grid</h3>
              <p>
                Fully interactive grid system with movable start and end points, and the ability to draw walls 
                by clicking and dragging on the cells.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Educational Content</h3>
              <p>
                Comprehensive educational materials about algorithms, their properties, and classifications,
                providing context for the visualization demonstrations.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Path Highlighting</h3>
              <p>
                Once a path is found, the solution path is highlighted separately from the visited nodes,
                clearly showing the optimal route from start to end.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Architecture & Implementation</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The Pathfinding Algorithms project is structured using a modular approach with clear separation of concerns:
            </p>
            <ul className="space-y-4 mt-4">
              <li>
                <strong>Grid Representation:</strong> An interactive matrix system built with HTML tables,
                where each cell represents a node in the graph with properties like position, state (empty, wall, start, end),
                and visual representation.
              </li>
              <li>
                <strong>Algorithm Implementation:</strong> The core algorithms (BFS and DFS) are implemented with 
                appropriate data structures (queues for BFS, stacks/recursion for DFS), with simulation controls 
                that allow for step-by-step execution.
              </li>
              <li>
                <strong>Maze Generation:</strong> The project includes both manual maze creation through user
                interaction and pre-designed mazes loaded from XML files using AJAX.
              </li>
              <li>
                <strong>Code Generation System:</strong> Dynamically generates algorithm implementations in
                different programming languages by retrieving code templates from XML files.
              </li>
              <li>
                <strong>Session Management:</strong> Uses browser session storage to maintain user state and
                preferences across page navigation.
              </li>
              <li>
                <strong>User Interface:</strong> Interactive UI with controls for algorithm selection,
                maze generation, visualization speed, and grid manipulation implemented through event-driven
                JavaScript.
              </li>
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">JavaScript</h3>
              <p className="text-gray-600 dark:text-gray-400">Algorithm implementation, visualization logic, and DOM manipulation</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">HTML5</h3>
              <p className="text-gray-600 dark:text-gray-400">Structure for the grid and user interface components</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">CSS3</h3>
              <p className="text-gray-600 dark:text-gray-400">Styling for grid cells, animations, and UI elements</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">AJAX</h3>
              <p className="text-gray-600 dark:text-gray-400">Loading maze patterns and code templates from XML files</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">XML</h3>
              <p className="text-gray-600 dark:text-gray-400">Data storage for maze patterns and algorithm code templates</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Session Storage API</h3>
              <p className="text-gray-600 dark:text-gray-400">Persistent user state management across pages</p>
            </div>
          </div>
        </section>

        {/* Visualization Showcase */}
        <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Visualization Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Algorithm Execution</h3>
              <p className="mb-4">
                When an algorithm is selected and executed, the search process is visualized cell by cell. 
                Visited cells are highlighted in green, showing the exploration pattern unique to each algorithm.
                BFS expands in a wave-like pattern, while DFS explores deeply along a path before backtracking.
              </p>
              <p>
                If a path is found, it is highlighted in silver, showing the route from start to end.
                If no path exists, the visualization will indicate that all possible routes have been
                explored without reaching the destination.
              </p>
            </div>
            <div className="relative h-[250px] w-full">
              <Image 
                src="/images/projects/pathfinding-exec.png" 
                alt="Algorithm Execution Visualization" 
                fill
                className="object-contain rounded-md"
                draggable="false"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="relative h-[250px] w-full order-2 md:order-1">
              <Image 
                src="/images/projects/pathfinding-maze.png" 
                alt="Maze Generation" 
                fill
                className="object-contain rounded-md"
                draggable="false"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-semibold mb-4">Maze Generation</h3>
              <p className="mb-4">
                The project supports creating complex mazes through multiple methods. Users can draw walls
                manually by clicking and dragging on the grid, or select pre-designed maze patterns from
                a dropdown menu.
              </p>
              <p>
                Pre-designed mazes are loaded from XML files using AJAX, demonstrating practical
                implementation of asynchronous data loading in web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Future Improvements Section */}
        {/* <section>
          <h2 className="text-3xl font-bold mb-6">Future Improvements</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              While the project successfully implements and visualizes BFS and DFS algorithms, there are
              several potential improvements that could enhance the educational value and user experience:
            </p>
            <ul>
              <li>Implementing additional pathfinding algorithms like A*, Dijkstra's, and Greedy Best-First Search</li>
              <li>Adding weighted nodes to demonstrate algorithms that account for different traversal costs</li>
              <li>Creating an algorithm comparison mode to visualize multiple algorithms simultaneously</li>
              <li>Implementing automated maze generation algorithms</li>
              <li>Adding performance metrics to compare algorithm efficiency</li>
              <li>Improving the mobile responsiveness for better usability on smaller screens</li>
            </ul>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Project</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Check out the GitHub repository to explore the code, learn about the implementation details,
            and see how pathfinding algorithms can be visualized in an interactive web environment.
          </p>
          <a 
            href="https://github.com/Drashko73/Pathfinding-algorithms" 
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