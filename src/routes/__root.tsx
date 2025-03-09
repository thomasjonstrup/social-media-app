import { NavBar } from "@/components/NavBar";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Link,
	Outlet,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import type { JSX } from "react";

const RootComponent = (): JSX.Element => {
	return (
		<div className="min-h-screen transition-opacity duration-700 pt-4 justify-center bg-black text-white text-[calc(10px+2vmin)]">
			<NavBar />
			<div className="container mx-auto px-4 py-6">
				<Outlet />
			</div>
			<ReactQueryDevtools buttonPosition="bottom-left" />
			<TanStackRouterDevtools position="bottom-right" />
		</div>
	);
};

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: RootComponent,
	notFoundComponent: () => {
		return (
			<div>
				<p>This is the notFoundComponent configured on root route</p>
				<Link to="/">Start Over</Link>
			</div>
		);
	},
});
