/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        surface: '#ffffff',
        'surface-subtle': '#f4f4f5',
        'border-subtle': '#e4e4e7',
        'border-strong': '#d4d4d8',
        charcoal: {
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
          500: '#71717a',
          400: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#1e3a8a', // Deep refined navy / slate-blue accent
          hover: '#172554',
          subtle: '#f0f5ff',
          ring: '#93c5fd',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
