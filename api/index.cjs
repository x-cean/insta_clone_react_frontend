// api/index.js
const handler = require('../build/server/index.js');
module.exports = handler.default;
// Wraps React Router SSR server so Vercel can run it as a serverless function.