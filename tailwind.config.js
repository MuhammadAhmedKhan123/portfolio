/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'll1': {'min': '1026px', 'max':'1200px'},
        'll': {'min': '900px', 'max':'1026px'},
        'l': {'min': '800px', 'max':'900px'},
        's': {'min': '600px', 'max':'800px'},
        'xs': {'min': '400px', 'max':'600px'},
        'mm': {'min': '0px', 'max':'400px'}
      },
      fontFamily:{
        Fasthand:['Fasthand'],
      },
    },
  },
  plugins: [],
}