import {atom} from "jotai";

export const apiBaseUrlAtom = atom(
	import.meta.env.VITE_API_BASE_URL || "http://localhost:8000"
);

export const apiLoadingAtom = atom(false);
export const apiErrorAtom = atom(null);
