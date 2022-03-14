module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        'background-header': "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80')",
      }
    }
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
