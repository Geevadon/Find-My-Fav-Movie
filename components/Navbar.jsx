import React from "react";
import Link from "next/link";
import { FaSearch, FaStar } from "react-icons/fa";

const Navbar = () => {
   return (
      <nav className="w-full flex justify-between items-center gap-4 p-3 flex-col md:flex-row">
         <h2 className="text-3xl font-bold">
            FindMy
            <span className="text-secondary">
               <Link href="/">FavMovie</Link>
            </span>
         </h2>
         <div className="flex items-center gap-4">
            <Link href="/favorite">
               <FaStar
                  className="text-3xl cursor-pointer"
                  title="My Favorite Movies"
               />
            </Link>

            <form className="flex gap-2 items-center border border-secondary px-2 py-1 rounded">
               <FaSearch className="cursor-pointer" />
               <input
                  type="text"
                  placeholder="Find a movie here..."
                  className="outline-none bg-main text-normal w-full placeholder:text-white"
               />
            </form>
         </div>
      </nav>
   );
};

export default Navbar;
