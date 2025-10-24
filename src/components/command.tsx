import { cn } from "@/lib/utils";

interface CommandProps {
	command: string;
	args?: string | string[];
	prefix?: boolean;
	user?: string;
	className?: string;
	variant?: "inline" | "block";
}

export function Command({
	command,
	args,
	prefix = true,
	user = "igorwessel@blog",
	className,
	variant = "inline",
}: CommandProps) {
	const argsString = Array.isArray(args) ? args.join(" ") : args || "";

	const baseClasses = "flex items-center gap-2 text-sm";
	const variantClasses = {
		inline: "",
		block: "pl-4 border-l-2 border-border",
	};

	if (prefix) {
		return (
			<div className={cn(baseClasses, variantClasses[variant], className)}>
				<span className="text-muted-foreground">{user}</span>
				<span className="text-muted-foreground">~</span>
				<span className="text-muted-foreground">[🇧🇷]</span>
				<span className="text-primary">$</span>
				<span className="text-muted-foreground">{command}</span>
				<span className="text-foreground">{argsString}</span>
			</div>
		);
	}

	return (
		<>
			<span className="text-primary">$</span>
			<span className="text-muted-foreground">{command}</span>
			<span className="text-foreground">{argsString}</span>
		</>
	);
}
