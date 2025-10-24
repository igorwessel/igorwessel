import { useEffect, useState } from "react";

export function Cursor() {
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);
		return () => clearInterval(interval);
	}, []);

	return <span className="animate-blink">▊</span>;
}
