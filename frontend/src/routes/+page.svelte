<script lang="ts">
  import BranchesWidget from "../components/BranchesWidget.svelte";
  import { request } from "../lib/requests";

  let branchName: string;

  function createBranch(): void {
    request(`/api/branches/?id=${encodeURIComponent(branchName)}`, { method: 'POST' },
      () => {
        alert(`Branch ${branchName} successfully created`);
      }, json => {
        alert(`An error occurred: ${json.detail}`);
      }
    );
  }
</script>


<main>
  <form on:submit|preventDefault={createBranch}>
    <label for="branch-name">Branch name: </label>
    <input bind:value={branchName} id="branch-name" type="text" placeholder="my-branch" pattern="[A-Za-z0-9_-]+"
           maxlength="64" title="Branch name can only contain alphanumeric characters, underscores and hyphens.">
    <input type="submit" value="Create new branch">
  </form>

  <BranchesWidget/>
</main>


<style>
  :root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  input:invalid {
    color: red;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
</style>
