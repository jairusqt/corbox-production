module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1024px',
          '@screen sm': {
            maxWidth: '1024px',
          },
          '@screen md': {
            maxWidth: '1024px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
        }
      })
    }
  ],
}