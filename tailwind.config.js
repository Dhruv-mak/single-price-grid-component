/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        cyan_mod: "hsl(179, 62%, 43%)",
        bright_yellow: "hsl(71, 73%, 54%)",
        light_gray: "hsla(202, 28%, 72%, 0.97)",
        grayish_blue: "hsl(218, 22%, 67%)",
      }
    },
    fontFamily: {
    karla: ['Karla', 'sans-serif'], 
    }
  },
  plugins: [],
}

