// noinspection JSUnusedGlobalSymbols

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const response = await fetch(`/api/branches/${params.branch}/${params.file}`, { method: 'GET' });
  console.debug(await response.clone().text());
  return await response.json();
};
