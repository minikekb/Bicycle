module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#eeeded'

      },
      padding: {
        big: '50px'
      },
    },
  },
}
