/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./site/.vitepress/theme/**/*.vue",
    "./site/**/*.md",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   // ...
// }