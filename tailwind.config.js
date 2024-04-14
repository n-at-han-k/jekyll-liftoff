module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_pages/**/*.html',
    './_pages/**/*.md',
    './_posts/*.md',
    './**/*.md',
    './**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
    fontFamily: {
      'display': ['Helvetica Neue', 'Arial', 'sans-serif'],
      'body': ['Helvetica Neue', 'Arial', 'sans-serif'],
      'sans': ['Helvetica Neue', 'Arial', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}
