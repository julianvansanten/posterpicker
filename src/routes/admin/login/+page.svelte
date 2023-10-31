<script lang="ts">
</script>

<div>
	<!-- Login submission form -->
	<form method="POST" action="?/login">
		<input
			class="input"
			title="Enter email address"
			type="email"
			name="email"
			placeholder="john@example.com"
			autocomplete="email"
		/>
		<input class="input" title="Enter password" type="password" name="password" placeholder="password" />
		<button type="submit" class="btn variant-filled">
			<span>Submit login</span>
		</button>
	</form>
</div>
