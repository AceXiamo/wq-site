module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './framework/**/*.{vue,ts}',
    './store/**/*.ts',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      'xl': { max: '1279px' },
      'lg': { max: '1120px' },
      'md': { max: '767px' },
      'sm': { max: '639px' },
    },
  },
};
