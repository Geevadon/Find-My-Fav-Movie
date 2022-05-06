import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loader from "../components/Loader";
import MovieItem from "../components/MovieItem";

export default function Home({ states, handlers }) {
   useEffect(() => {}, [states.page, states.keyword]);

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
                     <MovieItem movie={movie} key={Math.random()} />
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
