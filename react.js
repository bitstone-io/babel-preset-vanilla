module.exports = {
  presets: [
    [require.resolve("babel-preset-latest"), {
      es2015: {
        modules: false,
      },
    }],
    require.resolve("babel-preset-stage-0"),
    require.resolve("babel-preset-react"),
  ],
  plugins: [
    [require.resolve("babel-plugin-transform-runtime"), {
      polyfill: false,
    }],
    require.resolve("babel-plugin-transform-decorators-legacy"),
  ],
};
