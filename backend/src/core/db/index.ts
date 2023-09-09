import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import env from '@/core/env'

const pool = new Pool({
	connectionString: env.DATABASE_URL,
})

const db = drizzle(pool, {
	logger: true,
})

export default db
