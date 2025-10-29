"use client";

import { Link, useMatches } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Header() {
	const matches = useMatches();
	const [theme, setTheme] = useState<"light" | "dark">("light");
	const isMobile = useIsMobile();

	const currentRoute = matches[matches.length - 1];

	const isDirectory =
		"isDirectory" in currentRoute.staticData &&
		currentRoute.staticData.isDirectory;

	const crumbs = matches
		.filter((match) => match.routeId !== "/")
		.map((match) => ({
			...match,
			crumb: match.fullPath === "/" ? "home" : match.pathname.split("/").at(-1),
		}));

	return (
		<header className="flex justify-between items-center">
			<div className="space-y-4 flex gap-2 text-sm">
				{!isMobile && (
					<span className="text-muted-foreground">igorwessel@blog</span>
				)}
				<span className="text-primary">$</span>
				<span className="text-muted-foreground">
					{isDirectory ? "cd" : "cat"}
				</span>
				<nav aria-label="Main">
					<ul className="*:inline">
						{crumbs.map((match, idx) => (
							<li key={match.fullPath}>
								<Link
									activeOptions={{
										exact: true,
									}}
									className={cn(
										currentRoute.index === idx
											? "text-primary"
											: "text-primary/80",
										"underline-offset-4 hover:underline",
									)}
									from={match.fullPath}
								>
									{match.crumb}
									{idx + 1 === crumbs.length && isDirectory === false
										? ".mdx"
										: null}
								</Link>

								{idx + 1 < crumbs.length ? (
									<div className="inline text-muted-foreground/70">/</div>
								) : null}
							</li>
						))}
					</ul>
				</nav>
			</div>

			<Button
				variant="ghost"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				size="icon-lg"
			>
				{theme === "light" ? <Sun /> : <Moon />}
			</Button>
		</header>
	);
}
