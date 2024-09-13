"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import { getBlogPosts } from '../lib/api'; // Adjust based on your setup

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://dev.to/api/articles?username=sabberrahman');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-600">Latest Blog Posts</h2>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden bg-opacity-30 backdrop-blur-full p-4">
              <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {new Date(post.published_at).toLocaleDateString()}
              </p>
              <p className="text-gray-300 text-sm mb-2">{post.description}</p>
              <Link href={`https://dev.to/sabberrahman/${post.slug}`} target='_blank'>
                <h1 className="text-blue-400 text-sm">Read more →</h1>
              </Link>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
}

export default Blog;
