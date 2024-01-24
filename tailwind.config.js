/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'bgSoft': 'var(--bgSoft)',
        'bgHover': 'var(--bgHover)',
        'textSoft': 'var(--textSoft)'
      }
    },
  },
  plugins: [],
}