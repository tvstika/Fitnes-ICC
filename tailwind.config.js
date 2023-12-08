/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        black: '#000000',
        white: '#ffffff',
        primary: '#1391AD',
        accent: '#f4cd00',
        darkgreen: '#05242b',
        tosca: '#1AB9BF',
        darktosca: '#107578',
      },
      fontFamily:{
        'heading': ['Poppins', 'sans-serif'],
        'subheading': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif']
      },
      fontSize:{
        'heading': '1.5rem',
        'subheading': '1rem',
        'body': '0.9rem'
      },
      fontWeight:{
        'heading': '700',
        'subheading': '500',
        'body': '400',
      },
      fontStyle: {
        'subheading': 'italic'
      },
      
    },
  },
  plugins: [],
}

