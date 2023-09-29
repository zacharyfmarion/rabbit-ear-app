import {
	writable,
	derived,
} from "svelte/store";
import {
	snapToEdge,
	snapToRulerLine,
} from "../../js/snap.js";
import { zipArrays } from "../../js/arrays.js";
import { executeCommand } from "../../kernel/execute.js";
import { RulerLines } from "../../stores/Ruler.js";
import {
	UILines,
	Highlight,
} from "../../stores/UI.js";

export const Move = writable(undefined);
export const Presses = writable([]);
export const Releases = writable([]);

export const Touches = derived(
	[Move, Presses, Releases],
	([$Move, $Presses, $Releases]) => zipArrays($Presses, $Releases)
		.concat([$Move])
		.filter(a => a !== undefined),
	[],
);

export const Step = derived(Touches, ($Touches) => $Touches.length, 0);

export const Edge0 = derived(
	Touches,
	($Touches) => snapToEdge($Touches[0], false).edge,
	undefined,
);

export const Edge1 = derived(
	Touches,
	($Touches) => snapToEdge($Touches[1], false).edge,
	undefined,
);

export const Segment0 = derived(
	Touches,
	($Touches) => snapToRulerLine($Touches[2], false).coords,
	undefined,
);

export const Segment1 = derived(
	Touches,
	($Touches) => snapToRulerLine($Touches[3], false).coords,
	undefined,
);

export const Highlights = derived(
	[Edge0, Edge1],
	([$Edge0, $Edge1]) => {
		Highlight.reset();
		const edges = [$Edge0, $Edge1].filter(a => a !== undefined);
		Highlight.addEdges(edges);
	},
	undefined,
);

export const AxiomPreview = derived(
	[Edge0, Edge1],
	([$Edge0, $Edge1]) => (
		($Edge0 !== undefined && $Edge1 !== undefined
			? executeCommand("axiom3Preview", $Edge0, $Edge1)
			: UILines.set([]))),
	undefined,
);

export const reset = () => {
	Move.set(undefined);
	Presses.set([]);
	Releases.set([]);
	RulerLines.set([]);
};

let unsub0;
let unsub1;

export const subscribe = () => {
	unsub0 = AxiomPreview.subscribe(() => {});
	unsub1 = Highlights.subscribe(() => {});
};

export const unsubscribe = () => {
	reset();
	if (unsub0) { unsub0(); }
	if (unsub1) { unsub1(); }
};
