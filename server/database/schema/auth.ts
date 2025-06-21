import { randomUUID } from 'crypto'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: text('id').primaryKey().$default(() => randomUUID()),
  name: text('name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  avatar: text('avatar'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$type<Date>().$default(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).$type<Date>().$onUpdate(() => new Date()),
})
