import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const colorList = [
  "#16838d",
  "#6d3be3",
  "#4ab4dc",
  "#f59f00",
  "#db5b24",
  "#e75094",
  "#8b165d",
  "#233371",
  "#2172e3",
  "#afe1e6",
  "#bda1fd",
  "#fbb698",
  "#94c2ff",
  "#f6c5db",
  "#41b1ba",
  "#a37efa",
  "#69a8ff",
  "#f2ab68",
  "#ef7744",
  "#f276ae",
  "#792a95",
  "#2c429c",
  "#1376bf",
  "#196f77",
  "#4a2a96",
  "#99421d",
  "#1c4072",
  "#6c1e41",
];

const colorLogic = (customColor: string) => [
  `bg-${customColor}`,
  `border-${customColor}`,
  `hover:bg-${customColor}`,
  `hover:border-${customColor}`,
  `hover:text-${customColor}`,
  `fill-${customColor}`,
  `ring-${customColor}`,
  `stroke-${customColor}`,
  `text-${customColor}`,
  `ui-selected:bg-${customColor}`,
  `ui-selected:border-${customColor}`,
  `ui-selected:text-${customColor}`,
];

const colorAddition = colorList
  .map((color) => `[${color}]`)
  .flatMap(colorLogic);

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      colors: {
        // light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: "#131A2B",
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  safelist: [...colorAddition],

  plugins: [require("@headlessui/tailwindcss"), require("@tailwindcss/forms")],
};
export default config;
