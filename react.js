module.exports = (context, options) => ({
  presets: [
    [require.resolve("."), options],
    require.resolve("babel-preset-react"),
  ],
});
