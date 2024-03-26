/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    fontFamily: {
      pre: ['Pretendard'],
    },
    extend: {
      keyframes: {
        'card-sheet-up': {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'card-sheet-down': {
          '0%' : { transform: 'translateY(-100px)' },
          '100%' : { transform: 'translateY(0px)' },
        },
        'left-side-on' :{
          '0%' : { transform : 'translateX(600px)'},
          '100%': { transform: 'translateX(0)' },
        },
        'left-side-out' :{
          '0%' : { transform : 'translateX(0)'},
          '100%': { transform: 'translateX(600px)' },
        },
        'text_left' : {
          "0%" : {transform : 'translateX(200px)'},
          "100%" : {transform : 'translateX(0)'}
        },
        'backgroundImage' : {
          'status-bar' : "url('../image/status_bar_04.png')"
        }
      },
    },
  },
  plugins: [],
}

