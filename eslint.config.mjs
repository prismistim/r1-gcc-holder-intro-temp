import eslintPluginAstro from 'eslint-plugin-astro'

/** @type {import('eslint')} */
export default {
  extends: ['plugin:tailwindcss/recommended', 'plugin:astro/recommended'],
  plugins: ['astro', 'tailwindcss']
}
