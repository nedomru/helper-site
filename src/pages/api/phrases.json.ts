import { algoliasearch } from 'algoliasearch';

const ALGOLIA_APP_ID = 'DN83H0EFK4';
const ALGOLIA_API_KEY = '7137b848847afbf662f766c90f9dbd49';
const ALGOLIA_INDEX_NAME = 'flomaster-chrsnv';

export async function GET({ url }) {
  try {
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const response = await client.browse({ indexName: 'flomaster-chrsnv' });

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
