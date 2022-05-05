import Head from "next/head";
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
               href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,500;0,700;0,900;1,500&display=swap"
               rel="stylesheet"
            />
         </Head>

         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
