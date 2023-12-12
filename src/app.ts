import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.user.create({
  data:{
    name: 'Angélica Resende',
    email: 'angelresende007@gmail.com'
  }
})