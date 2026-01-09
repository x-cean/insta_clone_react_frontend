// api/index.mjs
export default async function handler(req, res) {
  try {
    // Import the SSR handler
    const build = await import('../build/server/index.js');
    const requestHandler = build.default || build;

    // Call the SSR handler with request/response
    return await requestHandler(req, res);
  } catch (error) {
    console.error('SSR Handler Error:', error);
    console.error('Error stack:', error.stack);

    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message,
      stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
    });
  }
}

