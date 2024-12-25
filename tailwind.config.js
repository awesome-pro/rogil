// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xs': '375px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      '2md': '960px',
      lg: '1024px',
      'xl': '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2048px',
      '5xl': '2304px',
      '6xl': '2560px'
    },
    extend: {
      colors: {
        primary: {
          blue: "var(--blue)",
          cyan: "var(--cyan)"
        },
        secondary: {
          green: "var(--green)",
          violet: "var(--violet)",
          pink: "var(--pink)",
          yellow: "var(--yellow)",
          shade_blue: "var(--shade-blue)",
          shade_cyan: "var(--shade-cyan)",
          shade_green: "var(--shade-green)",
          shade_yellow: "var(--shade-yellow)",
        },
        system: {
          _100: "var(--system-100)",
          _80: "var(--system-80)",
          _70: "var(--system-70)",
          _60: "var(--system-60)",
          _50: "var(--system-50)",
          _40: "var(--system-40)",
          _30: "var(--system-30)",
          _20: "var(--system-20)",
        },
        invert: {
          white100: "var(--invert-white)",
          white80: "var(--invert-80)",
          white60: "var(--invert-60)",
          white20: "var(--invert-20)",
        },
        hover: {
          system_100: "var(--hover-system-100)",
          system_40: "var(--hover-system-40)",
          primary_blue: "var(--hover-blue)",
        },
        bg_gray: "#EEF1F7",
        text_gray: "#B8BDC9",
        ai: "#02133E",
        bg_purple_cyan: "var(--purple-cyan)"
      },
      backgroundImage: {
        gradientText: 'linear-gradient(90deg, #3EBFFC 13.35%, #2962F6 32.36%, #696EF5 59.14%, #CA80F4 84.83%)',
        buildsTrust: 'linear-gradient(180deg, rgba(226, 231, 242, 0.00) 0%, #E2E7F2 19.72%)',
      },
      keyframes: {
        gradientWave: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        gradientWave: 'gradientWave 3s ease infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), function ({ addUtilities }) {
    addUtilities({
      '.bg-gradientText': {
        'background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
    });
  },]
};

export default config;