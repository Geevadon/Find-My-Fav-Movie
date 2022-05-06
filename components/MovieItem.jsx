import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IMG_API } from "../utils/config";

const MovieItem = ({ movie }) => {
   const [show, setShow] = useState(false);

   return (
      <div
         className="bg-main rounded shadow-sm shadow-secondary cursor-pointer border border-secondary flex flex-col justify-between min-h-full hover:scale-[1.02] relative overflow-auto"
         onMouseEnter={() => setShow(true)}
         onMouseLeave={() => setShow(false)}
      >
         <div
            className={`${
               show ? "opacity-90" : "opacity-0"
            } bg-black absolute w-full min-h-[100%] top-0 text-2xl p-2 flex flex-col items-center justify-between gap-2 transition-all transition-opacity duration-500 overflow-auto`}
         >
            <FaRegHeart title="Add to favorites" />
            {/* <FaHeart title="Remove to favorites"/> */}
            <p className="text-sm text-center">
               {movie.overview.substr(0, 600)}
               {movie.overview.length >= 600 && "..."}
            </p>
         </div>
         <img
            src={IMG_API + movie.poster_path}
            className="w-full movie-image"
            width={500}
            height={750}
         />
         <div className="p-3 font-bold flex items-center justify-between whitespace-nowrap gap-2">
            <h3 className="truncate" title={movie.original_title}>
               {movie.original_title}
            </h3>
            <span>{movie.vote_average}</span>
         </div>
      </div>
   );
};

export default MovieItem;
