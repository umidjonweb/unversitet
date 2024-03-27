/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
   ],
   theme: {
      screens: {
         sm: "760px",
         md: "992px",
         lg: "1230px",
         xl: "1450px",
         "2xl": "1550px"
      },
      colors: {
         primary: "#3A499C",
         "primary-200": "#CED1E6",
         success: "#02676C",
         white: "#ffffff",
         gray: "#999",
         "gray-900": "#8A8A8A",
         "gray-800": "#4C4C4C",
         "gray-600": "#797979",
         danger: "#D94540",
         black: "#222",
      },
      extend: {
         fontFamily: {
            poppins: ["poppins-400"],
            "poppins-500": ["poppins-500"],
            "poppins-600": ["poppins-600"],
            "poppins-700": ["poppins-700"],
            "poppins-800": ["poppins-800"],
            "poppins-400": ["poppins-400"],
            "poppins-500": ["poppins-500"],
            "poppins-600": ["poppins-600"],
            "poppins-700": ["poppins-700"],
         },
      },
   },
   plugins: [],
}

