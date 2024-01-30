/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./site/.vitepress/theme/**/*.vue",
    "./site/**/*.md",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll": "loop-scroll 48s linear infinite",
      }, 
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"},
        },
    },
  },
},
  plugins: [],
  
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   // ...
// }