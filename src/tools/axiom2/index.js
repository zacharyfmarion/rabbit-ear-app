import pointerEvent from "./pointerEvent.js";
import panel from "./panel.svelte";
import icon from "./icon.svelte";
import SVGLayer from "./SVGLayer.svelte";
import { subscribe, unsubscribe } from "./stores.js";

const axiom2 = {
	key: "axiom2",
	name: "axiom 2",
	group: "lines",
	icon,
	pointerEvent,
	panel,
	SVGLayer,
	subscribe,
	unsubscribe,
};

export default axiom2;
