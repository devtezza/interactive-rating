module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },   
    extend: {
      spacing: {
        '88': '23rem',        
      },
      colors: {
        'primary': 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'dark-blue-lighted': 'hsl(213, 19%, 25%)',        
        'very-dark': 'hsl(216, 12%, 8%)'     
      },
      fontFamily: {
        body: ['Overpass']
      }
    },
  },
  plugins: [],
}
