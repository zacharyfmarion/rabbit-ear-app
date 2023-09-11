import pointerEvent from "./pointerEvent.js";
import panel from "./panel.svelte";
import icon from "./icon.svelte";

const translate = {
	key: "translate",
	name: "translate",
	group: "transform",
	order: 1,
	icon,
	pointerEvent,
	panel,
};

export default translate;
