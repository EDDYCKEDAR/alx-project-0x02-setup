import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from "@/components/common/Card";
import Button from '../components/common/Button';
import PostModal from '../components/common/PostModal';

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Welcome to Our Platform",
      content: "This is the first card demonstrating our reusable Card component. It displays dynamic content passed as props."
    },
    {
      id: 2,
      title: "Component Architecture",
      content: "Our components are built with TypeScript and designed to be reusable across the application. Each component accepts props for customization."
    },
    {
      id: 3,
      title: "Styling with Tailwind",
      content: "We use Tailwind CSS for consistent and responsive styling. The utility-first approach makes it easy to create beautiful interfaces."
    }
  ]);

  const handleAddPost = (data: { title: string; content: string }) => {
    const newPost: Post = {
      id: posts.length + 1,
      title: data.title,
      content: data.content
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Post
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
        
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
};

export default Home;
