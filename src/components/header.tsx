"use client";

import {
	useLoaderData,
	useLocation,
	useMatches,
	useParams,
} from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Command } from "./command";
import { Button } from "./ui/button";

export default function Header() {
	const location = useLocation();
	const match = useMatches();
	const isDirectory = useLoaderData({ from: match[1]?.routeId });
	const params = useParams({ from: match[1]?.routeId });

	const argument =
		"id" in params
			? `${params.id}.md`
			: location.pathname === "/"
				? "welcome.md"
				: location.pathname.slice(1) + (!isDirectory ? ".md" : "");

	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<header className="flex justify-between items-center">
			<div className="space-y-4 flex gap-2 text-sm">
				<span className="text-muted-foreground">igorwessel@blog</span>
				<span className="text-muted-foreground">~</span>
				<span className="text-muted-foreground">[🇧🇷]</span>

				<Command
					prefix={false}
					command={!isDirectory ? "cat" : "ls -la"}
					args={argument}
				/>
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
