module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'cp-dark-gray': '#061113FF',
        'cp-teal': '#55D6BE',
        'cp-green': '#7CEA9C',
        'cp-purple': '#9067C6',
        'cp-red': '#F71735',
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/top_wave.svg')",
      },
    },
  },
  plugins: [],
}
