const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#0000",
      "@menu-dark-bg": "#2c2f48",
      "@layout-sider-background": "#2c2f48",
      "@menu-dark-submenu-bg": "#2c2f48"
    }
  })
);
