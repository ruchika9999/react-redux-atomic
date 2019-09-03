import { reversePalette } from "styled-theme/composer";

const theme = {};

theme.palette = {
  primary: ["#272324", "#83B799", "#E2CD6D", "#C2B28F", "#E4D8B4", "#E86F68", "#f5f4dc"],
  grayScale: ["#EEEEEE", "#CCCCCC", "#999999", "#333333"],
  weight: ["300", "400", "400i", "500", "500i", "700", "800", "800"]
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: "Raleway"
};

export default theme;

// follow this link to get better color combination
// https://www.schemecolor.com/skin-and-lips-color-palette.php
