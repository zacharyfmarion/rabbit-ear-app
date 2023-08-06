import { writable, derived } from "svelte/store";
// import { tool } from "./tool.js";

// a hash lookup of every keyboard key currently being pressed
// where the dictionary keys are the ______ (key characters?)
export const Keyboard = writable({});

// every touch input
export const Presses = writable([]); // {number[][]} array of points
export const Moves = writable([]); // {number[][]} array of points
export const Releases = writable([]); // {number[][]} array of points
export const Current = writable(undefined); // {number[]} point

export const UIGraph = writable({});
export const UILines = writable([]);
export const UIRays = writable([]);
UILines.add = (newRulers) => UILines.update((r) => [...r, ...newRulers]);
UIRays.add = (newRulers) => UIRays.update((r) => [...r, ...newRulers]);

export const ResetUI = () => {
	Presses.set([]);
	Moves.set([]);
	Releases.set([]);
	Current.set(undefined);
	UIGraph.set({});
	UILines.set([]);
	UIRays.set([]);
};

// export const testStore = derived(
// 	[presses, moves, releases, tool],
// 	([$presses, $moves, $releases, $tool]) => {
// 		switch ($tool) {
// 		case SNAP_NONE: return [];
// 		case SNAP_GRID: return [];
// 		case SNAP_SMART:
// 			// todo. filter. remove duplicates. build voronoi
// 			const g = $graph;
// 			const intersected = $rulerLines
// 				.flatMap(line => intersectGraphLine(g, line));
// 			return [...g.vertices_coords, ...intersected];
// 		}
// 	},
// 	[],
// );
