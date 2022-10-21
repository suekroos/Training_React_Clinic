/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        animation:{
          'popup': 'popup 8s cubic-bezier(0.22, 1, 0.36, 1) 1 forwards'
        },
      keyframes:{
        'popup':{
          '0%' :{
            transform: 'translateY(0)',
            opacity: '0'
          },
          '0%, 100%' :{
            transform: 'scale(1.0)',
            
          },
          '100%' :{
            transform: 'translateY(0)',
          },
          '80%, 100%' :{
            opacity: '1',
          },
        }
      }
    },
  },
  plugins: [],
}
