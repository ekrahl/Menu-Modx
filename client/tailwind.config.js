module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      keyframes: {
        enlarge125: {
          "0%, 100%": { transform: "scale(1.25) translateX(-40px)" }
        },
        enlarge150: {
          "0%, 100%": { transform: "scale(1.50)" }
        },
        enlarge175: {
          "0%, 100%": { transform: "scale(1.75)" }
        },
        enlarge400: {
          "0%, 100%": { transform: "scale(4)" }
        }
      },
      animation: {
        enlarge125: "enlarge125 30s ease-in",
        enlarge150: "enlarge150 30s ease-in",
        enlarge175: "enlarge175 30s ease-in",
        enlarge400: "enlarge400 30s ease-in"
      },
      fontSize: {
        12: '12px',
        14: '14px',
      },

      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#121212',
        'secondary-dark-bg': '#383838',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'main-blue': '#1B2E3D',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      scale: {
        '150': '1.50',
        '175': '1.75',
        '200': '2.00',
      },
      width: {
        15: '15rem',
        17: '17rem',
        18: '18rem',
        19: '19rem',
        21: '21rem',
        22: '22rem',
        90: '90px',
        100: '100px',
        175: '175px',
        192: '192px',
        200: '200px',
        225: '225px',
        250: '250px',
        275: '275px',
        300: '300px',
        325: '325px',
        350: '350px',
        375: '375px',
        384: '384px',
        400: '400px',
        450: '450px',
        500: '500px',
        525: '525px',
        550: '550px',
        600: '600px',
        700: '700px',
        760: '760px',
        765: '765px',
        780: '780px',
        800: '800px',
        816: '816px',
        1000: '1000px',
        1025: '1025px',
        1040: '1040px',
        1050: '1050px',
        1056: '1056px',
        1100: '1100px',
        1140: '1140px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
        150: '150px',
        165: '165px',
        190: '190px',
        200: '200px',
        225: '225px',
        250: '250px',
        270: '270px',
        275: '275px',
        284: '284px',
        286: '286px',
        288: '288px',
        300: '300px',
        350: '350px',
        342: '342px',
        400: '400px',
        420: '420px',
        425: '425px',
        430: '430px',
        440: '440px',
        450: '450px',
        470: '470px',
        500: '500px',
        576: '576px',
        600: '600px',
        667: '667px',
        700: '700px',
        720: '720px',
        1056: '1056px'

      },
      minHeight: {
        590: '590px',
      },
      maxHeight: {
        150: '150px',
        165: '165px',
        190: '190px',
        200: '200px',
        225: '225px',
        250: '250px',
        275: '275px',
        576: '576px'
      },
      minWidth: {
        50: '50px',
        100: '100px',
        150: '150px',
        250: '250px',
        200: '200px',
        275: '275px',
        300: '300px',
        375: '675px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
        1100: '1100px',
        1200: '1200px',
      },
      maxWidth: {
        100: '100px',
        200: '200px',
        250: '250px',
        300: '300px',
        350: '350px',
        384: '384px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        700: '700px',
        800: '800px',
        900: '900px',
        1000: '1000px',
        1100: '1100px',
        1175: '1175px',
        1200: '1200px',
        1400: '1400px',
        1500: '1500px',
        1800: '1800px',
        2000: '2000px',
      },
      backgroundImage: {
        'logo':
          "url('./data/images/headers/logo.png')",
        'logo2':
          "url('./data/images/headers/oysterCard.jpg')",
        'oyster':
          "url('./data/images/headers/oyster-image.png')",
        'oysters2':
          "url('./data/images/headers/oysters2.jpg')",
        'shuckit':
          "url('./data/images/headers/shuckit.jpg')",
        'veggieprep':
          "url('./data/images/headers/veggieprep.jpg')",
        'leesburg':
          "url('./data/images/headers/leesburg.jpeg')",
        'middleburg':
          "url('./data/images/headers/middleburg.jpg')",
        'cocktail':
          "url('./data/images/headers/cocktail.jpg')",
        'dc3':
          "url('./data/images/headers/dc3.jpg')",
        'dc5':
          "url('./data/images/headers/ksobdc2.jpg')",
        'potomac':
          "url('./data/images/headers/potomac.jpg')",
        'pdr':
          "url('./data/images/headers/pdr.jpg')",
        'pdr2':
          "url('./data/images/headers/pdr2.jpg')",
        'specials':
          "url('./data/images/headers/specials.jpg')",
        'brunch':
          "url('./data/images/headers/brunch.jpg')",
        'dinner':
          "url('./data/images/headers/dinner.jpg')",
        'beer':
          "url('./data/images/headers/beer2.jpg')",
        'hh':
          "url('./data/images/headers/ksobfood.jpg')",
      },
    },
  },
  plugins: [],
};