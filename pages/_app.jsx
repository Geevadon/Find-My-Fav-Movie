import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
   // States
   const [movies, setMovies] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
   const [keyword, setKeyword] = useState("");

   // Pagination prev
   const prev = () => {
      if (page > 1) {
         setPage(page - 1);
      }
   };

   // Pagination next
   const next = () => {
      if (page < totalPages) {
         setPage(page + 1);
      }
   };

   // Search handler
   const search = (k) => {
      setKeyword(k);

      if (k) {
         fetch(`/api/search?page=${page}&keyword=${k}`, { method: "GET" })
            .then((response) => response.json())
            .then((data) => {
               setMovies(data.results);
               setTotalPages(data.total_pages);
            });
      } else {
         fetchMovies();
      }
   };

   // Fetch movies from the API
   const fetchMovies = async () => {
      fetch(`/api/movies?page=${page}`, { method: "GET" })
         .then((response) => response.json())
         .then((data) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
         });
   };

   useEffect(() => {
      if (keyword) {
         search(keyword);
      } else {
         fetchMovies();
      }
   }, [page, keyword]);

   return (
      <>
         <Head>
            <title>Find My Fav Movie</title>
            <meta
               name="description"
               content="Simple web app that allows people to find their favorite movie"
            />
            <link rel="icon" href="/favicon.ico" />
            <link
               href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
               rel="stylesheet"
            />
         </Head>

         <div className="font-lato bg-main text-white min-h-screen w-full">
            <Navbar search={search} setPage={setPage} />
            <Component
               {...pageProps}
               states={{ movies, page, totalPages, keyword }}
               handlers={{ prev, next, search }}
            />
            <Footer />
         </div>
      </>
   );
}

export default MyApp;
