import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart } from "react-icons/fa";

const Navbar = ({ search, setPage }) => {
   const [keyword, setKeyword] = useState("");

   // Search handler
   const searchHandler = (e) => {
      e.preventDefault();

      setPage (1);

      setKeyword(e.target.value);

      search(e.target.value);
   };

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
               <a>
                  <FaHeart
                     className="text-3xl cursor-pointer"
                     title="My Favorite Movies"
                  />
               </a>
            </Link>

            <form
               className="flex gap-2 items-center border border-secondary px-2 py-1 rounded"
               onSubmit={searchHandler}
            >
               <button type="submit">
                  <FaSearch className="cursor-pointer" />
               </button>

               <input
                  type="text"
                  placeholder="Find a movie here..."
                  className="outline-none bg-main text-normal w-full placeholder:text-white"
                  value={keyword}
                  onChange={(e) => searchHandler(e)}
               />
            </form>
         </div>
      </nav>
   );
};

export default Navbar;
