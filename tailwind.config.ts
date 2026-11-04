import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F5",
        surface: "#F2EFE9",
        ink: {
          DEFAULT: "#111318",
          secondary: "#454B57",
          muted: "#6E7482",
        },
        navy: {
          DEFAULT: "#0F2547",
          deep: "#09172E",
          muted: "#1E3A68",
          tint: "#EBF0F7",
        },
        line: {
          DEFAULT: "#E4E1D8",
          strong: "#CFCBC0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        editorial: "0 20px 50px -15px rgba(15, 37, 71, 0.07)",
        card: "0 4px 20px -2px rgba(17, 19, 24, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
