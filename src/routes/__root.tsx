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
		<div className="min-h-screen transition-opacity duration-700 pt-4 justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
			<div className="p-2 flex gap-2 text-lg">
				<Link
					to="/"
					activeProps={{
						className: "font-bold",
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{" "}
				{/* 				<Link
					to="/posts"
					activeProps={{
						className: "font-bold",
					}}
				>
					Posts
				</Link>{" "}
				<Link
					to="/route-a"
					activeProps={{
						className: "font-bold",
					}}
				>
					Pathless Layout
				</Link>{" "} */}
				<Link
					// @ts-expect-error
					to="/this-route-does-not-exist"
					activeProps={{
						className: "font-bold",
					}}
				>
					This Route Does Not Exist
				</Link>
			</div>
			<hr />
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
