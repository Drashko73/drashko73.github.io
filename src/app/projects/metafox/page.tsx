import Image from 'next/image';

export default function MetafoxPage() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-10">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MetaFOX</h1>
            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
              Advanced Automated Machine Learning Component
            </h2>
            <p className="text-lg mb-6">
              MetaFOX is an advanced automated machine learning (AutoML) component that provides
              a comprehensive set of tools for feature selection, hyperparameter optimization,
              and model selection. It streamlines the process of developing machine learning models,
              making AI more accessible to experts and non-specialists alike.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://metafox.readthedocs.io/en/latest/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Official Documentation
              </a>
              <a 
                href="https://github.com/Drashko73/metafox" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full">
            <div className="relative h-[250px] sm:h-[300px] w-full max-w-[500px]">
              <Image 
                src="/images/projects/metafox.png" 
                alt="MetaFOX Logo" 
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
              MetaFOX is an advanced AutoML component designed to streamline the creation, 
              optimization, and management of machine learning models. It integrates seamlessly 
              with other services, leveraging both synchronous and asynchronous communication 
              protocols to facilitate robust data processing and model generation.
            </p>
            <p>
              As an open-source module, MetaFOX implements existing state-of-the-art methods, 
              techniques, libraries, and standards, while introducing novel machine learning 
              concepts to enable developers to easily implement machine learning models in their applications.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Model Selection</h3>
              <p>
                MetaFOX evaluates numerous machine learning models to find the best architecture 
                for a specific problem, efficiently searching through various model types 
                (linear models, tree-based models, neural networks) to identify optimal solutions.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Feature Engineering</h3>
              <p>
                Automatically detects the best transformations and interactions of features 
                that benefit the model. It identifies the most relevant features for the target 
                task and creates new features to improve the model's performance.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hyperparameter Optimization</h3>
              <p>
                Optimizes hyperparameters much more efficiently than manual experimentation. 
                MetaFOX automatically tunes hyperparameters to improve model performance, 
                reducing the need for manual tuning and speeding up development.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Architecture Adjustments</h3>
              <p>
                In transfer learning scenarios, MetaFOX can determine the best architecture 
                adjustments needed when adapting a pre-trained model to a new task, such as 
                adding or removing layers, or adjusting the size of layers.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Architecture</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              MetaFOX utilizes a microservice-based architecture that supports cloud-native 
              deployment. The main components include:
            </p>
            <ul>
              <li>
                <strong>User Interfaces:</strong> MetaFOX exposes a well-documented Swagger.io (OpenAPI) UI.
              </li>
              <li>
                <strong>API Layer:</strong> Provides REST APIs for synchronous operations and task management.
              </li>
              <li>
                <strong>Worker Service:</strong> Performs the actual AutoML operations and model training.
              </li>
              <li>
                <strong>Message Broker:</strong> Facilitates communication between components using RabbitMQ.
              </li>
              <li>
                <strong>Storage Solutions:</strong> Uses MongoDB and Redis for data persistence and caching.
              </li>
            </ul>
            <p>
              The system is designed to serve multiple users with multiple AutoML jobs concurrently,
              thanks to its cloud-native design and Kubernetes auto-scaling capabilities.
            </p>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">FastAPI (v0.115.7)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                High-performance web framework for building APIs with Python 3.6+
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Celery (v5.4.0)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Distributed task queue for asynchronous task execution
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">MongoDB</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                NoSQL document database used as result backend for Celery
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Redis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Data store used as result backend for Celery
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">RabbitMQ</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Message-broker software used for component communication
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">TPOT (v0.12.2)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Python library for automated ML pipeline creation using genetic programming
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Docker</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Platform for developing and running applications in containers
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Kubernetes</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Container-orchestration system for application deployment and management
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-medium mb-2">Keycloak</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Identity and access management solution for authentication
              </p>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Usage Examples</h2>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Classification Example</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`curl -X 'POST' \\
  'http://[server-address]/metafox/tpot/automl/job/create' \\
  -H 'accept: application/json' \\
  -H 'Content-Type: application/json' \\
  -d '{
      "job_name": "Classification Example - Iris",
      "data_source": "https://raw.githubusercontent.com/Drashko73/datasets/master/iris/iris.csv",
      "target_variable": "species",
      "problem_type": "classification"
  }'`}
              </pre>
            </div>
            <p>
              This example demonstrates creating a classification model using the famous Iris dataset,
              where the machine learning task is to classify flowers into different species based on their measurements.
            </p>
            <p className="mt-2">
              <strong>Result:</strong> The optimization process improves accuracy over generations, 
              producing an optimal model for flower species prediction.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Regression Example</h3>
            <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
              <pre className="text-sm">
                {`curl -X 'POST' \\
  'http://[server-address]/metafox/tpot/automl/job/create' \\
  -H 'accept: application/json' \\
  -H 'Content-Type: application/json' \\
  -d '{
      "job_name": "Regression Example - Boston Housing",
      "data_source": "https://raw.githubusercontent.com/Drashko73/datasets/master/boston_housing/housing.csv",
      "target_variable": "medv",
      "problem_type": "regression"
  }'`}
              </pre>
            </div>
            <p>
              This example shows how to create a regression model using the Boston Housing dataset,
              predicting housing prices (medv) based on various neighborhood and house features.
            </p>
            <p className="mt-2">
              <strong>Result:</strong> The Mean Squared Error (MSE) decreases over generations, 
              demonstrating the optimization process finding increasingly accurate models for predicting housing prices.
            </p>
          </div>
        </section>

        {/* Workflow Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Typical Workflow</h2>
          <ol className="list-decimal ml-6 space-y-4">
            <li>
              <strong>Create an AutoML Job:</strong> Initialize a job with dataset information, target variable, and problem type.
            </li>
            <li>
              <strong>Start the AutoML Process:</strong> Trigger the model optimization process using the job ID returned in step 1.
            </li>
            <li>
              <strong>Monitor Progress:</strong> Check the status and optimization progress of the job as it evolves.
            </li>
            <li>
              <strong>Export the Final Model:</strong> Once optimization is complete, export the best model found in BentoML format.
            </li>
            <li>
              <strong>Deploy the Model:</strong> Use the optimized model in your application or further processing.
            </li>
          </ol>
        </section>

        {/* Limitations Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Current Limitations</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg">
            <ul className="list-disc ml-6 space-y-2">
              <li>
                MetaFOX currently only supports data input from CSV files accessed via online resources 
                (e.g., GitHub raw files).
              </li>
              <li>
                The underlying TPOT library does not support columns with non-numeric data types. 
                Users must preprocess and encode non-numeric data before passing it to MetaFOX.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to try MetaFOX?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Explore the documentation to get started with automated machine learning and 
            streamline your model development process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://metafox.readthedocs.io/en/latest/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Read the Documentation
            </a>
            <a 
              href="https://youtu.be/5EAes97HgvE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md shadow-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Watch Demo Video
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}