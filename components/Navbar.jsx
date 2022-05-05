import React from "react";
import Link from "next/link";
import { FaSearch, FaStar } from "react-icons/fa";

const Navbar = () => {
   return (
      <nav className="w-full flex justify-between items-center gap-4 p-3 flex-col md:flex-row">
         <h2 className="text-3xl font-bold">
            <Link href="/">
               <a>
                  FindMy<span className="text-secondary">FavMovie</span>
               </a>
            </Link>
         </h2>
         <div className="flex items-center gap-4">
            <Link href="/favorite">
               <a title="My Favorite Movies">
                  <FaStar className="text-3xl" />
               </a>
            </Link>

            <div className="flex gap-2 items-center border border-secondary px-2 py-1 rounded">
               <FaSearch />
               <input
                  type="text"
                  placeholder="Find a movie here..."
                  className="outline-none bg-main text-normal w-full placeholder:text-white"
               />
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
