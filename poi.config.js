const path = require("path");

module.exports = {
  html: {
    template: "./src/index.ejs",
  },
  presets: [require("poi-preset-bundle-report")()],
  extractCSS: true
};
