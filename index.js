module.exports = (context, { modules = false } = {}) => ({
  presets: [
    [require.resolve("babel-preset-latest"), {
      es2015: { modules },
    }],
    require.resolve("babel-preset-stage-0"),
  ],
  plugins: [
    [require.resolve("babel-plugin-transform-runtime"), {
      polyfill: false,
    }],
    require.resolve("babel-plugin-transform-decorators-legacy"),
  ],
});
