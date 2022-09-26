<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { request } from '$lib/requests.js';

  let contents: string[];

  if (browser) {
    request(`/api/branches/${$page.params.branch}`, { method: 'GET' }, response => {
        contents = response as string[];
      }
    );
  }
</script>


<main>
  {#if contents === undefined}
    <h3>Loading...</h3>
  {:else if contents.length}
    <div id="grid-container">
      {#each contents as file}
        <a href="/{$page.params.branch}/{file}">
          <div id="grid-item">{file}</div>
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
