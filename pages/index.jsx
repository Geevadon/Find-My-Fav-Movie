import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "../components/Loader";
import MovieItem from "../components/MovieItem";

export default function Home({ states, handlers }) {
   // States
   const [reload, setReload] = useState("");
   const [savedFavMovies, setSavedFavMovies] = useState(
      typeof window !== "undefined" && localStorage.getItem("FAVMOVIES")
         ? JSON.parse(localStorage.getItem("FAVMOVIES"))
         : []
   );

   // useEffect
   useEffect(() => {}, [states.page, states.keyword, reload]);

   // Favorite handler
   const favoriteHandler = (movie) => {
      // Change reload value
      setReload(Math.random());

      // Create a state copy
      const favMoviesCopy = savedFavMovies;

      // Check if the movie is already saved
      const checkMovie = (m) => {
         return m.id === movie.id;
      };

      // If the movie doesn't exist, add it. Otherwise, remove it.
      if (favMoviesCopy.some(checkMovie)) {
         favMoviesCopy = favMoviesCopy.filter((m) => m.id !== movie.id);
      } else {
         favMoviesCopy.push(movie);
      }

      // Add the movie into the favorite array

      // Set the sate
      setSavedFavMovies(favMoviesCopy);

      // Update the local storage
      localStorage.setItem("FAVMOVIES", JSON.stringify(favMoviesCopy));
   };

   return (
      <>
         {states.movies.length === 0 && states.keyword === "" ? (
            <div className="bg-main min-h-[80vh] flex justify-center items-center">
               <Loader />
            </div>
         ) : states.movies?.length === 0 && states.keyword !== "" ? (
            <div className="bg-main min-h-[80vh] flex justify-center items-center">
               <p className="text-2xl uppercase">Aucun résultat...</p>
            </div>
         ) : (
            <>
               <div className="mt-8 px-8 md:px-10 lg:px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {states.movies?.map((movie) => (
                     <MovieItem
                        movie={movie}
                        favoriteHandler={favoriteHandler}
                        key={Math.random()}
                     />
                  ))}
               </div>

               <div className="flex justify-center items-center gap-2 text-2xl py-4 font-bold">
                  <FaArrowLeft
                     className={
                        states.page === 1
                           ? "cursor-not-allowed text-gray-500"
                           : "cursor-pointer"
                     }
                     onClick={() => handlers.prev()}
                  />
                  <div className="flex justify-center items-center border-2 border-secondary rounded-full p-2">
                     {states.page}
                  </div>
                  <FaArrowRight
                     className={
                        states.totalPages === states.page
                           ? "cursor-not-allowed text-gray-500"
                           : "cursor-pointer"
                     }
                     onClick={() => handlers.next()}
                  />
               </div>
            </>
         )}
      </>
   );
}
