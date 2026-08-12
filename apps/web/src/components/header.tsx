import { NavLink } from "react-router";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
	const [presentationMode, setPresentationMode] = useState(false);

	const links = [
		{ to: "/", label: "Profile" },
		{ to: "/portfolio", label: "Portfolio" },
		{ to: "/blog", label: "Blog" },
		{ to: "/links", label: "Links" },
	] as const;

	return (
		<header className="border-b">
			<div className="flex items-center justify-between px-4 py-2">
				{/* Left: Navigation */}
				<nav className="flex gap-6 text-lg">
					{links.map(({ to, label }) => (
						<NavLink
							key={to}
							to={to}
							end
							className={({ isActive }) =>
								`transition-colors ${
									isActive ? "font-bold underline" : "text-muted-foreground"
								}`
							}
						>
							{label}
						</NavLink>
					))}
				</nav>

				{/* Right: Controls */}
				<div className="flex items-center gap-4">
					{/* Presentation / Web Switch */}
					<div className="flex items-center gap-2 text-sm">
						<span className={!presentationMode ? "font-semibold" : ""}>
							Web
						</span>

						<button
							type="button"
							onClick={() => setPresentationMode(!presentationMode)}
							className={`
								relative inline-flex h-5 w-10 items-center rounded-full
								transition-colors
								${presentationMode ? "bg-primary" : "bg-muted"}
							`}
						>
							<span
								className={`
									inline-block h-4 w-4 transform rounded-full bg-background
									transition-transform
									${presentationMode ? "translate-x-5" : "translate-x-1"}
								`}
							/>
						</button>

						<span className={presentationMode ? "font-semibold" : ""}>
							Presentation
						</span>
					</div>

					{/* Dark / Light Mode */}
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
