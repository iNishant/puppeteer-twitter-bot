const viewport = {
  width: 1200,
  height: 3000,
};

module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    args: [`--window-size=${viewport.width},${viewport.height}`],
    defaultViewport: {
      height: viewport.height,
      width: viewport.width,
    },
  },
  browserContext: 'default',
};
