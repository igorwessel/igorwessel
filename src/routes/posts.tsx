import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts")({
	component: RouteComponent,
	staticData: {
		isDirectory: true,
	},
});

function RouteComponent() {
	return <Outlet />;
}
