"use client";

import { useEffect, useState } from "react";
import { Post, index } from "@/services/posts";
const Main = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filtered = posts?.filter(
        (data) =>
          data.author.toLowerCase().includes(searchInput.toLowerCase()) ||
          data.description.toLowerCase().includes(searchInput.toLowerCase()) ||
          data.title.toLowerCase().includes(searchInput.toLowerCase()),
      );

      console.log(filtered);
      setPosts(filtered);
    } else {
      loadPosts();
    }
  }, [searchInput]);
  const loadPosts = async () => {
    const posts = await index();

    setPosts(posts);
  };

  return (
    <main className="flex flex-col w-full gap-4 p-3">
      {/* Search Bar */}
      <label className="input w-[950] self-center">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          value={searchInput}
          type="search"
          required
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
      <section className="grid grid-cols-3">
        {posts &&
          posts.map((data: Post) => (
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure>
                <img src={data.image_url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Main;
