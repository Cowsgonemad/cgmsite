import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'black': 'rgba(var(--black) / <alpha-value>)',
        'pink': 'rgba(var(--pink) / <alpha-value>)',
        'dark-green': 'rgba(var(--dark-green) / <alpha-value>)',
        'green': 'rgba(var(--green) / <alpha-value>)',
        'accent': 'rgba(var(--accent) / <alpha-value>)',
        'yellow': 'rgba(var(--yellow) / <alpha-value>)',
        'dark-grey': 'rgba(var(--dark-grey) / <alpha-value>)'
      },
      fontFamily: {
        screebie: ['var(--font-screebie)'],
        outfit: ['var(--font-outfit)']
      },
      maxWidth: {
        'screen': '100vw'
      },
      scale: {
        '175': '1.75',
        '200': '2'
      },
      boxShadow: {
        'button': '10px 10px'
      },
      opacity: {
        '1': '.1',
        '3': '.3'
      },
      borderRadius: {
        '5xl': '3rem'
      },
      transitionDuration: {
        '20': '.2s'
      },
      borderWidth: {
        '10': '10px',
        '20': '20px'
      },
      keyframes: {
        'soft-bounce': {
          '0%, 100%': {
            'transform': 'translateY(-3%)'
          },
          '50%': {
            'transform': 'none'
          }
        },
        'flicker': {
          '0%, 100%': {
            'filter': 'drop-shadow(2px 4px 20px rgb(var(--accent)))'
          },
          '20%': {
            'filter': 'drop-shadow(2px 4px 20px transparent)'
          },
          '82%': {
            'filter': 'drop-shadow(2px 4px 20px rgb(var(--accent)))'
          },
          '86%': {
            'filter': 'drop-shadow(2px 4px 20px transparent)'
          },
          '88%': {
            'filter': 'drop-shadow(2px 4px 20px rgb(var(--accent)))'
          },
          '96%': {
            'filter': 'drop-shadow(2px 4px 20px transparent)'
          }
        },
        'bg-size': {
          '0,100%': {
            'background-size': '108%'
          },
          '20%': {
            'background-size': '109%'
          },
          '30%': {
            'background-size': '107%'
          },
          '80%': {
            'background-size': '109%'
          }
        }
      },
      animation: {
        'soft-bounce': 'soft-bounce 3s infinite',
        'flicker': 'flicker 2s infinite',
        'bg-size': 'bg-size 10s infinite'
      }
    },
  },
  plugins: [],
};
export default config;
