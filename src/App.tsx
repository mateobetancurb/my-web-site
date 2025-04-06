import {
	createRouter as createTanStackRouter,
	RouterProvider,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createTanStackRouter({
	routeTree,
	defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function App() {
	return <RouterProvider router={router} />;
}

export { App };
