<script lang="ts">
  import { request } from "./lib/requests";

  let branchName: string;

  function createBranch(): void {
    request(`/api/branches/?name=${encodeURIComponent(branchName)}`, { method: 'POST' },
      () => {
        alert(`Branch ${branchName} successfully created`)
      }, json => {
        alert(`An error occurred: ${json.detail}`)
      }
    )
  }
</script>


<main>
  <form on:submit|preventDefault={createBranch}>
    <label for="branch-name">Branch name: </label>
    <input bind:value={branchName} id="branch-name" type="text" placeholder="my-branch" pattern="[A-Za-z0-9_-]+"
           maxlength="64" title="Branch name can only contain alphanumeric characters, underscores and hyphens.">
    <input type="submit" value="Create new branch">
  </form>
</main>
