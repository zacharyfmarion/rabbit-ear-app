<script>
	import Panel from "../../components/Panels/Panel.svelte";
	import {
		AssignType,
		ASSIGN_SWAP,
		ASSIGN_FLAT,
		ASSIGN_UNASSIGNED,
		ASSIGN_CUT,
		ASSIGN_BOUNDARY,
	} from "./stores.js";

	export let showPanel;

	const printable = {
		[ASSIGN_SWAP]: "valley / mountain",
		[ASSIGN_FLAT]: "flat",
		[ASSIGN_UNASSIGNED]: "unassigned",
		[ASSIGN_CUT]: "cut",
		[ASSIGN_BOUNDARY]: "boundary",
	};
</script>

<Panel {showPanel}>
	<span slot="title">Assignment</span>
	<span slot="body">
		<div class="flex-column gap">
			<div class="toggle-row">
				<button
					title={printable[ASSIGN_SWAP]}
					highlighted={$AssignType === ASSIGN_SWAP}
					on:click={() => $AssignType = ASSIGN_SWAP }>V / M</button>
				<button
					title={printable[ASSIGN_FLAT]}
					highlighted={$AssignType === ASSIGN_FLAT}
					on:click={() => $AssignType = ASSIGN_FLAT }>F</button>
				<button
					title={printable[ASSIGN_BOUNDARY]}
					highlighted={$AssignType === ASSIGN_BOUNDARY}
					on:click={() => $AssignType = ASSIGN_BOUNDARY }>B</button>
				<button
					title={printable[ASSIGN_CUT]}
					highlighted={$AssignType === ASSIGN_CUT}
					on:click={() => $AssignType = ASSIGN_CUT }>C</button>
				<button
					title={printable[ASSIGN_UNASSIGNED]}
					highlighted={$AssignType === ASSIGN_UNASSIGNED}
					on:click={() => $AssignType = ASSIGN_UNASSIGNED }>U</button>
			</div>
			<p class="bold">{printable[$AssignType]}</p>
		</div>
	</span>
</Panel>

<style>
	p {
		text-align: center;
	}
	.bold {
		font-weight: bold;
	}
	.toggle-row {
		margin: 0.5rem 0;
		gap: 1px;
	}
	button {
		padding: 0.25rem 0;
		flex: 1 1 auto;
	}
</style>
