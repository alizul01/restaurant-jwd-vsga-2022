/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html, js}', '**/*.php', "./pages/**/*.html",  "./node_modules/flowbite/**/*.js", 'script.js'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')
],
}
