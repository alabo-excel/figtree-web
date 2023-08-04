/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warning: '#FFCE07',
        white: '#ffffff',
        black: '#000000',
        orange: '#F26122',
      },
      screens: {
        sm: { max: "700px" },
        md: "700px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}
