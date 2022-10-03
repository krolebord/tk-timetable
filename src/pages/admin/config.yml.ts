import type { APIRoute } from "astro";
import config from "../../netlify-cms.config";

export const get: APIRoute = () => {
  return { body: JSON.stringify(config) };
};
