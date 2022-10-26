/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}",],
  theme: {
    animationDelay: {
      0: "0s",
      10: "3s",
      20: "6s",
    },
    extend: {
        animation:{
          // 'popup': 'popup 3s cubic-bezier(0.22, 1, 0.36, 1) infinite',
          'img-auto': 'change-img-anime 9s infinite',
        },
        width:{
          '900': '900px'
        },
        height:{
          '700': '700px'
        },
        // backgroundImage:{
        //   'medical_image1': "url('../../images/medical_bear.jpg')",
        //   'medical_image2': "url('./src/ui/images/medical_ope.jpg')",
        //   'medical_image3': "url('./src/ui/images/medical_woman.jpg')",
        // },
      keyframes:{
        // 'popup':{
        //   '0%' :{
        //     transform: 'translateY(0)',
        //     opacity: '0'
        //   },
        //   '0%, 100%' :{
        //     transform: 'scale(1.0)',
            
        //   },
        //   '100%' :{
        //     transform: 'translateY(0)',
        //   },
        //   '80%, 100%' :{
        //     opacity: '1',
        //   },
        // },
        'change-img-anime':{
          '0%' :{
            opacity: '0', 
          },
          '30%' :{
            opacity: '1', 
          },
          '36%' :{
            opacity: '1', 
          },
          '45%' :{
            opacity: '0', 
          },
          '100%' :{
            opacity: '0', 
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
  ],
}
