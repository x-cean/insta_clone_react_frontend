import axios from "axios";

// We define the base URL of our backend API.

// for local development use http://localhost:3000

// for deployed backend use the Render URL below
const api = axios.create({
  baseURL: "https://insta-clone-backend-8x0g.onrender.com", // Your Fastify backend address
});

export { api };