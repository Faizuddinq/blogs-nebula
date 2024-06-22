import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100  sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
        Nebula-Blogs
        </Link>
      </div>
      <div className="flex gap-2 flex-row ml-5">
    <ul className=" flex gap-3 justify-center align-middle mr-6">
      <li><a href="#featured">Featured</a></li>
      <li>Trending</li>
      <li>Recent</li>
    </ul>
     </div>
      
    </div>
    
  </>
  );
};

export default Navbar;
