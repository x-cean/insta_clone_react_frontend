// api/index.cjs
module.exports = async (req, res) => {
  try {
    // Dynamically import the ESM module
    const { default: handler } = await import('../build/server/index.js');

    // Call the SSR handler
    return await handler(req, res);
  } catch (error) {
    console.error('SSR Handler Error:', error);

    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
      stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
    });
  }
};
