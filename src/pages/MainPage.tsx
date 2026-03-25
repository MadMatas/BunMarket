import React from "react";


export type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
};

export type Post = {
  id: number;
  name: string;
  description: string;
  price: number;
  date: string;
  author: string;
  photos: string;
  comments: Comment[];
};

const posts: Post[] = [
  {
    id: 1,
    name: "MacBook Pro 2021",
    description: "Lightly used, great condition.",
    price: 1200,
    date: "2026-01-01",
    author: "Jebrom Lames",
    photos: "https://source.unsplash.com/400x300/?laptop",
    comments: []
  },
  {
    id: 2,
    name: "Office Chair",
    description: "Ergonomic, barely used.",
    price: 80,
    date: "2026-01-01",
    author: "Lebron James",
    photos: "https://source.unsplash.com/400x300/?chair",
    comments: []
  },
  {
    id: 3,
    name: "Mountain Bike",
    description: "Great for trails.",
    price: 300,
    date: "2026-01-01",
    author: "Lebron James",
    photos: "https://source.unsplash.com/400x300/?bike",
    comments: []
  },
];

const categories = [
  "Electronics",
  "Furniture",
  "Clothing",
  "Vehicles",
  "Other",
];

export default function MainPage() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
    

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar */}
        <aside className="hidden md:block w-64">
          <div className="bg-white rounded-xl shadow p-4">
            <h2 className="font-semibold mb-3">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sort Bar */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Latest Listings</h2>
            <select className="border px-3 py-2 rounded-lg">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

/* 🔹 Post Card Component */
function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={post.photos}
        className="w-full h-48 object-cover"
        alt={post.name}
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{post.name}</h3>
        <p className="text-gray-500 text-sm">{post.description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold">
            ${post.price}
          </span>
          <span className="text-xs text-gray-400">
            {post.date}
          </span>
        </div>
      </div>
    </div>
  );
}