import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.66,
  // 자동으로 구글폰트를 다운받는다!
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"]
    },
    {
      name: "Nanum Gothic",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Nanum Gothic", "sans-serif"]
});

// javascript descriptions을 CSS로 바꿔준다.
typography.injectStyles();

export default typography;
