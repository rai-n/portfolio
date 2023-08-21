const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.8)',
      },
      animation: {
        glow: 'glow 2s infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
          },
        },
      },
    },
  },
  plugins: [
  ],
};

module.exports = config;
