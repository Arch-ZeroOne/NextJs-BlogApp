import React from "react";
import Link from "next/link";
const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">GFG Blog</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/blog"> Home</Link>
            </li>
            <li>
              <Link href="/create">Create New Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
};

export default Navbar;
