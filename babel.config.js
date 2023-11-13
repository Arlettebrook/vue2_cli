module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 缺什么依赖npm i ’‘ 安装就好，新版vue/cli：es2015改成@babel/preset-env
    // ["es2015", { "modules": false }],
    ["@babel/preset-env", { "modules": false }],
  ],
  // "plugins": [
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
