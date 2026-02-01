import type {APIRoute} from 'astro';
import { getVersionsManifest, getCORSHeaders } from './versions.json';

export const GET: APIRoute = async () => {
  return getVersionsManifest(true);
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: getCORSHeaders(),
  });
};
