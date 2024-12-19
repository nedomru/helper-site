import { algoliasearch } from 'algoliasearch';

const ALGOLIA_APP_ID = import.meta.env.ALGOLIA_APP_ID
const ALGOLIA_API_KEY = import.meta.env.ALGOLIA_API_KEY
const ALGOLIA_INDEX_NAME = import.meta.env.ALGOLIA_INDEX_NAME

export async function GET({ url }) {
  try {
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const response = await client.browse({ indexName: ALGOLIA_INDEX_NAME });

    return new Response(
      JSON.stringify({ phrases: response }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch index contents',
        details: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}
