import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "../components/Loader";
import MovieItem from "../components/MovieItem";

export default function Home() {
   const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(3);
   const [totalPages, setTotalPages] = useState(0);

   const prev = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };

   const next = () => {
      if (page < totalPages) {
         setPage(page + 1);
      }
   };

   const fetchPopularMovies = async () => {
      fetch(`/api/popular?page=${page}`, { method: "GET" })
         .then((response) => response.json())
         .then((data) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
         });
   };

   useEffect(() => {
      fetchPopularMovies();
   }, [page]);

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
                  <FaArrowLeft
                     className="cursor-pointer"
                     onClick={() => prev()}
                  />
                  <div className="flex justify-center items-center border-2 border-secondary rounded-full p-2">
                     {page}
                  </div>
                  <FaArrowRight
                     className="cursor-pointer"
                     onClick={() => next()}
                  />
               </div>
            </>
         )}
      </>
   );
}
