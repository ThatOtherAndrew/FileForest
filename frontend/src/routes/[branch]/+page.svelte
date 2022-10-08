<!--suppress TypeScriptCheckImport-->
<script lang="ts">
  import { page } from '$app/stores';
  import type { PageData } from './$types';

  export let data: PageData;
</script>


<main>
  <form action="/api/branches/{$page.params.branch}/upload" enctype="multipart/form-data" method="post">
    <label for="file-picker">Select a file: </label>
    <input name="file" id="file-picker" type="file">
    <input type="submit" value="Upload">
  </form>

  {#if data.files === undefined}
    <h3>Loading...</h3>
  {:else if data.files.length}
    <div id="grid-container">
      {#each data.files as file}
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
