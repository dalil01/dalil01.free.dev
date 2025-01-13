<script lang="ts">

	import type { Icons } from "./Icons";

	export let name: Icons;
	export let className: string = '';
	export let onClick: ((event: MouseEvent) => void) | undefined = undefined;

</script>

<i class="{ name } { className }" on:click={ onClick }></i>