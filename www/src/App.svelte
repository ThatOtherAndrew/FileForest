<script lang="ts">
  let branchName: string;

  function createBranch(): void {
    fetch(`/api/new?name=${encodeURIComponent(branchName)}`, {method: 'POST'})
      .then(response => response.json())
      .then((data: object) => {
        if (data.success) {
          alert(`Branch ${branchName} successfully created`)
        } else {
          alert(`A problem occurred`)
        }
      })
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
