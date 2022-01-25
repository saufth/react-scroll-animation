module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],  
  theme: {
    fontFamily: {
      rob: ['Roboto'],
      mono: ['Share Tech Mono']
    },
    width: {
      '0': '0px',
      '8': '2rem', // 32px
      '9/10': '90%',
      'full': '100%',
      'auto': 'auto',
      'screen': '100vw',
      '64.81px': '64.81px',
      '48.61px': '48.61px'
    },
    height: {
      '0': '0px',
      '4': '1rem', // 16px
      '9': '2.25rem', // 36px
      '16': '4rem', // 64px
      '17.5': '4.375rem', // 70px
      'x': '1000rem', // 72px
      'full': '100%',
      'auto': 'auto',
      'screen': '100vh'
    },
    transitionProperty: {
      'fade': 'width, opacity',
    },
    transitionDuration: {
      '300': '300ms'
    },
    extend: {
      spacing: {
        '17.5': '4.375rem', // 70px
      },
      fontSize: {
        '4cxl': '2.5rem' // 40px
      },
    }
  },
  plugins: [],
  corePlugins: {
    container: false
  }
}
