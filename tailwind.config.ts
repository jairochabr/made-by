import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      container: {
        padding: "1rem",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #FEECFF 0%, #FECAFF 11.71%, #FEB5FF 26.8%, #FFDBE7 40.18%, #FFF4D6 49.22%, #F3FCD7 58.71%, #D2F5EE 71.29%, #C3EFFF 84.44%, #FBEFFF 100%)"
      },
      colors: {
      },
    },
  },
  plugins: [],
} satisfies Config;
