import { get, writable } from "svelte/store";
import {
	Frames,
	FrameIndex,
} from "./Model.js";
import { UndoHistoryLength } from "./App.js";
import { Selection } from "./Select.js";
/**
 * @description
 */
export const FileHistory = writable([]);
/**
 *
 */
FileHistory.add = (item) => FileHistory.update((history) => {
	const newHistory = [...history, item];
	if (newHistory.length > UndoHistoryLength) {
		newHistory.shift();
	}
	return newHistory;
});
/**
 *
 */
FileHistory.cache = () => FileHistory
	.add(structuredClone(get(Frames)));
/**
 *
 */
FileHistory.undo = () => FileHistory.update((history) => {
	const frames = history.pop();
	// should mimic LoadFile, in terms of what gets reset.
	if (frames) {
		Selection.reset();
		FrameIndex.update(index => Math.max(index, frames.length - 1));
		Frames.set(frames);
	}
	return history;
	// return [...history];
});
/**
 * todo
 */
FileHistory.redo = () => FileHistory.update((history) => history);
/**
 *
 */
export const TerminalHistory = writable([]);
