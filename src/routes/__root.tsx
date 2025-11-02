import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Footer from "@/components/footer";
import { GeekModeProvider } from "@/components/geek-mode-provider";
import Header from "@/components/header";
import { TerminalShell } from "@/components/terminal-shell";
import { ThemeProvider } from "@/components/theme-provider";
import { useGeekMode } from "@/hooks/use-geek-mode";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";
import appCss from "@/styles/global.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "igorwessel.blog — Terminal",
			},
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	notFoundComponent: () => <div>Not found</div>,
	shellComponent: RootDocument,
});

const RootShell = ({ children }: { children: React.ReactNode }) => {
	const { geekMode } = useGeekMode();

	if (geekMode) {
		return <TerminalShell>{children}</TerminalShell>;
	}

	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="min-h-screen max-w-4xl mx-auto bg-background p-4 md:p-8">
				<ThemeProvider>
					<GeekModeProvider>
						<RootShell>{children}</RootShell>
						<TanStackDevtools
							config={{
								position: "bottom-right",
							}}
							plugins={[
								{
									name: "Tanstack Router",
									render: <TanStackRouterDevtoolsPanel />,
								},
								TanStackQueryDevtools,
							]}
						/>
					</GeekModeProvider>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
