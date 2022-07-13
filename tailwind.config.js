/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {

        'show':'rgb(89,40,0)',

        'couch-img': "url('/src/assets/img/couch.png')",
        'dotted-bg': "url('/src/assets/img/dots.svg')",
      }


    },
  },
  plugins: [ 
    // require('flowbite/plugin')
  ],
}
