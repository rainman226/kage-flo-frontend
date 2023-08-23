/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      transitionProperty: {
        'all': 'all', // Enables the "all" property for transitions
        'none': 'none', // Enables the "none" property for transitions
        // Add any other custom transition properties you need
      },

      colors: {
        'custom-yellow': '#2B3664',
        
      },
    },
  },
  plugins: [],
}

