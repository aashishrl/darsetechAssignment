/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#fd2331',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}

