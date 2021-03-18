import { config, createSchema } from '@keystone-next/keystone/schema'
import 'dotenv/config'
import { User } from './schemas/User'

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-my-online-shop'

console.log({ databaseURL })

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET
}

export default config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    async onConnect(keystone) {
      console.log('Connected to the database!')
      // if (process.argv.includes('--seed-data')) {
      //   await insertSeedData(keystone);
      // }
    }
  },
  lists: createSchema({
    // Schema items go in here
    User
  }),
  ui: {
    // Show the UI only for poeple who pass this test
    isAccessAllowed: () => true
  }
})
