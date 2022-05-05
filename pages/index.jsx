import Navbar from "../components/Navbar";

export default function Home() {
   return (
      <div className="font-lato bg-main text-white min-h-screen w-full">
         <Navbar />

         <div className="mt-8 px-20">
            <h1 className="text-2xl">Content...</h1>
         </div>
      </div>
   );
}
