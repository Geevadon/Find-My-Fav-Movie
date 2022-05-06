import { useState, useEffect } from "react";
import MovieItem from "../components/MovieItem";

export default function Favorite() {
   // States
   const [reload, setReload] = useState("");
   const [savedFavMovies, setSavedFavMovies] = useState([]);
   const [limit, setLimit] = useState(10);

   // Array to split (slice)
   const allMovies = savedFavMovies.slice(0, limit);

   // Load more handler
   const loadMore = () => {
      if (allMovies.length < savedFavMovies.length) {
         setLimit(limit + 10);
      }
   };

   // Favorite handler
   const favoriteHandler = (movie) => {
      // Change reload value
      setReload(Math.random());

      // Create a state copy
      const favMoviesCopy = savedFavMovies;

      // If the movie doesn't exist, add it. Otherwise, remove it.
      favMoviesCopy = favMoviesCopy.filter((m) => m.id !== movie.id);

      // Set the sate
      setSavedFavMovies(favMoviesCopy);

      // Update the local storage
      localStorage.setItem("FAVMOVIES", JSON.stringify(favMoviesCopy));
   };

   // useEffect
   useEffect(() => {
      setSavedFavMovies(
         typeof window !== "undefined" && localStorage.getItem("FAVMOVIES")
            ? JSON.parse(localStorage.getItem("FAVMOVIES"))
            : []
      );
   }, [reload]);

   return (
      <div className="min-h-screen">
         <h1 className="text-3xl text-center uppercase font-light">
            My favorite movies
         </h1>
         {savedFavMovies.length === 0 ? (
            <h3 className="text-2xl text-center font-light mt-16">
               There is no movie at the moment...
            </h3>
         ) : (
            <>
               <div className="px-8 md:px-10 lg:px-20 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {allMovies?.map((movie) => (
                     <MovieItem
                        movie={movie}
                        favoriteHandler={favoriteHandler}
                        key={Math.random()}
                     />
                  ))}
               </div>

               <div className="mt-16 flex justify-center items-center">
                  <button
                     className={
                        allMovies.length >= savedFavMovies.length
                           ? "border border-gray-500 text-gray-500 px-6 py-2 rounded uppercase font-bold cursor-not-allowed"
                           : "bg-transparent hover:bg-secondary hover:text-main border border-secondary text-secondary px-6 py-2 rounded uppercase font-bold"
                     }
                     onClick={loadMore}
                  >
                     Load More
                  </button>
               </div>
            </>
         )}
      </div>
   );
}
