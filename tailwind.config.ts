import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "custom-2": "80% 20%",
        "custom-1": "0% 100%",
        "custom-2_2": "70% 30%",
      },
    },
  },
  plugins: [
    require("rippleui")({
      themes: [
        {
          defaultStyle: true,
          prefersColorScheme: true,
          themeName: "light",
          colorScheme: "light",
          colors: {
            backgroundPrimary: "#c3c7f3",
            red_orange: "#fd3d31",
            my_sin: "#c8a8e9",
            golden_fizz: "#fdf72b",
            screamin_green: "#3cfd5b",
            coral: "#461b92",
            school_yellow: "#ffd900",
            green: "#00ff00",
            Cerulean: "#00bfff",
            purple_heart: "#9932cd",
            fuzzy_Wuzzy: "#c45a5a",
            // secondary: "#37b2f0",
          },
        },
      ],
      removeThemes: ["dark"],
    }),
  ],
};
export default config;
