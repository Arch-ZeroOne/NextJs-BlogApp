import React from "react";

const Create = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col gap-3 items-center w-full p-8">
        <input type="text" placeholder="Author" className="input w-md" />
        <input type="text" placeholder="Title" className="input w-md" />
        <input type="text" placeholder="Description" className="input w-md" />
        <input type="text" placeholder="Image Url" className="input w-md" />
      </section>
      <button className="btn btn-primary">Add Data</button>
    </div>
  );
};

export default Create;
