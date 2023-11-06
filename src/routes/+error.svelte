<script>
	import { page } from '$app/stores'
</script>

<div>
	{#if $page.error != null}
			<h1>{$page.status}</h1>
		{#if $page.status === 503}
            <p>The server is unavailable, please contact the administrators.</p>
        {:else}
			<p>{$page.error.message}</p>
		{/if}
	{/if}
</div>
