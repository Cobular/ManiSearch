<script lang="ts">
	import type { FuseDocument } from "$lib/data";
	import type { FuseResult } from "fuse.js";

  export let doc_name: string;
  export let doc_number: number;

  export let results: FuseResult<FuseDocument>[]

  let this_doc_results = results.filter(result => result.item.manifest_name === doc_name);

  $: this_doc_results = results.filter(result => result.item.manifest_name === doc_name);
</script>

<ul>
  {#each this_doc_results as result }
    <li>{result.item.item}</li>
  {/each}
</ul>
