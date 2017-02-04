module.exports = (context, options) => ({
  presets: [
    [require.resolve("./react"), options],
  ],
  plugins: [
    require.resolve("react-hot-loader/babel"),
  ],
});
