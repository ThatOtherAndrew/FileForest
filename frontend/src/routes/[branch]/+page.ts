import type { PageLoad } from './$types';

// noinspection JSUnusedGlobalSymbols
export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(`/api/branches/${params.branch}`, { method: 'GET' });
  const json = await response.json();
  return { files: json as string[] };
};
