/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes:{
        pulse:{
          '0%':{
            boxShadow:'0 0 0 0 rgba(3, 168, 124, 0.4)',
          },
          '50%':{
            boxShadow:'0 0 0 75px rgba(3, 168, 124, 0)',
          },
          '100%':{
            boxShadow:'0 0 0 0 rgba(3, 168, 124, 0)',
          },
        },
      },
      animation:{
        pulse:'pulse 3s infinite'
      }
    },
  },
  plugins: [],
}

