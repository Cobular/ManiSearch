<script lang="ts">
	import Fuse from 'fuse.js';
	import { fuseDocuments, documents } from '$lib/data';
	import DocumentResult from './DocumentResult.svelte';

	export let search = '';

	const fuse = new Fuse(fuseDocuments, {
		keys: ['item'],
		threshold: 0.3
	});

	let results = fuse.search(search);

	$: results = fuse.search(search);
</script>

<div class="flex flex-col">
	{#each documents as document}
		<div class="mt-2 mb-2 flex flex-col">
			<h2 class="text-lg font-semibold">
				{document.name} - {document.number}
			</h2>
			<DocumentResult doc_name={document.name} doc_number={document.number} {results} />
		</div>
    <hr />
	{/each}
</div>


<details>
  <summary>Debug Information</summary>
  <p>
    Search Term: `{search}`
  </p>

  <p>
    {JSON.stringify(results)}
  </p>
</details>
