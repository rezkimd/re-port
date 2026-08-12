import { publicProcedure, router } from "../index";
import { projectRouter } from "./project";
import { profileRouter } from "./profile";

export const appRouter = router({
	healthCheck: publicProcedure.query(() => {
		return "OK";
	}),
	project: projectRouter, 
	profile: profileRouter,
});
export type AppRouter = typeof appRouter;
