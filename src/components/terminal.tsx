"use client";

import { Cursor } from "./ui/cursor";

export function Terminal() {
	return (
		<div className="space-y-4">
			<div className="space-y-4 pl-4 border-l-2 border-border">
				<h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
					{">"} Igor Wessel
				</h1>

				<div className="flex items-center gap-2 text-sm">
					<span className="text-primary">$</span>
					<span className="text-foreground">ls -la posts/</span>
					<Cursor />
				</div>
			</div>
		</div>
	);
}
