module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'real-screen': 'calc(var(--vh) * 100)',
      },
      keyframes: {
        'bottom-sheet-up': {
          '0%': { transform: 'translateY(calc(var(--vh) * 100))' },
          '100%': { transform: 'translateY(0)' },
        },
        'bottom-sheet-down': {
          '0%' : { transform: 'translateY(0%)' },
          '100%' : {
            transform: 'translateY(100%)' },
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
        },
        listStyleImage: {
          checkmark: "url('../assets/images/icon_info.svg')",
        }
      },
    },
    minHeight: {
      'real-screen': 'calc(var(--vh) * 100)',
    },
  },
  mode: "jit",
  plugin: [],
};
