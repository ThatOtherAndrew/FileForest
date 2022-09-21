<script lang="ts">
  import { browser } from '$app/environment';
  import { fetch_json } from "../lib/requests";

  let branches: string[] = ['Loading...'];

  if (browser) {
    fetch_json('/api/branches/', { method: 'GET' }, response => {
      branches = response.length ? response as string[] : ['No branches'];
    });
  }
</script>


<main>
  {#each branches as branch}
    <div>{branch}</div>
  {/each}
</main>


<style lang="scss">
  main {
    display: grid;
    grid-gap: 20px;

    div {
      border: 1px solid red;
    }
  }
</style>
