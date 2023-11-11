import { createGlobalStyle } from "styled-components";

export const padding = {
  mobile_vertical: `15px`,
  mobile_horizontal: `15px`,
  desktop_vertical: `55px`,
  desktop_horizontal: `60px`,
};

export const colorPalet = {
  colorBaseBlackTransparent: "#00000099",
  colorBaseBlack100: "#000000",
  colorBaseGray50: "#adb5bd",
  colorBaseWhite50: "#ffffff",
  colorBlueBlue10: "#c9f9fc",
  colorBlueBlue200: "#3d7ad6",
  colorBlueBlue50: "#23acf9",
  colorYellowYellow10: "#fff3cd",
  colorYellowYellow100: "#fbb500",
  colorYellowYellow50: "#fcd015",
  colorYellowYellow700: "#664d03",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Slackey', sans-serif;
    background-color: ${colorPalet.colorBaseGray50};
  }
`;

export default GlobalStyle;
