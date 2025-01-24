import GetAllPost from "@/lib/GetAllPost";
import Link from "next/link";

export default async function Home() {
  const posts = await GetAllPost();
  console.log(posts);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Available Posts: {posts.length}
        </h2>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <p className="text-gray-500 text-sm mb-2">Post ID: {post.id}</p>
              <Link href={`/blog/${post.id}`} className="text-lg font-semibold text-blue-600 hover:text-blue-400">
                  {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
