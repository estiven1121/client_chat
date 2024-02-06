import twElementPlugin from "tw-elements/dist/plugin.cjs"
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
      },
      width: {
        '1/15': '15%',
        '9/10': '90%',
      },
      fontFamily: {
      }
    },
  },
  plugins: [twElementPlugin],
}

