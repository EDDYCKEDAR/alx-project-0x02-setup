// pages/posts.tsx
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostProps[] = await res.json();
    return {
      props: {
        posts: data.slice(0, 12), // limit to 12
      },
      revalidate: 60, // optional: ISR support (rebuild every 60s)
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Posts;
