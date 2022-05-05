module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            main: "#032541",
            secondary: "#14B6DB"
         },
      },
      fontFamily: {
         lato: ["Lato", "sans-serif"],
      },
   },
   plugins: [],
};
