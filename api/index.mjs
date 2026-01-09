// api/index.mjs
import pkg from '@react-router/node';
const { createRequestHandler } = pkg;

// Import the server build
const build = await import('../build/server/index.js');

// Create the request handler
const handler = createRequestHandler({ build });

// Export as default for Vercel
export default handler;


