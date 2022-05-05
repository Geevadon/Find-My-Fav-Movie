import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "../components/Loader";
import MovieItem from "../components/MovieItem";

export default function Home() {
   const [movies, setMovies] = useState([]);

   const fetchPopularMovies = async () => {
      fetch("/api/popular", { method: "GET" })
         .then((response) => response.json())
         .then((data) => {
            setMovies(data.results);
         });
   };

   useEffect(() => {
      fetchPopularMovies();
   }, []);

   return (
      <>
         {movies.length === 0 ? (
            <div className="bg-main min-h-[80vh] flex justify-center items-center">
               <Loader />
            </div>
         ) : (
            <>
               <div className="mt-8 px-8 md:px-10 lg:px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {movies?.map((movie) => (
                     <MovieItem movie={movie} key={Math.random()} />
                  ))}
               </div>

               <div className="flex justify-center items-center gap-2 text-2xl py-4 font-bold">
                  <FaArrowLeft className="cursor-pointer" />
                  <div className="flex justify-center items-center border-2 border-secondary rounded-full p-2">
                     3
                  </div>
                  <FaArrowRight className="cursor-pointer" />
               </div>
            </>
         )}
      </>
   );
}
