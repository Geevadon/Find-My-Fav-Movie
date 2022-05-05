import Link from "next/link";

export default function Custom404() {
   return (
      <div className="bg-main flex justify-center items-center text-white min-h-screen">
         <div className="flex flex-col text-center gap-4">
            <div>
               <h1 className="text-9xl">404</h1>
               <p className="text-2xl uppercase font-thin">Page not found</p>
            </div>

            <h3 className="uppercase font-light text-sm">
               <Link href="/">Go back home</Link>
            </h3>
         </div>
      </div>
   );
}
