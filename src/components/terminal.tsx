"use client";

import { useLocation, useNavigate } from "@tanstack/react-router";
import type React from "react";

import { useEffect, useRef, useState } from "react";

const translations = {
	en: {
		help: "Available commands: help, ls, cd [page], clear, lang [en|es]",
		invalidCommand: "Command not found. Type 'help' for available commands.",
		languageChanged: "Language changed to",
	},
	es: {
		help: "Comandos disponibles: help, ls, cd [página], clear, lang [en|es]",
		invalidCommand:
			"Comando no encontrado. Escribe 'help' para ver comandos disponibles.",
		languageChanged: "Idioma cambiado a",
	},
};

export function Terminal() {
	const [command, setCommand] = useState("");
	const [output, setOutput] = useState<string[]>([]);
	const [showCursor, setShowCursor] = useState(true);
	const [language, setLanguage] = useState<"en" | "es">("en");

	const navigate = useNavigate();
	const pathname = useLocation({
		select: (location) => location.pathname,
	});
	const inputRef = useRef<HTMLInputElement>(null);

	const t = translations[language];

	useEffect(() => {
		const interval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 530);
		return () => clearInterval(interval);
	}, []);

	const handleCommand = (cmd: string) => {
		const trimmedCmd = cmd.trim().toLowerCase();
		const parts = trimmedCmd.split(" ");
		const mainCmd = parts[0];

		switch (mainCmd) {
			case "help":
				setOutput([t.help]);
				break;
			case "ls":
				setOutput(["~/  posts/  about.md"]);
				break;
			case "cd":
				const page = parts[1];
				if (page === "~" || page === "home" || !page) {
					navigate({ to: "/" });
					setOutput([]);
				} else if (page === "posts" || page === "posts/") {
					navigate({ to: "/posts" });
					setOutput([]);
				} else if (page === "about" || page === "about.md") {
					navigate({ to: "/about" });
					setOutput([]);
				} else {
					setOutput([`cd: no such file or directory: ${page}`]);
				}
				break;
			case "clear":
				setOutput([]);
				break;
			case "lang":
				const newLang = parts[1] as "en" | "es";
				if (newLang === "en" || newLang === "es") {
					setLanguage(newLang);
					setOutput([`${t.languageChanged} ${newLang}`]);
				} else {
					setOutput(["Usage: lang [en|es]"]);
				}
				break;
			default:
				if (trimmedCmd) {
					setOutput([t.invalidCommand]);
				}
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (command.trim()) {
			handleCommand(command);
			setCommand("");
		}
	};

	const getCurrentPath = () => {
		if (pathname === "/posts") return "~/posts";
		if (pathname === "/about") return "~/about";
		return "~";
	};

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
			<div className="container mx-auto px-4 py-3 max-w-4xl">
				{output.length > 0 && (
					<div className="mb-2 text-sm text-muted-foreground">
						{output.map((line, i) => (
							<div key={i}>{line}</div>
						))}
					</div>
				)}
				<form
					onSubmit={handleSubmit}
					className="flex items-center gap-2 text-sm"
				>
					<span className="text-muted-foreground">igorwessel@blog</span>
					<span className="text-muted-foreground">{getCurrentPath()}</span>
					<span className="text-muted-foreground">{"[🇧🇷]"}</span>
					<span className="text-primary">$</span>
					<input
						ref={inputRef}
						type="text"
						value={command}
						onChange={(e) => setCommand(e.target.value)}
						className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
						placeholder="Type a command..."
						autoFocus
					/>
					<span className={showCursor ? "opacity-100" : "opacity-0"}>▊</span>
				</form>
			</div>
		</div>
	);
}
