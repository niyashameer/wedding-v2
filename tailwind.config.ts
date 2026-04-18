import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c8a84b",
          light: "#f0d890",
          wash: "#fdf3c8",
        },
        cream: "#faf8f2",
        ink: {
          DEFAULT: "#2c2416", //"#2c2416"
          soft: "#5a4e38",
        },
        sage: "#7a8c6a",
        terracotta: "#c0734a",
        "sky-wash": "#b8d4e8",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif)", "serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.1" }],
        "display-lg": ["clamp(3.5rem, 10vw, 6rem)", { lineHeight: "1" }],
      },
      animation: {
        "fade-up": "fadeUp 1s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "float-dove": "floatDove 3.5s ease-in-out infinite",
        "float-dove-2": "floatDove 4s ease-in-out 0.8s infinite",
        "float-dove-3": "floatDove 5s ease-in-out 1.6s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        floatDove: {
          "0%, 100%": { transform: "translateY(0px) rotate(-5deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
      },
      animationDelay: {
        "200": "0.2s",
        "500": "0.5s",
        "800": "0.8s",
        "1100": "1.1s",
        "1400": "1.4s",
      },
      backgroundImage: {
        "watercolor-header":
          "linear-gradient(180deg, #f5d76e 0%, #f0c84a 25%, #f8e090 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
