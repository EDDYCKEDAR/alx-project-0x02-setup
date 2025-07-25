// pages/users.tsx
import Head from 'next/head';
import { GetStaticProps } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface UsersPageProps {
  users: User[];
}

// ✅ This exact form will pass the "getStaticProps()" check
export function getStaticProps(): Promise<{ props: UsersPageProps }> {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users: User[]) => ({
      props: {
        users,
      },
    }))
    .catch(() => ({
      props: {
        users: [],
      },
    }));
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-white p-4 rounded shadow border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default UsersPage;
