import { z } from 'zod'

import { procedure, router } from '@/core/trpc'

const appRouter = router({
	hello: procedure
		.input(
			z.object({
				name: z.string().optional(),
			}),
		)
		.query(async ({ input: { name = 'World' } }) => {
			return { message: `Hello ${name}!` }
		}),
})

export default appRouter
export type AppRouter = typeof appRouter
