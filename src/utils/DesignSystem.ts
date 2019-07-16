import { css } from "styled-components";

export const DesignSystem = {
  colors: {
    blue: {
      // primary
      50: "#DCEEFB",
      100: "#B6E0FE",
      200: "#84C5F4",
      300: "#62B0E8",
      400: "#4098D7",
      500: "#2680C2",
      600: "#186FAF",
      700: "#0F609B",
      800: "#0A558C",
      900: "#003E6B",
    },
    gray: {
      // heavy gray
      50: "#F7F7F7",
      100: "#E1E1E1",
      200: "#CFCFCF",
      300: "#B1B1B1",
      400: "#9E9E9E",
      500: "#7E7E7E",
      600: "#626262",
      700: "#515151",
      800: "#3B3B3B",
      900: "#222222",
    },
    // gray: { // cool gray
    //   50: "#F5F7FA",
    //   100: "#E4E7EB",
    //   200: "#CBD2D9",
    //   300: "#9AA5B1",
    //   400: "#7B8794",
    //   500: "#616E7C",
    //   600: "#52606D",
    //   700: "#3E4C59",
    //   800: "#323F4B",
    //   900: "#1F2933",
    // },
    // gray: { // blue gray
    //   // blue gray neutrals
    //   50: "#F0F4F8",
    //   100: "#D9E2EC",
    //   200: "#BCCCDC",
    //   300: "#9FB3C8",
    //   400: "#829AB1",
    //   500: "#627D98",
    //   600: "#486581",
    //   700: "#334E68",
    //   800: "#243B53",
    //   900: "#102A43",
    // },
    teal: {
      // supporting
      50: "#F0FCF9",
      100: "#C6F7E9",
      200: "#8EEDD1",
      300: "#5FE3C0",
      400: "#2DCCA7",
      500: "#17B897",
      600: "#079A82",
      700: "#048271",
      800: "#016457",
      900: "#004440",
    },
    red: {
      // supporting
      50: "#FFEEEE",
      100: "#FACDCD",
      200: "#F29B9B",
      300: "#E66A6A",
      400: "#D64545",
      500: "#BA2525",
      600: "#A61B1B",
      700: "#911111",
      800: "#780A0A",
      900: "#610404",
    },
    yellow: {
      //supporting
      50: "#FFFAEB",
      100: "#FCEFC7",
      200: "#F8E3A3",
      300: "#F9DA8B",
      400: "#F7D070",
      500: "#E9B949",
      600: "#C99A2E",
      700: "#A27C1A",
      800: "#7C5E10",
      900: "#513C06",
    },
  },
  spacing: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "36px",
    6: "48px",
  },
  borderRadius: {
    1: "2px",
    2: "4px",
    3: "8px",
    4: "14px",
  },
  shadowIos: {
    1: "0 1px 3px rgba(0, 0, 0, 0.2)",
    2: "0 3px 7px rgba(0, 0, 0, 0.2)",
    3: "0 5px 10px rgba(0, 0, 0, 0.2)",
    4: "0 10px 20px rgba(0, 0, 0, 0.2)",
    5: "0 15px 30px rgba(0, 0, 0, 0.2)",
  },
  shadowAndroid: {
    1: 3,
    2: 7,
    3: 10,
    4: 20,
    5: 30,
  },
  typography: {
    caption: `
      font-size: 12px;
      font-weight: bold;
      font-family: open-sans;
    `,
    body: `
      font-size: 16px;
      font-weight: normal;
      font-family: open-sans;
    `,
    h5: `
      font-size: 24px;
      font-weight: normal;
      font-family: open-sans;
    `,
    h4: `
      font-size: 34px;
      font-weight: normal;
      font-family: open-sans;
    `,
    h3: `
      font-size: 48px;
      font-weight: normal;
      font-family: open-sans;
    `,
    h2: `
      font-size: 60px;
      font-weight: normal;
      font-family: open-sans;
    `,
  },
};

// // Neutrals
// "grey-050": "#F7F7F7",
// "grey-100": "#E1E1E1",
// "grey-200": "#CFCFCF",
// "grey-300": "#B1B1B1",
// "grey-400": "#9E9E9E",
// "grey-500": "#7E7E7E",
// "grey-600": "#626262",
// "grey-700": "#515151",
// "grey-800": "#3B3B3B",
// "grey-900": "#222222",

// "cool-grey-050": "#F5F7FA",
// "cool-grey-100": "#E4E7EB",
// "cool-grey-200": "#CBD2D9",
// "cool-grey-300": "#9AA5B1",
// "cool-grey-400": "#7B8794",
// "cool-grey-500": "#616E7C",
// "cool-grey-600": "#52606D",
// "cool-grey-700": "#3E4C59",
// "cool-grey-800": "#323F4B",
// "cool-grey-900": "#1F2933",

// "yellow-vivid-050": "#FFFBEA",
// "yellow-vivid-100": "#FFF3C4",
// "yellow-vivid-200": "#FCE588",
// "yellow-vivid-300": "#FADB5F",
// "yellow-vivid-400": "#F7C948",
// "yellow-vivid-500": "#F0B429",
// "yellow-vivid-600": "#DE911D",
// "yellow-vivid-700": "#CB6E17",
// "yellow-vivid-800": "#B44D12",
// "yellow-vivid-900": "#8D2B0B",

// Supporting
// "cyan-vivid-050": "#E1FCF8",
// "cyan-vivid-100": "#C1FEF6",
// "cyan-vivid-200": "#92FDF2",
// "cyan-vivid-300": "#62F4EB",
// "cyan-vivid-400": "#3AE7E1",
// "cyan-vivid-500": "#1CD4D4",
// "cyan-vivid-600": "#0FB5BA",
// "cyan-vivid-700": "#099AA4",
// "cyan-vivid-800": "#07818F",
// "cyan-vivid-900": "#05606E",

// "orange-vivid-050": "#FFE8D9",
// "orange-vivid-100": "#FFD0B5",
// "orange-vivid-200": "#FFB088",
// "orange-vivid-300": "#FF9466",
// "orange-vivid-400": "#F9703E",
// "orange-vivid-500": "#F35627",
// "orange-vivid-600": "#DE3A11",
// "orange-vivid-700": "#C52707",
// "orange-vivid-800": "#AD1D07",
// "orange-vivid-900": "#841003",

// "red-vivid-050": "#FFE3E3",
// "red-vivid-100": "#FFBDBD",
// "red-vivid-200": "#FF9B9B",
// "red-vivid-300": "#F86A6A",
// "red-vivid-400": "#EF4E4E",
// "red-vivid-500": "#E12D39",
// "red-vivid-600": "#CF1124",
// "red-vivid-700": "#AB091E",
// "red-vivid-800": "#8A041A",
// "red-vivid-900": "#610316",
