import React, { useState } from "react";

type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
};

type PostType = {
  id: number;
  name: string;
  description: string;
  price: number;
  date: string;
  author: string;
  photos: string[];
  comments: Comment[];
};

const mockPost: PostType = {
  id: 1,
  name: "MacBook Pro 2021",
  description:
    "Lightly used MacBook Pro in excellent condition. No scratches, battery health 95%.",
  price: 1200,
  date: "2026-03-18",
  author: "John Doe",
  photos: [
    "https://source.unsplash.com/800x500/?laptop",
    "https://source.unsplash.com/800x500/?macbook",
    "https://source.unsplash.com/800x500/?workspace",
  ],
  comments: [
    {
      id: 1,
      author: "Alice",
      content: "Is this still available?",
      date: "2h ago",
    },
    {
      id: 2,
      author: "Bob",
      content: "Can you lower the price?",
      date: "1h ago",
    },
  ],
};

export default function Post() {
  const [post, setPost] = useState<PostType>(mockPost);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: "You",
      content: newComment,
      date: "now",
    };

    setPost({
      ...post,
      comments: [comment, ...post.comments],
    });

    setNewComment("");
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow overflow-hidden">

          {/* 🖼 Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {post.photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                className="w-full h-64 object-cover"
              />
            ))}
          </div>

          {/* 📦 Content */}
          <div className="p-6">
            <h1 className="text-2xl font-bold">{post.name}</h1>

            <p className="text-blue-600 text-xl font-semibold mt-2">
              ${post.price}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              Posted on {post.date}
            </p>

            <p className="mt-4 text-gray-700">
              {post.description}
            </p>

            {/* 👤 Author */}
            <div className="flex items-center gap-3 border-t mt-6 pt-4">
              <img
                src="https://i.pravatar.cc/50"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-gray-500">
                  Seller
                </p>
              </div>
            </div>

            {/* 💬 Comments */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">
                Comments
              </h2>

              {/* Add Comment */}
              <div className="flex gap-2 mb-4">
                <input
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  onClick={addComment}
                  className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600"
                >
                  Post
                </button>
              </div>

              {/* Comment List */}
              <div className="space-y-3">
                {post.comments.map((c) => (
                  <div
                    key={c.id}
                    className="bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">
                        {c.author}
                      </span>
                      <span className="text-gray-400">
                        {c.date}
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1">
                      {c.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="mt-8 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}