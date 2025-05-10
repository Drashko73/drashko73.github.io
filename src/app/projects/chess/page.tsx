import Image from 'next/image';

export default function ChessPage() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-10">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Chess</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Interactive Chess Game Implementation
            </h2>
            <p className="text-lg mb-6">
              A fully functional chess game implementation featuring complete chess rule validation,
              move suggestions, special chess moves like en-passant and castling, and game state detection
              including checkmate and stalemate recognition. Developed using vanilla JavaScript with a focus
              on clean architecture and intuitive user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/Drashko73/Chess" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                GitHub Repository
              </a>
              <a 
                href="#"
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Live Demo
              </a>
            </div>          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="relative h-[250px] sm:h-[300px] w-full max-w-[500px]">
              <Image 
                src="/images/projects/chess.png" 
                alt="Chess Game" 
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
              The Chess project is a browser-based chess game implementation that allows players to
              play chess against each other or practice moves by themselves. The game ensures that all 
              chess rules are properly enforced, including special moves and win/loss/draw conditions.
            </p>
            <p>
              Developed as a passion project stemming from a lifelong interest in chess, this implementation
              uses JavaScript, HTML, and CSS to create a fully functional and interactive chess experience 
              without relying on any external libraries or frameworks. The game provides visual indicators for
              possible moves and enforces all chess rules to ensure a proper playing experience.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Complete Chess Rules Implementation</h3>
              <p>
                Enforces all standard chess rules with comprehensive move validation for each piece type,
                ensuring that players can only make valid moves according to official chess rules.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Move Suggestions</h3>
              <p>
                Visual indicators show all possible valid moves when a piece is selected, with different
                indicators for empty spaces (dots) and opponent pieces that can be captured (circles).
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Special Move Recognition</h3>
              <p>
                Implements special chess moves including castling (kingside and queenside), en-passant
                captures for pawns, and pawn promotion with selection interface for piece upgrades.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Game State Detection</h3>
              <p>
                Automatically detects and announces checkmate (win/loss), stalemate (draw), and
                other game-ending conditions, providing visual and audio feedback to players.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Check Validation</h3>
              <p>
                Prevents moves that would leave or place the player's king in check, enforcing the 
                rule that a player must move out of check when their king is threatened.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Interactive UI</h3>
              <p>
                Features drag-and-drop piece movement, turn indicators, invalid move prevention with
                visual and audio feedback, and an intuitive chess board representation.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Architecture & Implementation</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              The Chess project is structured using a modular approach with core functions that handle
              distinct aspects of the game:
            </p>
            <ul className="space-y-4 mt-4">
              <li>
                <strong>Board Representation:</strong> A 2D matrix (8×8) represents the chess board, with each 
                cell containing information about the piece occupying that position. This matrix is the foundation
                for move validation and game state detection.
              </li>
              <li>
                <strong>Move Validation System:</strong> Comprehensive rules for each chess piece are implemented
                in the <code>isValidMove</code> function, which checks if a move is valid based on the piece type, 
                starting position, ending position, and the current board state.
              </li>
              <li>
                <strong>Check Detection:</strong> The <code>canCheckAfterMove</code> and <code>isKingInCheck</code> 
                functions work together to determine if a move would result in a check position and prevent illegal moves.
              </li>
              <li>
                <strong>Special Move Implementation:</strong> Special rules for castling, en-passant, and pawn 
                promotion are handled by dedicated functions that track piece movement history and game state.
              </li>
              <li>
                <strong>Game State Detection:</strong> The <code>isGameOver</code> function analyzes the board
                to detect checkmate, stalemate, and other game-ending conditions.
              </li>
              <li>
                <strong>User Interface:</strong> Event-driven programming enables piece selection, movement, 
                and visual feedback using CSS classes and JavaScript DOM manipulation.
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
              <p className="text-gray-600 dark:text-gray-400">Core game logic, move validation, and state management</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">HTML5</h3>
              <p className="text-gray-600 dark:text-gray-400">Game structure and DOM elements for the chess board</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">CSS3</h3>
              <p className="text-gray-600 dark:text-gray-400">Styling, animations, and visual indicators for moves</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">DOM Manipulation</h3>
              <p className="text-gray-600 dark:text-gray-400">Dynamic UI updates and event handling</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Audio API</h3>
              <p className="text-gray-600 dark:text-gray-400">Sound effects for moves, captures, and game events</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Drag & Drop API</h3>
              <p className="text-gray-600 dark:text-gray-400">Interactive piece movement on the chess board</p>
            </div>
          </div>
        </section>

        {/* Game Features Showcase */}
        <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Game Features Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Move Suggestions & Validation</h3>
              <p className="mb-4">
                When a piece is selected, all valid moves are displayed on the board using visual
                indicators. Empty cells show dots, while cells with opponent pieces that can be
                captured display circles.
              </p>
              <p>
                Invalid moves (such as moves that would expose the king to check) are prevented,
                with visual feedback (red highlight) and an error sound to indicate why the move
                cannot be made.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Special Chess Moves</h3>
              <p className="mb-4">
                The game implements all special chess moves according to standard rules:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Castling (both kingside and queenside)</li>
                <li>En-passant captures for pawns</li>
                <li>Pawn promotion with piece selection interface</li>
                <li>Check and checkmate detection</li>
                <li>Stalemate recognition</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Improvements */}
        {/* <section>
          <h2 className="text-3xl font-bold mb-6">Future Improvements</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              While the current implementation provides a complete chess game experience, several
              enhancements are planned for future versions:
            </p>
            <ul>
              <li>AI opponent with adjustable difficulty levels using machine learning techniques</li>
              <li>Online multiplayer functionality for playing against remote opponents</li>
              <li>Game history and move notation following standard chess notation</li>
              <li>Time controls and chess clock implementation for timed games</li>
              <li>Opening book and recognized opening sequences</li>
              <li>Performance optimizations for more complex board evaluations</li>
            </ul>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="bg-blue-50 dark:bg-blue-900 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Try the Chess Game</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Experience the fully implemented chess game with all standard rules and special moves.
            Challenge a friend or practice your skills against yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#"
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Play the Game
            </a>
            <a 
              href="https://github.com/Drashko73/Chess" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              View Source Code
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}