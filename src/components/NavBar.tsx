import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import type { JSX } from "react";

const NavBar = (): JSX.Element => {
	return (
		<div className="container mx-auto px-4">
			<nav className="flex gap-2 justify-between items-center text-lg">
				<Link
					to="/"
					activeProps={{
						className: "font-bold",
					}}
					className="font-mono text-xl font-bold text-white"
					activeOptions={{ exact: true }}
				>
					thozials<span className="text-blue-400">.app</span>
				</Link>

				<ul className="flex gap-4 items-center">
					<li>
						<Link
							to="/posts"
							activeProps={{
								className: "font-bold",
							}}
						>
							Posts
						</Link>
					</li>
					<li>
						<Link
							to="/create-post"
							activeProps={{
								className: "font-bold",
							}}
						>
							Create Post
						</Link>
					</li>
					<li>
						<Button className="bg-blue-400 hover:bg-blue-500">Sign in</Button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export { NavBar };
