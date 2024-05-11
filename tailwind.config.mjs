import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      ...colors,
      primary: '#f43f5e',
      'primary-content': '#262626',
      secondary: '#ddd',
      accent: '#2dd4bf',
      'base-100': '#f3f4f6',
      info: '#38bdf8',
      success: '#4ade80',
      warning: '#fbbf24',
      error: '#ef4444',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        sans: ['"Rubik Variable"', '"M PLUS 2 Variable"', 'sans-serif']
      }
    }
  },
  plugins: []
}
