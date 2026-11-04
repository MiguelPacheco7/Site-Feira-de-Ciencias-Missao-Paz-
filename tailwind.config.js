export default {
  safelist: [
    { pattern: /(bg|text|border|shadow|from|to|via)-escola-(primary|secondary|accent|success|warning|danger|purple|dark|darker|card|glass)/ },
    { pattern: /(bg|text|border)-(slate|cyan|sky|emerald|amber|rose|violet|fuchsia|teal|indigo|lime|orange)-(50|100|200|300|400|500|600|700|800|900|950)/ },
    { pattern: /animate-(fade-in|fade-in-up|fade-in-down|pulse|float|pulse-glow|gradient-animate|float-slow)/ },
    { pattern: /backdrop-blur-(xl|2xl|3xl)/ },
    { pattern: /(w|h)-(11|13|14|15|16|18|20|24|32|40|48|56|64|72|80|96)/ },
    'bg-escola-darker', 'bg-escola-darker/60', 'bg-escola-darker/40', 'bg-escola-darker/95', 'bg-escola-darker/90', 'bg-escola-darker/80',
    'bg-white/5', 'bg-white/10', 'bg-white/[0.03]', 'bg-white/[0.06]', 'bg-white/[0.07]', 'bg-white/[0.02]', 'bg-white/15',
    'border-white/5', 'border-white/10', 'border-white/[0.06]', 'border-white/[0.07]',
    'text-slate-400', 'text-slate-100',
    'pb-[max(0.75rem,env(safe-area-inset-bottom))]',
    'animate-shimmer-sweep',
    'bg-radial-escola',
    'bg-grid-pattern',
  ],
  theme: {
    extend: {
      colors: {
        escola: {
          primary: '#0ea5e9',
          secondary: '#06b6d4',
          accent: '#22d3ee',
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          purple: '#8b5cf6',
          dark: '#0f172a',
          darker: '#020617',
          card: 'rgba(15, 23, 42, 0.4)',
          glass: 'rgba(255, 255, 255, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'gradient-animate': 'gradientShift 4s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'ripple': 'ripple 0.7s linear',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-3d': 'spin3d 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.25), 0 0 40px rgba(34, 211, 238, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(34, 211, 238, 0.5), 0 0 80px rgba(34, 211, 238, 0.2)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(4deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        spin3d: {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(360deg)' },
        },
      },
      boxShadow: {
        'escola': '0 10px 40px -10px rgba(14, 165, 233, 0.3)',
        'escola-lg': '0 20px 60px -15px rgba(34, 211, 238, 0.35)',
        'card': '0 4px 20px -4px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'inner-glow': 'inset 0 0 30px rgba(34, 211, 238, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px)",
        'radial-escola': 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
      },
    }
  }
}
