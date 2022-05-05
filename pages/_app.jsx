import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
            <Navbar />
            <Component {...pageProps} />
         </div>
      </>
   );
}

export default MyApp;
