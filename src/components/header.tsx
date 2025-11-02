import { Link, useMatches } from "@tanstack/react-router";
import { Moon, SquareTerminal, Sun } from "lucide-react";
import { useGeekMode } from "@/hooks/use-geek-mode";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

export default function Header() {
	const matches = useMatches();
	const isMobile = useIsMobile();
	const { setTheme, appTheme } = useTheme();
	const { updateGeekMode, geekMode } = useGeekMode();

	const crumbs = matches
		.filter(
			(match) => match.routeId === "__root__" || !match.routeId.endsWith("/"),
		)
		.map((match) => ({
			...match,
			isDirectory: match.staticData?.isDirectory,
			crumb: match.fullPath === "/" ? "home" : match.pathname.split("/").at(-1),
		}));

	const currentRoute = crumbs[crumbs.length - 1];

	const isDirectory =
		"isDirectory" in currentRoute.staticData &&
		currentRoute.staticData.isDirectory;

	return (
		<header className="flex justify-between items-center mb-8 pb-4 border-b border-border">
			<div className="flex gap-2 text-sm">
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
											? "text-foreground cursor-default no-underline"
											: "text-muted-foreground hover:text-foreground",
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
									<span className="text-muted-foreground/50">/</span>
								) : null}
							</li>
						))}
					</ul>
				</nav>
			</div>

			<ButtonGroup>
				<Button
					variant="ghost"
					onClick={() => updateGeekMode(!geekMode)}
					size="icon-lg"
					aria-label="Switch to geek mode"
				>
					<SquareTerminal />
				</Button>
				<Button
					variant="ghost"
					onClick={() => setTheme(appTheme === "light" ? "dark" : "light")}
					size="icon-lg"
					aria-label="Toggle theme"
				>
					<Sun className="not-dark:hidden" />
					<Moon className="dark:hidden" />
				</Button>
			</ButtonGroup>
		</header>
	);
}
