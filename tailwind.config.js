module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#7F9965",
        secondary: "#A5CB7F",
        danger: "#FFFFFF",
      }),

      textColor: {
        primary: "#7F9965",
        secondary: "#A5CB7F",
        danger: "#FFFFFF",
        header: "#707070",
      },

      minWidth: {
        0: "0",
        40: "40px",
        300 : '300px',
        400: "400px",
        170: "170px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },

      maxWidth: {
        0: "0",
        400: "400px",
        450: "450px",
        500: "500px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/12": "30%",
        full: "100%",
      },
      width: {
        27: "27%",
        73: "73%",
        170: "1270px",
        full: "100%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "3/4": "75%",
        "6/7": "85.7142857%",
        "2/4": "50%",
        '70screen' : '70vw',
        '60screen' : '60vw',
        '50screen' : '50vw',
        '30screen' : '30vw',
        '40screen' : '40vw',
        "100screen": "100vw",
      },
      height: {
        "8screen": "8vh",
        72: "72%",
        70: "70%",
        60: "60%",
        65: "65%",
        80 : '80%',
        '90' : '90%',
        100: "100px",
        full: "100%",
        "50screen": "50vh",
        "60screen": "60vh",
        "62screen": "62vh",
        "65screen": "65vh",
        "70screen": "70vh",
        "80screen": "80vh",
        "90screen": "90vh",
        "92screen": "92vh",
        '100screen' : '100vh',
        2: "3rem",
        4: "4rem",
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        650: "650px",
      },
      flexGrow: {
        1: 1,
        2: 2,
        3: "3",
        4: "4",
        5: "5",
      },
      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
