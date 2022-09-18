<script lang="ts">
  import { browser } from '$app/environment';
  import { request } from "../lib/requests";

  let branches: string[] = ['Loading...'];

  if (browser) {
    request('/api/branches/', { method: 'GET' }, response => {
      branches = response.length ? response as string[] : ['No branches'];
    });
  }
</script>


<main>
  {#each branches as branch}
    <div>{branch}</div>
  {/each}
</main>


<style>
  main {
    display: grid;
    grid-gap: 20px;
  }
</style>
