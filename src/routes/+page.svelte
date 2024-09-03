<script lang="ts">
	import Search from '$lib/components/Search.svelte';
  import debounce from 'lodash/debounce'

  let search = '';
    
  const handleInput = debounce(e => {
    search = e.target.value;
  }, 300)
</script>

<div class="flex justify-center">
	<div class="flex w-7/12 max-w-screen-md flex-col gap-4 bg-base-200 p-4 m-4 rounded-lg">
		<h1 class="text-2xl font-bold">Manifest Search</h1>
		<label class="input input-bordered flex items-center gap-2">
			<input type="text" class="grow" placeholder="Search" on:input={handleInput} />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="h-4 w-4 opacity-70"
			>
				<path
					fill-rule="evenodd"
					d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
					clip-rule="evenodd"
				/>
			</svg>
		</label>

    <Search {search} />
	</div>
</div>
