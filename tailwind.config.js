/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'color-primary': '#141414',
        'color-second': '#4D5761',
        'color-tertiaire': '#344054',
        'color-border-button': '#D0D5DD',
        'p-color': '#384250',
        'color-section': '#F9FAFB',
        'choose-bg': '#F9FAFB',
        'lesson-color': '#1C5CFF',
        'price-bg' : '#F2F4F7',
        'talent-bg' : '#FFEBEF'
      },
      fontFamily: {
        "Inter-Black": ["Inter-Black", "sans-serif"],
        "Inter-Bold": ["Inter-Bold", "sans-serif"],
        "Inter-ExtraBold": ["Inter-ExtraBold", "sans-serif"],
        "Inter-ExtraLight": ["Inter-ExtraLight", "sans-serif"],
        "Inter-light": ["Inter-Light", "sans-serif"],
        "Inter-Medium": ["Inter-Medium", "sans-serif"],
        "Inter": ["Inter-Regular", "sans-serif"],
        "Inter-SemiBold": ["Inter-SemiBold", "sans-serif"],
        "Inter-Thin": ["Inter-Thin", "sans-serif"],
      },
    },
  },
  plugins: [],
}

