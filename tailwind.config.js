/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        brand: {
          50: '#FFF4F0',
          100: '#FFE8E0',
          200: '#FFD1C1',
          300: '#FFBA9F',
          400: '#FF8B5A',
          500: '#FF6B35', // Primary brand color
          600: '#E55A2B', // Hover state
          700: '#CC4A1F',
          800: '#B33B14',
          900: '#992C0A',
        },
        // Neutral Colors
        neutral: {
          50: '#F8F9FA',  // Secondary background
          100: '#F1F3F4',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D', // Secondary text
          700: '#495057',
          800: '#343A40',
          900: '#212529', // Primary text
        },
        // Status Colors
        success: {
          50: '#F0F9F4',
          500: '#28A745',
          600: '#1E7E34',
        },
        warning: {
          50: '#FFF8E1',
          500: '#FFC107',
          600: '#E0A800',
        },
        // Background Colors
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Source Sans Pro', 'Helvetica Neue', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },

      // ✅ Added custom animation for rotating role text
      animation: {
        roleFade: 'roleFade 3s ease-in-out infinite',
      },
      keyframes: {
        roleFade: {
          '0%, 100%': { opacity: 0 },
          '10%, 90%': { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
};
