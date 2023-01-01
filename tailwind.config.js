module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xsm: "0px",
      sm: "480px",
      mds: "600px",
      md: "768px",
      lg: "976px",
      xlg: "1024px",
      xl: "1440px",
      xxl: "2000px",
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
}
