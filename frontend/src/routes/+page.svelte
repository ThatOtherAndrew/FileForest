<script lang="ts">
  import { request } from "../lib/requests";

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
    <h1>HMR Test!!!!</h1>
    <label for="branch-name">Branch name: </label>
    <input bind:value={branchName} id="branch-name" type="text" placeholder="my-branch" pattern="[A-Za-z0-9_-]+"
           maxlength="64" title="Branch name can only contain alphanumeric characters, underscores and hyphens.">
    <input type="submit" value="Create new branch">
  </form>
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

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  input:invalid {
    color: red;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
</style>