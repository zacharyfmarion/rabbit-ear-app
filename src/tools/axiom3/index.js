import pointerEvent from "./pointerEvent.js";
import panel from "./panel.svelte";
import icon from "./icon.svelte";
import SVGLayer from "./SVGLayer.svelte";
import {
	reset,
	subscribe,
	unsubscribe,
} from "./stores.js";

const axiom3 = {
	key: "axiom3",
	name: "axiom 3",
	group: "lines",
	icon,
	pointerEvent,
	panel,
	SVGLayer,
	reset,
	subscribe,
	unsubscribe,
};

export default axiom3;
