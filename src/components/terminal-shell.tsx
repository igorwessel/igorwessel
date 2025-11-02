import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface CommandEntry {
	id: string;
	command: string;
	output?: React.ReactNode;
	timestamp: Date;
}

const translations = {
	en: {
		help: "Available commands: help, ls, cd [page], cat [file], clear, history",
		invalidCommand: "Command not found. Type 'help' for available commands.",
	},
	es: {
		help: "Comandos disponibles: help, ls, cd [página], cat [archivo], clear, history",
		invalidCommand:
			"Comando no encontrado. Escribe 'help' para ver comandos disponibles.",
	},
};

export function TerminalShell({ children }: { children: React.ReactNode }) {
	const [command, setCommand] = useState("");
	const [history, setHistory] = useState<CommandEntry[]>([]);
	const [historyIndex, setHistoryIndex] = useState(-1);
	const [showCursor, setShowCursor] = useState(true);
	const [language] = useState<"en" | "es">("en");

	const navigate = useNavigate();
	const location = useLocation();
	const inputRef = useRef<HTMLInputElement>(null);

	const scrollRef = useRef<HTMLDivElement>(null);

	const t = translations[language];

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, []);

	return (
		<div className="h-screen flex flex-col bg-background font-mono text-sm">
			<div className="border-b border-border px-4 py-2 flex items-center justify-between">
				<div className="flex items-center gap-2 text-muted-foreground">
					<span>igorwessel@blog</span>
					<span>~</span>
					<span>[🇧🇷]</span>
					<span className="text-foreground">{location.pathname}</span>
				</div>
				<div className="flex gap-2">
					<div className="w-3 h-3 rounded-full bg-destructive" />
					<div className="w-3 h-3 rounded-full bg-yellow-500" />
					<div className="w-3 h-3 rounded-full bg-green-500" />
				</div>
			</div>

			<ScrollArea className="flex-1">
				<div ref={scrollRef} className="p-4 space-y-4">
					{history.map((entry) => (
						<div key={entry.id} className="space-y-2">
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground">igorwessel@blog</span>
								<span className="text-muted-foreground">
									{location.pathname}
								</span>
								<span className="text-primary">$</span>
								<span className="text-foreground">{entry.command}</span>
							</div>
							{entry.output && <div className="pl-4">{entry.output}</div>}
						</div>
					))}

					<div className="prose prose-invert max-w-none [&>*]:pl-4">
						{children}
					</div>
				</div>
			</ScrollArea>

			<div className="border-t border-border px-4 py-3 flex items-center gap-2">
				<span className="text-muted-foreground">igorwessel@blog</span>
				<span className="text-muted-foreground">{location.pathname}</span>
				<span className="text-muted-foreground">[🇧🇷]</span>
				<span className="text-primary">$</span>
				<input
					ref={inputRef}
					type="text"
					value={command}
					className="flex-1 bg-transparent border-none outline-none text-foreground"
					placeholder="Type a command... (try 'help')"
				/>
				<span
					className={cn(
						"transition-opacity",
						showCursor ? "opacity-100" : "opacity-0",
					)}
				>
					▊
				</span>
			</div>
		</div>
	);
}
