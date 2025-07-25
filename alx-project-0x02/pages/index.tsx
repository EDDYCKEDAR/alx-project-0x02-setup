import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to ALX Project 2
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is a Next.js project built with TypeScript and Tailwind CSS. 
            Explore the different pages to see various components and features in action.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">🏗️ Components</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Reusable Card components</li>
                  <li>• Dynamic Button components</li>
                  <li>• Interactive Modal components</li>
                  <li>• PostCard and UserCard components</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">🚀 Features</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Next.js Pages Router</li>
                  <li>• TypeScript interfaces</li>
                  <li>• Tailwind CSS styling</li>
                  <li>• API data fetching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
