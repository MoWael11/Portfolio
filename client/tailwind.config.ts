import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
      },
      screens: {
        'xl': '1100px',
        'xxl': '1300px',
      }
    },
    extend: {
      colors: {
        'dark': 'var(--bg-dark)',
        'dark-header': 'var(--bg-dark-header)',
        'dark-footer': 'var(--bg-dark-footer)',
        'dark-links': 'var(--bg-dark-links)',
        'primary-text': 'var(--primary-color)',
        'secondary-text': 'var(--secondary-color)',
        'error-text': 'var(--error-color)',
        'dark-secondary-bg': 'var(--bg-secondary-color)',
        'dark-hover-secondary-bg': 'var(--bg-hover-secondary-color)',
        'dark-border': 'var(--border-color)',
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '920px',
        'xl': '1200px',
        'xxl': '1400px',
      },
      fontFamily: {
        'roboto': 'var(--font-roboto)',
        'roboto-mono': 'var(--font-roboto-mono)',
      },
      gridTemplateColumns: {
        'projects': 'repeat(auto-fill, minmax(450px, 1fr))',
        'projects-sm': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      keyframes: {
        'text': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          }
        },
      },
    },
  },
  plugins: [
    
  ],
}

export default config