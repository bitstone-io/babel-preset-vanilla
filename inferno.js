module.exports = (context, options) => ({
  presets: [
    [require.resolve("."), options],
  ],
  plugins: [
    require.resolve("babel-plugin-inferno"),
  ],
});
