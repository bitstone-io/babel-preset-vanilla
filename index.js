module.exports = {
  presets: [
    require.resolve("babel-preset-latest"),
    require.resolve("babel-preset-stage-0"),
  ],
  plugins: [
    require.resolve("babel-plugin-transform-runtime"),
  ],
};
