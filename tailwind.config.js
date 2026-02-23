/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        secondary: '#0099cc',
        accent: '#ff6b35',
        'text-primary': '#ffffff',
        'text-secondary': '#b3b3b3',
        'bg-dark': '#0a0a0a',
        'bg-card': '#1a1a1a',
        'border-color': '#333333',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      },
    },
  },
  plugins: [],
}
