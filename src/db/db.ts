import { PrismaClient } from "@prisma/client";

declare global {
  // biome-ignore lint/style/noVar: <explanation>
  var prisma: PrismaClient | undefined;
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export const prisma = global.prisma || new PrismaClient();

if (process.env.NOVE !== "production") {
  global.prisma = prisma;
}

export const connect = prisma.$connect();
export const disconnect = prisma.$disconnect();
