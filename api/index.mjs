// api/index.mjs
import pkg from '@react-router/node';
const { createRequestListener } = pkg;

// Import the server build
const build = await import('../build/server/index.js');

// Create the request listener
const listener = createRequestListener({ build });

// Vercel expects a function that takes (req, res)
export default async function handler(req, res) {
  return listener(req, res);
}


