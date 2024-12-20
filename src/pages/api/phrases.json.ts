import { algoliasearch } from 'algoliasearch';

const ALGOLIA_APP_ID = import.meta.env.ALGOLIA_APP_ID;
const ALGOLIA_API_KEY = import.meta.env.ALGOLIA_API_KEY;
const ALGOLIA_INDEX_NAME = import.meta.env.ALGOLIA_INDEX_NAME;

// Define interfaces for type safety
interface Hierarchy {
  lvl0: string | null;
  lvl1: string | null;
  lvl2: string | null;
  lvl3: string | null;
  lvl4: string | null;
  lvl5: string | null;
  lvl6: string | null;
}

interface Phrase {
  url: string;
  url_without_anchor: string;
  anchor: string;
  content: string | null;
  type: string;
  hierarchy: Hierarchy;
  objectID: string;
}

interface AlgoliaResponse {
  hits: Phrase[];
}

export async function GET({ url }: { url: URL }) {
  try {
    const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
    const response = await client.browse({ indexName: ALGOLIA_INDEX_NAME }) as AlgoliaResponse;

    // Filter out unwanted phrases
    const filteredPhrases = response.hits.filter(phrase =>
      phrase.hierarchy.lvl0 !== "Фломастер" &&
      phrase.anchor !== "_top"
    );

    return new Response(
      JSON.stringify({ phrases: filteredPhrases }),
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch index contents',
        details: errorMessage
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
