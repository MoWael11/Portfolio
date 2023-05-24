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
      gridTemplateColumns: {
        'projects': 'repeat(auto-fill, minmax(450px, 1fr))',
        'projects-sm': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      keyframes: {
        'dot1-animation': {
          '0%': {
            transform: 'translate(58px, -8px)',
            'box-shadow': '0px 0px 2px 1px rgb(252,255,197)',
            width: '2px',
            height: '2px'
          },
          '20%': {
            transform: 'translate(88px, -10px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '2px',
            height: '2px'
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(168px, -10px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px'
          }
        },
        'dot2-animation': {
          '0%': {
            transform: 'translate(20px, -10px)',
            'box-shadow': '0px 0px 2px 1px rgb(252,255,197)',
            width: '2px',
            height: '2px'
          },
            '40%': {
            transform: 'translate(48px, -40px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '3px',
            height: '3px'
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(90px, -85px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px'
          }
        },
        'dot3-animation': {
          '0%': {
            transform: 'translate(14px, 16px)',
            'box-shadow': '0px 0px 3px 2px rgb(252,255,197)',
            width: '1px',
            height: '1px'
          },
          '40%': {
            transform: 'translate(46px, 24px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '2px',
            height: '2px'
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(80px, 48px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px'
          }
        },
        'dot4-animation': {
          '0%': {
            transform: 'translate(4px, -10px)',
            'box-shadow': '0px 0px 10px 6px rgb(252,255,197)',
            width: '1px',
            height: '1px'
          },
          '100%': {
            'background-color': '#f8ffb2',
            transform: 'translate(40px, -92px)',
            'box-shadow': '0px 0px 0px 0px rgb(252,255,197)',
            width: '0px',
            height: '0px'
          }
        },
        'text': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          }
        },
      },
      animation: {
        'dot1': 'dot1-animation 10s linear infinite',
        'dot2': 'dot2-animation 8s 3s linear infinite',
        'dot3': 'dot3-animation 6s 1s linear infinite',
        'dot4': 'dot4-animation 12s 1s linear infinite',
      },
    },
  },
  plugins: [
    
  ],
}

export default config