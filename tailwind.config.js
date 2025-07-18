module.exports = {
  darkMode: "class", // or 'media' for OS preference
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          light: "#7C3AED",
          dark: "#7C3AED",
        },
        secondary: {
          light: "#10b981",
          dark: "#059669",
        },
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        surface: {
          light: "#F9F9F9",
          dark: "#111111",
        },
        "surface-1": {
          light: "#EBEBEB",
          dark: "#000000",
        },
        backdrop: {
          light: "#11111133",
          dark: "#11111199",
        },
        text: {
          light: "#000000",
          dark: "#ffffff",
        },
        card: {
          light: "#f9fafb",
          dark: "#262626",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      borderColor: ["dark"],
    },
  },
};
