<!--suppress TypeScriptCheckImport-->
<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>


<main>
  <p>{data.text}</p>
</main>
