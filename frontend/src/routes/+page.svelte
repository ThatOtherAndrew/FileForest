<script lang="ts">
  import BranchesWidget from '../components/BranchesWidget.svelte';
  import { request } from '../lib/requests';

  let branches: BranchesWidget;
  let branchName: string;

  function createBranch(): void {
    request(`/api/branches/?id=${encodeURIComponent(branchName)}`, { method: 'POST' }, null, alert);
    document.forms[0].reset();
    branches.update();
  }
</script>


<main>
  <form on:submit|preventDefault={createBranch}>
    <label for="branch-name">Branch name: </label>
    <input bind:value={branchName} id="branch-name" type="text" placeholder="my-branch" pattern="[A-Za-z0-9_-]+"
           maxlength="64" title="Branch name can only contain alphanumeric characters, underscores and hyphens.">
    <input type="submit" value="Create new branch">
  </form>

  <BranchesWidget bind:this={branches}/>
</main>


<style lang="scss">
  input:invalid {
    color: red;
  }
</style>
