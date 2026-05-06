/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#07080a',
          900: '#0d1014',
          850: '#12161c',
          800: '#171b22',
          700: '#232933',
          500: '#596272'
        },
        signal: {
          cyan: '#7dd3fc',
          amber: '#f5c56b',
          green: '#86efac'
        }
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        console: '0 24px 80px rgba(0, 0, 0, 0.38)'
      }
    }
  },
  plugins: []
};
