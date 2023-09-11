import pointerEvent from "./pointerEvent.js";
import panel from "./panel.svelte";
import icon from "./icon.svelte";
import SVGLayer from "./SVGLayer.svelte";

const selectTool = {
	key: "selectTool",
	name: "select",
	group: "general",
	order: 1,
	icon,
	pointerEvent,
	panel,
	SVGLayer,
};

export default selectTool;
