<script lang="ts">
  import { browser } from '$app/environment';
  import { request } from '../lib/requests';

  let branches: string[];

  export function update() {
    request('/api/branches/', { method: 'GET' }, response => {
      branches = response as string[];
    });
  }

  if (browser) {
    update();
  }
</script>


<main>
  {#if branches === undefined}
    <h3>Loading...</h3>
  {:else if branches.length}
    <div id="grid-container">
      {#each branches as branch}
        <a href="/{branch}">
          <div id="grid-item">{branch}</div>
        </a>
      {/each}
    </div>
  {:else}
    <h3>No items</h3>
  {/if}
</main>


<style lang="scss">
  main {
    margin: 30px 0;
  }

  #grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  #grid-item {
    margin: 5px;
    padding: 3px;
    background-color: #353535;
    border-radius: 5px;
  }

  h3 {
    text-align: center;
  }
</style>
