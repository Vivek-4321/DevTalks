import { PrismaClient } from '../database/generated/client/deno/edge.ts';
import { config } from 'https://deno.land/x/dotenv/mod.ts';

const envVars = config();


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const hello = () => {
  return 'Hello, World!';
};

export const getUserById = async (parent, args) => {
  const { id } = args;
  return prisma.user.findUnique({ where: { id } });
};

export const createUser = async (parent, args) => {
  const { username, password } = args;
  return prisma.user.create({ data: { username, password } });
};

export const updateUser = async (parent, args) => {
  const { id, username, password } = args;
  return prisma.user.update({ where: { id }, data: { username, password } });
};

export const deleteUser = async (args) => {
  const { id } = args;
  return prisma.user.delete({ where: { id } });
};

