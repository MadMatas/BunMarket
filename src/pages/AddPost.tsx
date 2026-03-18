import React from "react";

export default function AddPost() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Create New Listing</h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Select Category</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Clothing</option>
            <option>Vehicles</option>
          </select>

          <input
            type="file"
            className="w-full border p-2 rounded-lg"
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
            Publish Listing
          </button>
        </form>
      </div>
    </div>
  );
}