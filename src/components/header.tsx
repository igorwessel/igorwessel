"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<header className="flex justify-between items-center">
			<div className="space-y-4 flex gap-2 text-sm">
				<span className="text-muted-foreground">igorwessel@blog</span>
				<span className="text-muted-foreground">~</span>
				<span className="text-muted-foreground">[🇧🇷]</span>
				<span className="text-primary">$</span>
				<span className="text-foreground">cat </span>
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
