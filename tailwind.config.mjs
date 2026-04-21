/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', '"Courier New"', 'monospace'],
      },
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'purple-neon': 'var(--color-purple-neon)',
        'purple-glow': 'var(--color-purple-glow)',
        'green-matrix': 'var(--color-green-matrix)',
        'green-bright': 'var(--color-green-bright)',
        'text-primary': 'var(--color-text-primary)',
        'text-dim': 'var(--color-text-dim)',
      },
    },
  },
  plugins: [],
};
