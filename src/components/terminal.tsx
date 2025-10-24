"use client";

import { Link } from "@tanstack/react-router";
import { Cursor } from "./ui/cursor";

export function Terminal() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 text-sm">
				<span className="text-muted-foreground">igorwessel@dev.blog</span>
				<span className="text-muted-foreground">~</span>
				<span className="text-primary">$</span>
				<span className="text-foreground">cat welcome.txt</span>
			</div>

			<div className="space-y-4 pl-4 border-l-2 border-border">
				<div>
					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
						{">"} igorwessel
					</h1>
					<p className="text-muted-foreground">
						Technical writings on software engineering, architecture, and
						development practices.
					</p>
				</div>

				<nav className="flex items-center gap-4 text-sm">
					<span className="text-primary">$</span>
					<span className="text-muted-foreground">cd</span>
					<Link
						to="/"
						className="text-foreground hover:text-primary transition-colors"
					>
						~/
					</Link>
					<Link
						to="/posts"
						className="text-foreground hover:text-primary transition-colors"
					>
						posts/
					</Link>
					<Link
						to="/about"
						className="text-foreground hover:text-primary transition-colors"
					>
						about.md
					</Link>
				</nav>

				<div className="flex items-center gap-2 text-sm">
					<span className="text-primary">$</span>
					<span className="text-foreground">ls -la posts/</span>
					<Cursor />
				</div>
			</div>
		</div>
	);
}
