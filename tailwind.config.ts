import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-dm-sans)", "sans-serif"],
        secondary: ["var(--font-inter)", "sans-serif"],
      },
      container: {
        padding: "1rem",
        center: true,
      },
      backgroundImage: {
        gradient:
          "linear-gradient(90deg, #FEECFF 0%, #FECAFF 11.71%, #FEB5FF 26.8%, #FFDBE7 40.18%, #FFF4D6 49.22%, #F3FCD7 58.71%, #D2F5EE 71.29%, #C3EFFF 84.44%, #FBEFFF 100%)",
        shadow:
          "linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
        hero: "linear-gradient(180deg, #000 0%, #200D42 34.22%, #4F21A1 64.9%, #A46EDB 81.78%)",
        "text-gradient":
          "linear-gradient(to right, #F87BFF, #FB93D0, #FFDD99, #C3F0B2, #2FD8FE)",
      },
      colors: {
        brand: {
          primary: "#5D2CAB",
          secondary: "#AC6AFF",
          gray: "rgba(255,255,255,0.2)",
          white: "#FFFFFF",
        },
      },
      fontSize: {
        "3.5xl": "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
