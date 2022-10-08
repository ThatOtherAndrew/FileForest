// noinspection JSUnusedGlobalSymbols

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(`/api/branches/${params.branch}`, { method: 'GET' });
  const json = await response.json();
  return { files: json as string[] };
};
