const {
  addDecoratorsLegacy, // decorator를 사용할 수 있도록 config 설정
  disableEsLint,
  override,
} = require("customize-cra");

// 사용자 정의 webpack 설정
module.exports = {
  webpack: override(disableEsLint(), addDecoratorsLegacy()),
};
