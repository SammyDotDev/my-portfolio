// useTypewriterOnce.js
import { useEffect, useState } from "react";

/**
 * useTypewriterOnce - types the given text once and provides a blinking "|" cursor.
 * Returns { display, cursorOn } so rendering is explicit and avoids accidental "undefined" concatenation.
 *
 * @param {string} text - text to type
 * @param {number} speed - ms between characters
 * @param {number} cursorBlink - ms for cursor blink interval
 * @returns {{display: string, cursorOn: boolean}}
 */
export function useTypewriterOnce(text = "", speed = 100, cursorBlink = 600) {
	const [display, setDisplay] = useState("");
	const [index, setIndex] = useState(0);
	const [cursorOn, setCursorOn] = useState(true);

	// typing effect: advance index until text.length
	useEffect(() => {
		if (!text) {
			setDisplay("");
			setIndex(0);
			return;
		}

		// reset if text changes
		setDisplay("");
		setIndex(0);
		let mounted = true;
		let timer = null;

		function tick() {
			if (!mounted) return;
			setIndex((prev) => {
				const next = prev + 1;
				if (next <= text.length) {
					// append character only when valid
					setDisplay(text.slice(0, next));
				}
				return next;
			});
		}

		// start typing
		timer = setInterval(() => {
			// stop when we've typed the full string
			setIndex((prev) => {
				if (!mounted) return prev;
				if (prev >= text.length) {
					clearInterval(timer);
					return prev;
				}
				const next = prev + 1;
				setDisplay(text.slice(0, next));
				if (next >= text.length) {
					// we've finished; clear interval next tick
					clearInterval(timer);
				}
				return next;
			});
		}, speed);

		return () => {
			mounted = false;
			clearInterval(timer);
		};
	}, [text, speed]);

	// cursor blinking
	useEffect(() => {
		const id = setInterval(() => setCursorOn((v) => !v), cursorBlink);
		return () => clearInterval(id);
	}, [cursorBlink]);

	return { display, cursorOn };
}
