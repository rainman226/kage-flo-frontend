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
        'ANIME-WATCHING': '#00ff00',     // Uppercase class for "WATCHING"
        'ANIME-COMPLETED': '#ff0000',    // Uppercase class for "COMPLETED"
        'ANIME-ON-HOLD': '#0000ff',     // Uppercase class for "ON HOLD"
        // Add more uppercase background colors for other statuses as need
      },
      
    },
  },
  plugins: [],
}

