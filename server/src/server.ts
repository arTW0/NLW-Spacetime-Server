import 'dotenv/config'

import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import cors from '@fastify/cors'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'path'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../upload'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'shj2h9Hi42j$>scb092/o9o',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server is running on http://localhost:3333')
  })
