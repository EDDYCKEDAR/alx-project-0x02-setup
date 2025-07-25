import Header from '../components/layout/Header';
import Button from "@/components/common/Button";

const About: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    alert(`You clicked the ${buttonType} button!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About This Project
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This is a Next.js project showcasing various components and features including 
            routing, TypeScript interfaces, reusable components, and API integration. 
            The project demonstrates modern React development practices with a focus on 
            component reusability and type safety.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Button Component Showcase
          </h3>
          <p className="text-gray-600 mb-6">
            Below are examples of our reusable Button component with different sizes and shapes:
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-3">Small Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="small"
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Small Rounded-SM')}
                >
                  Small Rounded-SM
                </Button>
                <Button
                  size="small"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Small Rounded-MD')}
                >
                  Small Rounded-MD
                </Button>
                <Button
                  size="small"
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Small Rounded-Full')}
                >
                  Small Rounded-Full
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-3">Medium Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="medium"
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Medium Rounded-SM')}
                >
                  Medium Rounded-SM
                </Button>
                <Button
                  size="medium"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Medium Rounded-MD')}
                >
                  Medium Rounded-MD
                </Button>
                <Button
                  size="medium"
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Medium Rounded-Full')}
                >
                  Medium Rounded-Full
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-gray-700 mb-3">Large Buttons</h4>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="large"
                  shape="rounded-sm"
                  onClick={() => handleButtonClick('Large Rounded-SM')}
                >
                  Large Rounded-SM
                </Button>
                <Button
                  size="large"
                  shape="rounded-md"
                  onClick={() => handleButtonClick('Large Rounded-MD')}
                >
                  Large Rounded-MD
                </Button>
                <Button
                  size="large"
                  shape="rounded-full"
                  onClick={() => handleButtonClick('Large Rounded-Full')}
                >
                  Large Rounded-Full
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Technologies Used
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li>• <strong>Next.js:</strong> React framework for production</li>
            <li>• <strong>TypeScript:</strong> Type-safe JavaScript</li>
            <li>• <strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
            <li>• <strong>React Hooks:</strong> Modern state management</li>
            <li>• <strong>ESLint:</strong> Code linting and formatting</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default About;
