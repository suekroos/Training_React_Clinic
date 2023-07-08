/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    fontFamily: {
      icon: "Material Icons",
    },
    animationDelay: {
      0: "0s",
      3: "3s",
      6: "6s",
    },
    extend: {
      animation: {
        "img-auto": "change-img-anime 9s infinite",
      },
      width: {
        900: "900px",
      },
      height: {
        700: "700px",
      },
      backgroundImage: {
        doctor: "url('/src/ui/images/doctor.png')",
      },
      keyframes: {
        "change-img-anime": {
          "0%": {
            opacity: "0",
          },
          "30%": {
            opacity: "1",
          },
          "36%": {
            opacity: "1",
          },
          "45%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
