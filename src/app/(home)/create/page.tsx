"use client";
import React, { useState } from "react";
import { add } from "@/services/posts";
const Create = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setUrl] = useState("");

  const handleCLick = async () => {
    const added = add({ author, title, description, image_url });
    alert("Blog Added");
    setAuthor("");
    setTitle("");
    setDescription("");
    setUrl("");
  };
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col gap-3 items-center w-full p-8">
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author"
          className="input w-md"
        />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="input w-md"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
          className="input w-md"
        />
        <input
          value={image_url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Image Url"
          className="input w-md"
        />
      </section>
      <button onClick={() => handleCLick()} className="btn btn-primary">
        Add Data
      </button>
    </div>
  );
};

export default Create;
